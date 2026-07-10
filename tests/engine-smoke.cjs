const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function createClassList() {
  return {
    add() {},
    remove() {},
    toggle() { return false; },
    contains() { return false; }
  };
}

function createElement() {
  const target = {
    value: "",
    textContent: "",
    innerHTML: "",
    hidden: true,
    disabled: false,
    dataset: {},
    style: {},
    options: [],
    offsetTop: 340,
    offsetHeight: 34,
    clientHeight: 150,
    scrollTop: 0,
    classList: createClassList(),
    addEventListener() {},
    setAttribute() {},
    removeAttribute() {},
    append() {},
    appendChild() {},
    focus() {},
    scrollIntoView() {},
    querySelector(selector) {
      const element = createElement();
      if (selector === ".active") element.getBoundingClientRect = () => ({ top: 340, left: 0, width: 80, height: 34 });
      return element;
    },
    querySelectorAll() { return []; },
    getBoundingClientRect() { return { top: 0, left: 0, width: 390, height: 44 }; }
  };
  return new Proxy(target, {
    get(object, key) {
      if (key in object) return object[key];
      return undefined;
    },
    set(object, key, value) {
      object[key] = value;
      return true;
    }
  });
}

const elements = new Map();
const documentStub = {
  body: createElement(),
  querySelector(selector) {
    if (!elements.has(selector)) elements.set(selector, createElement());
    return elements.get(selector);
  },
  querySelectorAll() { return []; },
  createElement,
  addEventListener() {}
};

const context = {
  console,
  document: documentStub,
  navigator: { clipboard: { writeText: async () => {} } },
  setTimeout,
  clearTimeout,
  requestAnimationFrame(callback) { callback(1234); return 1; },
  Intl,
  Date,
  Math,
  Map,
  Set,
  Promise
};
context.window = context;
context.globalThis = context;

const appPath = path.join(__dirname, "..", "app.js");
const appSource = fs.readFileSync(appPath, "utf8");
const initializationStart = appSource.lastIndexOf("resetLunarControls();");
const sourceWithoutInitialization = appSource.slice(0, initializationStart);
const exposeEngine = `
globalThis.__YUMING_ENGINE__ = {
  buildGeneratedCandidates,
  scoreCandidate,
  selectDiverseResults,
  isGenderCompatible,
  characterMetaMap,
  analyzePhonology,
  fullNamePinyin,
  setSolarPickerFromValue,
  renderSolarPicker,
  solarPickerSnapshot() { return { ...solarPickerState }; },
  nameOverviewText,
  sourceAnalysisText,
  characterMeaningDetails,
  overallMeaningText,
  phonologyAnalysisText,
  genderTendencyText,
  supportText,
  reminderText,
  conclusionText,
  renderResults,
  buildPollText,
  setLastResultsForTest(items) { lastResults = items; },
  resetRounds() { shownResultNames = new Set(); }
};`;

vm.createContext(context);
vm.runInContext(sourceWithoutInitialization + exposeEngine, context, { filename: "app.js" });

const engine = context.__YUMING_ENGINE__;

const beforeDefaulting = new Date();
engine.setSolarPickerFromValue("");
const solarDefault = engine.solarPickerSnapshot();
const afterDefaulting = new Date();
const localDateKey = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
assert.ok(
  [localDateKey(beforeDefaulting), localDateKey(afterDefaulting)].includes(`${solarDefault.year}-${solarDefault.month}-${solarDefault.day}`),
  "公历选择器未默认定位到当天"
);
assert.doesNotThrow(() => engine.renderSolarPicker(), "公历滚轮定位回调异常");
assert.ok(elements.get("#solarYearList").scrollTop > 0, "公历年份滚轮未滚动到当前年份");

function preferences(overrides = {}) {
  return {
    surname: "林",
    gender: "neutral",
    length: "2",
    basis: ["wuxing", "classic", "sound"],
    element: "auto",
    styles: ["书卷气"],
    wish: "仁爱",
    calendarType: "solar",
    birthday: "",
    lunarBirthday: null,
    region: "普通话优先",
    generationChar: "",
    generationPosition: "first",
    likes: [],
    avoids: [],
    season: "",
    zodiac: "",
    bazi: null,
    ...overrides
  };
}

