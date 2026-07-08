const candidates = [
  {
    given: "知遥",
    gender: "neutral",
    element: "火",
    sourceType: "classic",
    source: "取意于“知远行者，心有山河”一类远志意象。",
    tags: ["书卷气", "清朗", "远志"],
    meaning: "知书明理，眼界开阔，心中有方向。",
    tone: "姓氏后接平扬音，读起来舒展，不急促。",
    writing: "左右与半包围结构相间，辨识度高，书写难度适中。",
    risk: "“遥”较有诗意，建议确认家人是否接受偏文气的表达。"
  },
  {
    given: "予安",
    gender: "neutral",
    element: "土",
    sourceType: "meaning",
    source: "“予”有给予、宽和之意，“安”主平安、安定。",
    tags: ["温润", "平安", "现代"],
    meaning: "愿孩子被温柔相待，也能给身边人安定感。",
    tone: "轻声感较强，适合柔和姓氏，整体亲近好读。",
    writing: "笔画简洁，低年级书写压力小，证件场景清楚。",
    risk: "单看“安”较常见，可用完整姓名的音律来提高辨识度。"
  },
  {
    given: "怀瑾",
    gender: "neutral",
    element: "金",
    sourceType: "classic",
    source: "出自“怀瑾握瑜”的君子品格意象。",
    tags: ["书卷气", "仁爱", "大气"],
    meaning: "心怀美玉，重品格、守本心，气质端正。",
    tone: "低起后收，名字有厚度，适合稳重清雅的姓氏。",
    writing: "“瑾”笔画稍多，但常见度足够，正式感较强。",
    risk: "如果姓氏笔画也很重，可考虑更轻的第二字。"
  },
  {
    given: "清扬",
    gender: "female",
    element: "水",
    sourceType: "classic",
    source: "可联想到《诗经》中清亮明净的容止描写。",
    tags: ["清朗", "清雅", "书卷气"],
    meaning: "清澈而明亮，温柔但不弱，有清正向上的气息。",
    tone: "前清后扬，开口自然，读音辨识度好。",
    writing: "两个字结构均衡，“清”常见，“扬”开阔。",
    risk: "与部分复姓或尾音上扬的姓搭配时，要再听一遍连读。"
  },
  {
    given: "云帆",
    gender: "male",
    element: "水",
    sourceType: "poetry",
    source: "取意于李白诗中乘风远行、直济沧海的气象。",
    tags: ["大气", "自由", "远志"],
    meaning: "胸怀远方，敢于出发，有向上突破的力量。",
    tone: "开合有变化，末字收得稳，适合多数单姓。",
    writing: "笔画轻重搭配好，视觉开阔，容易记住。",
    risk: "意象较鲜明，适合希望名字更有气势的家庭。"
  },
  {
    given: "星澜",
    gender: "neutral",
    element: "水",
    sourceType: "season",
    source: "取星光与水波意象，适合夜间、秋冬或临水出生的孩子。",
    tags: ["现代", "清朗", "自由"],
    meaning: "心中有光，处事有波澜不惊的从容。",
    tone: "清亮后落，现代感强，适合简短有力的姓氏。",
    writing: "“澜”笔画略多，但含义清楚，整体不生僻。",
    risk: "偏现代诗性，若家族偏传统，可与典籍名一起对比。"
  },
  {
    given: "明棠",
    gender: "female",
    element: "木",
    sourceType: "poetry",
    source: "以海棠、明光为意象，取花木明丽而不艳俗。",
    tags: ["温润", "清雅", "少见不生僻"],
    meaning: "明净、舒展，有自然生长的美感。",
    tone: "前字明亮，后字含蓄，读起来稳而有余味。",
    writing: "“棠”有木意，结构端正，辨识度比常见花名更高。",
    risk: "需避开与姓氏组成植物类谐音的情况。"
  },
  {
    given: "砚书",
    gender: "neutral",
    element: "土",
    sourceType: "classic",
    source: "从书斋、砚台、读书修身的传统意象中取字。",
    tags: ["书卷气", "清雅", "少见不生僻"],
    meaning: "沉静好学，知礼有恒，带一点文人气。",
    tone: "先沉后舒，读音不浮，适合清淡姓氏。",
    writing: "“砚”不生僻但有辨识度，“书”简洁中和。",
    risk: "书卷气较明显，不适合特别追求活泼感的方向。"
  },
  {
    given: "景行",
    gender: "male",
    element: "木",
    sourceType: "classic",
    source: "取“高山仰止，景行行止”的向善向贤之意。",
    tags: ["大气", "仁爱", "书卷气"],
    meaning: "向高处看，往正道走，有格局也有约束感。",
    tone: "双阳声有推进感，适合读音柔和的姓氏。",
    writing: "“景”略重，“行”简洁，视觉平衡。",
    risk: "“行”有多音语境，正式介绍时可主动说明读音。"
  },
  {
    given: "若宁",
    gender: "female",
    element: "火",
    sourceType: "meaning",
    source: "“若”有如、似、从容之感，“宁”主安宁坚定。",
    tags: ["温润", "平安", "清雅"],
    meaning: "温和自持，心绪安宁，柔中有定力。",
    tone: "轻柔顺口，尾音收束干净，亲和力强。",
    writing: "两个字常见好写，适合日常使用。",
    risk: "整体较柔，若想更有力量，可换成“若衡”“若珩”。"
  },
  {
    given: "承岳",
    gender: "male",
    element: "土",
    sourceType: "meaning",
    source: "承有承继担当，岳有山岳稳重之象。",
    tags: ["大气", "远志", "仁爱"],
    meaning: "能承担，有根基，愿意向高处生长。",
    tone: "起承转稳，读起来厚实，适合男孩方向。",
    writing: "“承”流畅，“岳”简练，整体端正。",
    risk: "气质偏稳重，若姓氏很硬朗，可搭配更清亮的字。"
  },
  {
    given: "栖月",
    gender: "female",
    element: "木",
    sourceType: "poetry",
    source: "取月色有归处的画面，清雅、安静、有记忆点。",
    tags: ["清雅", "少见不生僻", "温润"],
    meaning: "有安放之处，也保有自己的清明与光。",
    tone: "由轻入亮，画面感强，适合柔和姓氏。",
    writing: "“栖”有木意，虽不高频但不生僻。",
    risk: "诗性较强，建议与更日常的候选名一起给家人投票。"
  },
  {
    given: "安",
    gender: "neutral",
    element: "土",
    sourceType: "meaning",
    source: "安主平安、安定，是最直接的祝愿型单字。",
    tags: ["平安", "温润", "现代"],
    meaning: "希望孩子一生安稳，也有让人安心的力量。",
    tone: "单字简洁，姓氏尾音清楚时尤其好读。",
    writing: "笔画少，幼年书写友好，证件识别稳定。",
    risk: "单字名重名概率较高，建议结合姓氏整体判断。"
  },
  {
    given: "澈",
    gender: "neutral",
    element: "水",
    sourceType: "meaning",
    source: "澈为清澈、通透，常用于清朗干净的名字气质。",
    tags: ["清朗", "清雅", "现代"],
    meaning: "心性清明，待人坦荡，有通透之感。",
    tone: "短促有力，适合尾音拖长的姓氏。",
    writing: "笔画较多但常见，视觉干净。",
    risk: "单字气质强，需注意与姓氏连读是否过硬。"
  },
  {
    given: "昀",
    gender: "neutral",
    element: "火",
    sourceType: "season",
    source: "昀有日光之意，适合清晨、春夏或希望明朗气质的方向。",
    tags: ["清朗", "现代", "少见不生僻"],
    meaning: "日光温和，明亮但不刺眼。",
    tone: "音节圆润，单字名简洁有辨识度。",
    writing: "日字旁清楚，结构简单，字形轻盈。",
    risk: "需要确认长辈是否熟悉这个字。"
  },
  {
    given: "珩",
    gender: "male",
    element: "金",
    sourceType: "classic",
    source: "珩为佩玉之名，带礼乐与君子器物的传统意象。",
    tags: ["书卷气", "大气", "少见不生僻"],
    meaning: "有玉的温润，也有礼的约束，气质端方。",
    tone: "读音沉稳，适合简洁姓氏。",
    writing: "王字旁辨识度高，笔画适中。",
    risk: "部分人可能不熟读音，适合能接受小众字的家庭。"
  },
  {
    given: "芮",
    gender: "female",
    element: "木",
    sourceType: "season",
    source: "芮有草木初生的意象，适合春天或希望轻盈生命力的方向。",
    tags: ["温润", "现代", "少见不生僻"],
    meaning: "小而有生机，柔软但向上。",
    tone: "短音清脆，适合尾音柔和的姓氏。",
    writing: "草字头直观，笔画轻巧。",
    risk: "单字名较轻，若姓氏也轻，可考虑双字名增强厚度。"
  },
  {
    given: "衡",
    gender: "male",
    element: "土",
    sourceType: "meaning",
    source: "衡有衡量、平正、持中之意。",
    tags: ["大气", "仁爱", "书卷气"],
    meaning: "做事有分寸，能持平守正。",
    tone: "沉稳不飘，单字有力量。",
    writing: "笔画较多，正式感强。",
    risk: "幼年书写略费力，适合更看重格局感的家庭。"
  }
];