function rankedCandidates(input) {
  return engine.buildGeneratedCandidates(input)
    .filter((item) => engine.isGenderCompatible(item.gender, input.gender))
    .filter((item) => item.phonology?.acceptable !== false)
    .map((item) => {
      const scored = engine.scoreCandidate(item, input);
      return {
        ...item,
        score: scored.score,
        rawScore: scored.rawScore,
        fullName: `${input.surname}${item.given}`,
        displayGiven: item.given
      };
    })
    .filter((item) => item.rawScore > 35)
    .sort((left, right) => right.rawScore - left.rawScore);
}

function verifyCase(label, input) {
  const ranked = rankedCandidates(input);
  assert.ok(ranked.length >= 6, `${label}: 可用候选不足 6 个`);
  engine.resetRounds();
  const selected = engine.selectDiverseResults(ranked, input, 6);
  assert.equal(selected.length, 6, `${label}: 未生成 6 个结果`);
  assert.ok(selected.every((item) => item.given.length === 2), `${label}: 混入非双字名`);
  assert.ok(selected.every((item) => item.phraseSeed), `${label}: 混入单字拼接组合`);
  assert.ok(selected.every((item) => item.phonology.acceptable), `${label}: 混入音律未通过项`);
  assert.ok(selected.every((item) => engine.isGenderCompatible(item.gender, input.gender)), `${label}: 混入性别反向项`);
  if (input.gender !== "neutral") assert.ok(selected.every((item) => item.gender === input.gender), `${label}: 未优先所选性别方向`);
  assert.equal(new Set(selected.map((item) => item.given)).size, 6, `${label}: 结果重名`);
  assert.ok(selected.every((item) => !engine.fullNamePinyin(item).includes("?")), `${label}: 存在缺失拼音`);
  if (input.basis.includes("classic")) {
    assert.ok(selected.every((item) => item.literarySeed), `${label}: 典籍模式未优先完整原句词组`);
    assert.ok(selected.every((item) => item.source.includes("取自") && item.source.includes("“")), `${label}: 典籍出处不完整`);
  }
  return selected.map((item) => `${item.fullName} ${item.phonology.tonePattern}`);
}

const samples = {
  female: verifyCase("女孩典籍", preferences({ surname: "林", gender: "female" })),
  male: verifyCase("男孩典籍", preferences({ surname: "莫", gender: "male" })),
  neutral: verifyCase("复姓典籍", preferences({ surname: "欧阳", gender: "neutral" })),
  meaning: verifyCase("女孩寓意", preferences({ surname: "周", gender: "female", basis: ["wuxing", "sound", "meaning"] }))
};

const fullDoublePool = rankedCandidates(preferences({ surname: "林", gender: "neutral" }));
assert.ok(fullDoublePool.every((item) => item.phraseSeed), "双字候选池仍存在任意单字拼接");
assert.ok(fullDoublePool.every((item) => !engine.fullNamePinyin(item).includes("?")), "双字候选池存在缺失拼音");
assert.ok(fullDoublePool.filter((item) => item.literarySeed).length >= 30, "完整典籍词组数量不足");