const basisLabels = {
  wuxing: "五行",
  classic: "典籍",
  meaning: "寓意",
  sound: "音律",
  shape: "字形",
  season: "时令"
};

const form = document.querySelector("#namingForm");
const resultsSection = document.querySelector("#resultsSection");
const comparePanel = document.querySelector("#comparePanel");
const compareList = document.querySelector("#compareList");
const favoriteCount = document.querySelector("#favoriteCount");
const pollText = document.querySelector("#pollText");
const wuxingPanel = document.querySelector("#wuxingPanel");
const favorites = new Map();
let lastResults = [];

function selectSingle(groupSelector, button) {
  document.querySelectorAll(groupSelector).forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    selectSingle(`[data-group="${button.parentElement.dataset.group}"] button`, button);
  });
});

document.querySelectorAll("[data-chip-group] .chip").forEach((button) => {
  button.addEventListener("click", () => {
    selectSingle(`[data-chip-group="${button.parentElement.dataset.chipGroup}"] .chip`, button);
  });
});

document.querySelectorAll("#styleChips .chip").forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("active"));
});

document.querySelectorAll(".basis").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const hasWuxing = getSelectedBasis().includes("wuxing");
    wuxingPanel.hidden = !hasWuxing;
  });
});

document.querySelector("#openFavorites").addEventListener("click", () => {
  renderFavorites();
  comparePanel.classList.add("open");
});

document.querySelector("#closeFavorites").addEventListener("click", () => {
  comparePanel.classList.remove("open");
});

document.querySelector("#makePoll").addEventListener("click", () => {
  const names = [...favorites.values()];
  if (!names.length) {
    toast("先收藏几个候选名");
    return;
  }
  const lines = names.map((item, index) => `${index + 1}. ${item.fullName}：${item.meaning}`);
  pollText.value = `帮宝宝选个名字，你更喜欢哪一个？\n${lines.join("\n")}\n\n我比较看重：出处清楚、读音顺口、寓意耐看。`;
  pollText.select();
  toast("投票文案已生成");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateNames();
});

function getActiveValue(selector) {
  return document.querySelector(`${selector} .active`)?.dataset.value;
}

function getSelectedBasis() {
  return [...document.querySelectorAll(".basis.active")].map((item) => item.dataset.basis);
}

function getSelectedStyles() {
  return [...document.querySelectorAll("#styleChips .chip.active")].map((item) => item.dataset.value);
}

function splitChars(value) {
  return [...new Set((value || "").replace(/\s+/g, "").split("").filter(Boolean))];
}

function birthdaySeason(value) {
  if (!value) return "";
  const month = Number(value.slice(5, 7));
  if ([3, 4, 5].includes(month)) return "春";
  if ([6, 7, 8].includes(month)) return "夏";
  if ([9, 10, 11].includes(month)) return "秋";
  return "冬";
}