const detailedPreferences = preferences({ surname: "林", gender: "female", basis: ["wuxing", "classic", "meaning", "sound", "shape"] });
const detailedItem = rankedCandidates(detailedPreferences).find((item) => item.given === "静姝");
assert.ok(detailedItem, "缺少详细解析样例“静姝”");
const detailedTexts = [
  engine.nameOverviewText(detailedItem),
  engine.sourceAnalysisText(detailedItem, detailedPreferences),
  engine.overallMeaningText(detailedItem, detailedPreferences),
  engine.phonologyAnalysisText(detailedItem),
  detailedItem.writing,
  engine.genderTendencyText(detailedItem),
  engine.supportText(detailedItem, detailedPreferences),
  engine.reminderText(detailedItem, detailedPreferences),
  engine.conclusionText(detailedItem, detailedPreferences)
];
assert.ok(detailedTexts[0].includes("林静姝") && detailedTexts[0].includes("核心寓意"), "名字综评不完整");
assert.ok(detailedTexts[1].includes("《诗经·邶风·静女》") && detailedTexts[1].includes("相邻意象"), "出处取意不完整");
const characterDetails = engine.characterMeaningDetails(detailedItem);
assert.equal(characterDetails.length, 2, "逐字释义数量错误");
assert.ok(characterDetails.every((detail) => detail.pinyin && detail.toneName && detail.text), "逐字释义缺少拼音、声调或含义");
assert.ok(detailedTexts[3].includes("阳平") && detailedTexts[3].includes("去声"), "音律说明缺少声调名称");
assert.ok(detailedTexts[4].includes("共23画") && detailedTexts[4].includes("相差5画"), "字形说明缺少笔画平衡");
assert.ok(detailedTexts[5].includes("不是硬性限制") && !detailedTexts[5].includes("%"), "性别倾向使用了无依据比例");
assert.ok(detailedTexts[6].includes("典籍取意侧重") && detailedTexts[6].includes("传统文化参考"), "取名依据缺少实际支撑或民俗边界");
assert.ok(detailedTexts[7].includes("当地户籍查询"), "使用提醒缺少重名参考边界");
assert.ok(detailedTexts[8].startsWith("综合来看"), "综合结论缺失");
assert.ok(detailedTexts.every((text) => !/[，；]。|。。/u.test(text)), "详细解释存在错误标点");
engine.setLastResultsForTest([detailedItem]);
engine.renderResults(detailedPreferences);
const renderedDetails = elements.get("#resultsSection").innerHTML;
for (const heading of ["名字综评", "出处与取意", "字义与寓意", "音形评价", "性别气质", "取名依据", "使用提醒", "综合结论"]) {
  assert.ok(renderedDetails.includes(heading), `结果卡片缺少“${heading}”`);
}
assert.ok(!/undefined|null/u.test(renderedDetails), "结果卡片出现空解释");
const pollDetails = engine.buildPollText([{ ...detailedItem, namingPreferences: detailedPreferences }]);
for (const heading of ["综评：", "出处与取意：", "字义：", "整体寓意：", "音律：", "字形：", "性别气质：", "取名依据：", "使用提醒：", "综合结论："]) {
  assert.ok(pollDetails.includes(heading), `投票文案缺少“${heading}”`);
}
assert.ok(!/undefined|null/u.test(pollDetails), "投票文案出现空解释");
if (process.env.PRINT_DETAILS === "1") console.log(JSON.stringify({ detailedTexts, characterDetails }, null, 2));

const selfDefensiveCopy = /按完整意脉|临时拼|孤立单字|本次筛选|本项目|通过连读筛选|组合规则的估计|不是人口统计比例/u;
const explanationCases = [
  ...rankedCandidates(detailedPreferences),
  ...rankedCandidates(preferences({ surname: "莫", gender: "male", basis: ["wuxing", "meaning", "sound", "shape"] }))
];
for (const item of explanationCases) {
  const itemPreferences = item.fullName.startsWith("莫")
    ? preferences({ surname: "莫", gender: "male", basis: ["wuxing", "meaning", "sound", "shape"] })
    : detailedPreferences;
  const texts = [
    engine.nameOverviewText(item),
    engine.sourceAnalysisText(item, itemPreferences),
    engine.overallMeaningText(item, itemPreferences),
    engine.phonologyAnalysisText(item),
    item.writing,
    engine.genderTendencyText(item),
    engine.supportText(item, itemPreferences),
    engine.reminderText(item, itemPreferences),
    engine.conclusionText(item, itemPreferences)
  ];
  assert.ok(texts.every((text) => text && !/undefined|null/u.test(text)), `${item.fullName}: 详细解释缺失`);
  assert.ok(texts.every((text) => !/[，；]。|。。/u.test(text)), `${item.fullName}: 详细解释标点错误`);
  assert.ok(texts.every((text) => !selfDefensiveCopy.test(text)), `${item.fullName}: 仍包含自证式文案`);
  assert.equal(engine.characterMeaningDetails(item).length, item.given.length, `${item.fullName}: 逐字释义数量错误`);
  assert.ok(engine.characterMeaningDetails(item).every((detail) => detail.pinyin && detail.toneName), `${item.fullName}: 逐字读音缺失`);
  assert.ok(texts[3].includes("声调为") && texts[3].includes("收音"), `${item.fullName}: 音律分析不完整`);
  assert.ok(texts[7].includes("重名情况") && texts[7].includes("当地户籍查询"), `${item.fullName}: 重名说明不完整`);
}