function scoreCandidate(item, preferences) {
  let score = 70;
  const reasons = [];

  if (preferences.gender !== "neutral" && item.gender === preferences.gender) score += 5;
  if (preferences.gender !== "neutral" && item.gender !== "neutral" && item.gender !== preferences.gender) score -= 22;

  if (preferences.length !== "all" && item.given.length === Number(preferences.length)) score += 8;
  if (preferences.length !== "all" && item.given.length !== Number(preferences.length)) score -= 40;

  if (preferences.basis.includes("wuxing")) {
    if (preferences.element === "auto") {
      score += 4;
      reasons.push("五行采用平衡参考");
    } else if (item.element === preferences.element) {
      score += 13;
      reasons.push(`契合补${preferences.element}`);
    } else {
      score -= 5;
    }
  }

  if (preferences.basis.includes("classic") && ["classic", "poetry"].includes(item.sourceType)) score += 11;
  if (preferences.basis.includes("meaning") && item.tags.includes(preferences.wish)) score += 10;
  if (preferences.basis.includes("sound")) score += item.tone.length > 10 ? 6 : 3;
  if (preferences.basis.includes("shape")) score += item.writing.includes("简") || item.writing.includes("适中") ? 5 : 2;
  if (preferences.basis.includes("season") && ["season", "poetry"].includes(item.sourceType)) score += 7;

  preferences.styles.forEach((style) => {
    if (item.tags.includes(style)) score += 5;
  });

  preferences.likes.forEach((char) => {
    if (item.given.includes(char)) score += 18;
  });

  preferences.avoids.forEach((char) => {
    if (item.given.includes(char)) score -= 100;
  });

  return {
    score: Math.max(0, Math.min(98, score)),
    reasons
  };
}

function generateNames() {
  const surname = document.querySelector("#surname").value.trim() || "林";
  const preferences = {
    surname,
    gender: getActiveValue('[data-group="gender"]') || "neutral",
    length: getActiveValue('[data-group="length"]') || "2",
    basis: getSelectedBasis(),
    element: getActiveValue('[data-chip-group="element"]') || "auto",
    styles: getSelectedStyles(),
    wish: document.querySelector("#wish").value,
    birthday: document.querySelector("#birthday").value,
    region: document.querySelector("#region").value,
    likes: splitChars(document.querySelector("#likeChars").value),
    avoids: splitChars(document.querySelector("#avoidChars").value)
  };

  if (!preferences.basis.length) {
    toast("至少选择一个取名依据");
    return;
  }

  const season = birthdaySeason(preferences.birthday);
  lastResults = candidates
    .map((item) => {
      const scored = scoreCandidate(item, preferences);
      return {
        ...item,
        score: scored.score,
        supportReasons: scored.reasons,
        fullName: `${surname}${item.given}`,
        season
      };
    })
    .filter((item) => item.score > 35)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  renderResults(preferences);
  document.querySelector("#resultsSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function supportText(item, preferences) {
  const selected = preferences.basis.map((basis) => basisLabels[basis]).join("、");
  const elementPart = preferences.basis.includes("wuxing")
    ? `五行按${preferences.element === "auto" ? "平衡" : `补${preferences.element}`}处理，此名主${item.element}意象。`
    : "";
  const seasonPart = preferences.basis.includes("season") && item.season
    ? `出生时令取${item.season}季气息作参考。`
    : "";
  return `本次依据包含${selected}。${elementPart}${seasonPart}${item.source}`;
}

function renderResults(preferences) {
  if (!lastResults.length) {
    resultsSection.innerHTML = `
      <div class="results-empty">
        <strong>没有找到足够匹配的名字</strong>
        <span>可以减少忌用字，或把名字字数改成“都可以”。</span>
      </div>
    `;
    return;
  }

  const cards = lastResults
    .map((item) => {
      const saved = favorites.has(item.fullName);
      const tags = [
        `五行 ${item.element}`,
        ...item.tags.slice(0, 3),
        item.given.length === 1 ? "单字名" : "双字名"
      ];
      return `
        <article class="name-card">
          <div class="name-top">
            <div class="name-title">
              <strong>${item.fullName}</strong>
              <span>${item.sourceType === "poetry" ? "诗词意象" : item.sourceType === "classic" ? "典籍取意" : "寓意取向"} · ${preferences.region}</span>
            </div>
            <div class="score">${item.score}</div>
          </div>
          <div class="tag-row">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="reason-grid">
            <div class="reason">
              <b>支撑依据</b>
              <p>${supportText(item, preferences)}</p>
            </div>
            <div class="reason">
              <b>寓意</b>
              <p>${item.meaning}</p>
            </div>
            <div class="reason">
              <b>音律与字形</b>
              <p>${item.tone}${item.writing}</p>
            </div>
            <div class="reason">
              <b>提醒</b>
              <p>${item.risk}${item.given.length === 1 ? " 单字名建议重点看重名风险。" : ""}</p>
            </div>
          </div>
          <div class="card-actions">
            <button type="button" class="outline" data-action="explain" data-name="${item.fullName}">看对比</button>
            <button type="button" class="save-name ${saved ? "saved" : ""}" data-action="save" data-name="${item.fullName}">
              ${saved ? "已收藏" : "收藏候选"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  resultsSection.innerHTML = `
    <div class="results-header">
      <div>
        <h2>精选候选名</h2>
        <p>分数用于排序，最终仍建议家人一起听读对比。</p>
      </div>
      <span class="count">${lastResults.length} 个</span>
    </div>
    ${cards}
  `;

  resultsSection.querySelectorAll("[data-action='save']").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.name, preferences));
  });

  resultsSection.querySelectorAll("[data-action='explain']").forEach((button) => {
    button.addEventListener("click", () => {
      toggleFavorite(button.dataset.name, preferences, true);
      comparePanel.classList.add("open");
    });
  });
}

function toggleFavorite(fullName, preferences, openOnly = false) {
  const item = lastResults.find((result) => result.fullName === fullName) || favorites.get(fullName);
  if (!item) return;

  if (!openOnly) {
    if (favorites.has(fullName)) {
      favorites.delete(fullName);
      toast("已移出候选");
    } else {
      favorites.set(fullName, item);
      toast("已加入候选");
    }
  } else if (!favorites.has(fullName)) {
    favorites.set(fullName, item);
  }

  updateFavoriteCount();
  renderFavorites();
  if (preferences) renderResults(preferences);
}

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.size;
}

function renderFavorites() {
  const items = [...favorites.values()];
  if (!items.length) {
    compareList.innerHTML = `
      <div class="results-empty">
        <strong>还没有候选名</strong>
        <span>在结果卡片里收藏 2-3 个，再发给家人投票。</span>
      </div>
    `;
    return;
  }

  compareList.innerHTML = items
    .map(
      (item) => `
      <div class="compare-item">
        <div>
          <strong>${item.fullName}</strong>
          <span>${item.tags.slice(0, 2).join(" · ")} · ${item.element}</span>
        </div>
        <button type="button" data-remove="${item.fullName}">移除</button>
      </div>
    `
    )
    .join("");

  compareList.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      favorites.delete(button.dataset.remove);
      updateFavoriteCount();
      renderFavorites();
      toast("已移出候选");
    });
  });
}

function toast(message) {
  let node = document.querySelector(".toast");
  if (!node) {
    node = document.createElement("div");
    node.className = "toast";
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(node.timer);
  node.timer = setTimeout(() => node.classList.remove("show"), 1600);
}

renderFavorites();