const naturalCopyPreferences = preferences({ surname: "林", gender: "neutral", basis: ["wuxing", "meaning", "sound"] });
const naturalCopyItem = rankedCandidates(naturalCopyPreferences).find((item) => item.given === "清朗");
assert.ok(naturalCopyItem, "缺少自然文案样例“清朗”");
const naturalSourceCopy = engine.sourceAnalysisText(naturalCopyItem, naturalCopyPreferences);
assert.ok(naturalSourceCopy.includes("“清”侧重") && naturalSourceCopy.includes("“朗”侧重"), "清朗取意未解释两字关系");
assert.ok(naturalSourceCopy.includes("清明澄澈") && naturalSourceCopy.includes("明亮舒展"), "清朗取意仍然空泛");
assert.ok(!selfDefensiveCopy.test(naturalSourceCopy), "清朗仍包含自证式文案");
assert.ok(detailedTexts.every((text) => !selfDefensiveCopy.test(text)), "详细解析仍包含自证式文案");
assert.ok(!selfDefensiveCopy.test(renderedDetails), "结果卡片仍包含自证式文案");
assert.ok(!selfDefensiveCopy.test(pollDetails), "投票文案仍包含自证式文案");
if (process.env.PRINT_DETAILS === "1") console.log(JSON.stringify({ naturalSourceCopy }, null, 2));

const generationCopyPreferences = preferences({
  surname: "周",
  gender: "male",
  basis: ["wuxing", "meaning", "sound"],
  generationChar: "承",
  generationPosition: "first"
});
for (const [copyPreferences, items] of [
  [naturalCopyPreferences, rankedCandidates(naturalCopyPreferences)],
  [generationCopyPreferences, rankedCandidates(generationCopyPreferences)]
]) {
  for (const item of items) {
    const copyTexts = [
      engine.nameOverviewText(item),
      engine.sourceAnalysisText(item, copyPreferences),
      engine.overallMeaningText(item, copyPreferences),
      engine.genderTendencyText(item),
      engine.supportText(item, copyPreferences),
      engine.reminderText(item, copyPreferences),
      engine.conclusionText(item, copyPreferences)
    ];
    assert.ok(copyTexts.every((text) => !selfDefensiveCopy.test(text)), `${item.fullName}: 全局文案仍暴露内部逻辑`);
  }
}

const singlePreferences = preferences({ surname: "林", gender: "neutral", length: "1", basis: ["wuxing", "meaning", "sound"] });
const singleItem = rankedCandidates(singlePreferences).find((item) => item.given === "安");
assert.ok(singleItem, "缺少单字名解析样例“安”");
assert.equal(engine.characterMeaningDetails(singleItem).length, 1, "单字名逐字释义错误");
assert.ok(engine.reminderText(singleItem, singlePreferences).includes("单字名"), "单字名未提示重名风险");

for (const surname of ["李", "张", "周", "莫", "林", "欧阳", "司马"]) {
  for (const gender of ["female", "male"]) {
    const matrixInput = preferences({ surname, gender });
    const matrixResults = rankedCandidates(matrixInput);
    assert.ok(matrixResults.length >= 6, `${surname}-${gender}: 候选不足`);
    assert.ok(matrixResults.every((item) => engine.isGenderCompatible(item.gender, gender)), `${surname}-${gender}: 性别混入`);
    assert.ok(matrixResults.every((item) => item.phonology.acceptable), `${surname}-${gender}: 音律未通过`);
  }
}

for (const generationCase of [
  { surname: "周", gender: "male", generationChar: "承", generationPosition: "first" },
  { surname: "林", gender: "female", generationChar: "宁", generationPosition: "second" }
]) {
  const generationInput = preferences({ ...generationCase, basis: ["wuxing", "sound"] });
  const generationResults = rankedCandidates(generationInput);
  const position = generationCase.generationPosition === "first" ? 0 : 1;
  assert.ok(generationResults.length >= 6, `${generationCase.generationChar}字辈候选不足`);
  assert.ok(generationResults.every((item) => [...item.given][position] === generationCase.generationChar), `${generationCase.generationChar}字辈位置错误`);
  assert.ok(generationResults.every((item) => item.phraseSeed && item.phonology.acceptable), `${generationCase.generationChar}字辈通顺度未通过`);
}

const charMap = engine.characterMetaMap();
const repeatedSyllable = engine.analyzePhonology([charMap.get("林"), charMap.get("宁")], "林");
assert.equal(repeatedSyllable.hardReject, true, "姓与名首同音未被淘汰");
const repeatedTone = engine.analyzePhonology([charMap.get("清"), charMap.get("书")], "张");
assert.equal(repeatedTone.hardReject, true, "连续同调未被淘汰");

console.log(JSON.stringify(samples, null, 2));
