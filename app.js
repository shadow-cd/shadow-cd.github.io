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
  season: "时令",
  bazi: "八字",
  yijing: "周易"
};

const fiveElements = ["木", "火", "土", "金", "水"];
const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const stemElements = {
  甲: "木",
  乙: "木",
  丙: "火",
  丁: "火",
  戊: "土",
  己: "土",
  庚: "金",
  辛: "金",
  壬: "水",
  癸: "水"
};
const branchElements = {
  子: "水",
  丑: "土",
  寅: "木",
  卯: "木",
  辰: "土",
  巳: "火",
  午: "火",
  未: "土",
  申: "金",
  酉: "金",
  戌: "土",
  亥: "水"
};

const yijingImagesByElement = {
  木: [
    { trigram: "震", image: "雷", virtue: "生发奋起", tags: ["远志", "清朗", "大气"] },
    { trigram: "巽", image: "风", virtue: "谦和入理", tags: ["书卷气", "温润", "仁爱"] }
  ],
  火: [
    { trigram: "离", image: "火", virtue: "文明照见", tags: ["聪慧", "清朗", "书卷气"] }
  ],
  土: [
    { trigram: "坤", image: "地", virtue: "厚德承载", tags: ["仁爱", "平安", "温润"] },
    { trigram: "艮", image: "山", virtue: "笃定止正", tags: ["大气", "平安", "远志"] }
  ],
  金: [
    { trigram: "乾", image: "天", virtue: "刚健有为", tags: ["大气", "远志", "清朗"] },
    { trigram: "兑", image: "泽", virtue: "和悦有度", tags: ["仁爱", "清雅", "温润"] }
  ],
  水: [
    { trigram: "坎", image: "水", virtue: "通达守正", tags: ["清雅", "自由", "聪慧"] }
  ]
};

const lunarMonthNames = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "腊月"];
const lunarHourOptions = [
  { branch: "子", label: "子时", range: "23:00-00:59", hour: 0 },
  { branch: "丑", label: "丑时", range: "01:00-02:59", hour: 2 },
  { branch: "寅", label: "寅时", range: "03:00-04:59", hour: 4 },
  { branch: "卯", label: "卯时", range: "05:00-06:59", hour: 6 },
  { branch: "辰", label: "辰时", range: "07:00-08:59", hour: 8 },
  { branch: "巳", label: "巳时", range: "09:00-10:59", hour: 10 },
  { branch: "午", label: "午时", range: "11:00-12:59", hour: 12 },
  { branch: "未", label: "未时", range: "13:00-14:59", hour: 14 },
  { branch: "申", label: "申时", range: "15:00-16:59", hour: 16 },
  { branch: "酉", label: "酉时", range: "17:00-18:59", hour: 18 },
  { branch: "戌", label: "戌时", range: "19:00-20:59", hour: 20 },
  { branch: "亥", label: "亥时", range: "21:00-22:59", hour: 22 }
];

const lunarDateFormatter = new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

const nameCharacters = [
  { char: "知", element: "火", sourceType: "classic", source: "取“知者不惑”的明达意象。", tags: ["书卷气", "聪慧", "清朗"], meaning: "知礼明理，心中有判断。", tone: 1, strokes: 8, gender: "neutral", zodiac: ["蛇", "马"], season: ["春", "夏"] },
  { char: "安", element: "土", sourceType: "meaning", source: "安有平安、安定之义。", tags: ["平安", "温润", "现代"], meaning: "平稳安然，给人可靠感。", tone: 1, strokes: 6, gender: "neutral", zodiac: ["牛", "羊", "狗"], season: ["秋", "冬"] },
  { char: "宁", element: "火", sourceType: "classic", source: "宁取安宁、宁静致远之意。", tags: ["平安", "清雅", "温润"], meaning: "内心安定，行事从容。", tone: 2, strokes: 5, gender: "neutral", zodiac: ["兔", "羊"], season: ["秋", "冬"] },
  { char: "遥", element: "火", sourceType: "poetry", source: "遥有远望、远行的诗意。", tags: ["远志", "自由", "清朗"], meaning: "眼界开阔，志向在远方。", tone: 2, strokes: 13, gender: "neutral", zodiac: ["马", "龙"], season: ["春", "夏"] },
  { char: "怀", element: "水", sourceType: "classic", source: "怀取怀德、怀瑾的君子意象。", tags: ["仁爱", "书卷气", "温润"], meaning: "心中有德，待人有厚度。", tone: 2, strokes: 7, gender: "neutral", zodiac: ["兔", "羊"], season: ["秋", "冬"] },
  { char: "瑾", element: "金", sourceType: "classic", source: "瑾为美玉，承“怀瑾握瑜”之义。", tags: ["书卷气", "仁爱", "大气"], meaning: "品格如玉，温润而端正。", tone: 3, strokes: 15, gender: "neutral", zodiac: ["龙", "蛇"], season: ["秋"] },
  { char: "瑜", element: "金", sourceType: "classic", source: "瑜为美玉光彩。", tags: ["清雅", "书卷气", "仁爱"], meaning: "有光彩，也有内在品格。", tone: 2, strokes: 13, gender: "neutral", zodiac: ["龙", "蛇"], season: ["秋"] },
  { char: "清", element: "水", sourceType: "classic", source: "清取清正、清澈之意。", tags: ["清朗", "清雅", "书卷气"], meaning: "清明坦荡，不染浊气。", tone: 1, strokes: 11, gender: "neutral", zodiac: ["猪", "鼠"], season: ["夏", "冬"] },
  { char: "扬", element: "火", sourceType: "poetry", source: "扬有扬帆、昂扬之势。", tags: ["清朗", "远志", "大气"], meaning: "精神舒展，向上生长。", tone: 2, strokes: 6, gender: "neutral", zodiac: ["马", "龙"], season: ["春", "夏"] },
  { char: "云", element: "水", sourceType: "poetry", source: "云为高远自在的诗词意象。", tags: ["自由", "清朗", "大气"], meaning: "胸怀开阔，自在舒卷。", tone: 2, strokes: 4, gender: "neutral", zodiac: ["龙", "兔"], season: ["春", "秋"] },
  { char: "帆", element: "水", sourceType: "poetry", source: "帆取乘风远行之意。", tags: ["远志", "自由", "大气"], meaning: "敢于出发，顺势而行。", tone: 1, strokes: 6, gender: "male", zodiac: ["马", "龙"], season: ["夏"] },
  { char: "星", element: "火", sourceType: "poetry", source: "星为夜空明光。", tags: ["清朗", "现代", "自由"], meaning: "心里有光，方向清楚。", tone: 1, strokes: 9, gender: "neutral", zodiac: ["龙", "蛇"], season: ["秋", "冬"] },
  { char: "澜", element: "水", sourceType: "poetry", source: "澜为水波，有气象也有从容。", tags: ["大气", "清朗", "自由"], meaning: "有胸襟，有波澜不惊的定力。", tone: 2, strokes: 15, gender: "neutral", zodiac: ["猪", "鼠"], season: ["冬"] },
  { char: "明", element: "火", sourceType: "classic", source: "明取明德、明朗之意。", tags: ["聪慧", "清朗", "大气"], meaning: "心性明亮，处事清楚。", tone: 2, strokes: 8, gender: "neutral", zodiac: ["蛇", "马"], season: ["春", "夏"] },
  { char: "棠", element: "木", sourceType: "poetry", source: "棠取海棠、甘棠的花木意象。", tags: ["温润", "清雅", "少见不生僻"], meaning: "明丽而不俗，有自然生机。", tone: 2, strokes: 12, gender: "female", zodiac: ["兔", "虎"], season: ["春"] },
  { char: "砚", element: "土", sourceType: "classic", source: "砚取书斋修身之意。", tags: ["书卷气", "清雅", "少见不生僻"], meaning: "沉静好学，有持久之心。", tone: 4, strokes: 9, gender: "neutral", zodiac: ["牛", "龙"], season: ["秋"] },
  { char: "书", element: "金", sourceType: "classic", source: "书取读书明理、知礼修身。", tags: ["书卷气", "聪慧", "清雅"], meaning: "知书达理，气质清正。", tone: 1, strokes: 4, gender: "neutral", zodiac: ["兔", "羊"], season: ["秋", "冬"] },
  { char: "景", element: "木", sourceType: "classic", source: "景取景行、高明光景之义。", tags: ["大气", "书卷气", "远志"], meaning: "向高处看，有正道感。", tone: 3, strokes: 12, gender: "male", zodiac: ["虎", "龙"], season: ["春"] },
  { char: "行", element: "水", sourceType: "classic", source: "行取笃行、行远自迩之义。", tags: ["远志", "大气", "仁爱"], meaning: "能实践，有行动力。", tone: 2, strokes: 6, gender: "male", zodiac: ["马", "虎"], season: ["春", "夏"] },
  { char: "若", element: "木", sourceType: "classic", source: "若有如、从容、草木之意。", tags: ["温润", "清雅", "现代"], meaning: "柔和自持，气质舒展。", tone: 4, strokes: 8, gender: "female", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "承", element: "金", sourceType: "meaning", source: "承有承继、担当之义。", tags: ["仁爱", "大气", "远志"], meaning: "能承担，也懂传承。", tone: 2, strokes: 8, gender: "male", zodiac: ["龙", "牛"], season: ["秋"] },
  { char: "岳", element: "土", sourceType: "classic", source: "岳为山岳，有稳重高峻之象。", tags: ["大气", "远志", "仁爱"], meaning: "有根基，有向上之势。", tone: 4, strokes: 8, gender: "male", zodiac: ["虎", "龙"], season: ["秋", "冬"] },
  { char: "栖", element: "木", sourceType: "poetry", source: "栖取有所安放、月下栖居之意。", tags: ["清雅", "温润", "少见不生僻"], meaning: "心有归处，也有清明。", tone: 1, strokes: 10, gender: "female", zodiac: ["兔", "鸡"], season: ["秋"] },
  { char: "月", element: "木", sourceType: "poetry", source: "月为清辉、团圆、静美意象。", tags: ["清雅", "温润", "诗意"], meaning: "清明温柔，心中有光。", tone: 4, strokes: 4, gender: "female", zodiac: ["兔", "羊"], season: ["秋"] },
  { char: "澈", element: "水", sourceType: "meaning", source: "澈为清澈通透。", tags: ["清朗", "清雅", "现代"], meaning: "坦荡通透，心性清明。", tone: 4, strokes: 15, gender: "neutral", zodiac: ["猪", "鼠"], season: ["冬"] },
  { char: "昀", element: "火", sourceType: "season", source: "昀为日光，适合晨光、春夏意象。", tags: ["清朗", "现代", "少见不生僻"], meaning: "光色温和，明亮不迫人。", tone: 2, strokes: 8, gender: "neutral", zodiac: ["蛇", "马"], season: ["春", "夏"] },
  { char: "珩", element: "金", sourceType: "classic", source: "珩为佩玉，带礼乐器物之雅。", tags: ["书卷气", "大气", "少见不生僻"], meaning: "如玉端方，有礼有节。", tone: 2, strokes: 10, gender: "male", zodiac: ["龙", "蛇"], season: ["秋"] },
  { char: "芮", element: "木", sourceType: "season", source: "芮有草木初生之意。", tags: ["温润", "现代", "少见不生僻"], meaning: "轻盈有生机，柔软向上。", tone: 4, strokes: 7, gender: "female", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "衡", element: "土", sourceType: "classic", source: "衡取持中、平正、衡量之意。", tags: ["大气", "仁爱", "书卷气"], meaning: "做事有分寸，能守中正。", tone: 2, strokes: 16, gender: "male", zodiac: ["牛", "龙"], season: ["秋"] },
  { char: "沐", element: "水", sourceType: "classic", source: "沐有润泽、受教之意。", tags: ["温润", "清朗", "现代"], meaning: "受润泽而成长，清新自在。", tone: 4, strokes: 7, gender: "neutral", zodiac: ["猪", "鼠"], season: ["春", "夏"] },
  { char: "禾", element: "木", sourceType: "season", source: "禾为谷物生长，近节气农时。", tags: ["平安", "温润", "少见不生僻"], meaning: "有收获，有朴素生命力。", tone: 2, strokes: 5, gender: "neutral", zodiac: ["牛", "羊", "鸡"], season: ["秋"] },
  { char: "初", element: "金", sourceType: "classic", source: "初取初心、初生之义。", tags: ["清朗", "平安", "现代"], meaning: "守住初心，生命清新。", tone: 1, strokes: 7, gender: "neutral", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "晏", element: "火", sourceType: "classic", source: "晏有安然、晴明之意。", tags: ["平安", "温润", "清雅"], meaning: "安然从容，气象晴和。", tone: 4, strokes: 10, gender: "neutral", zodiac: ["蛇", "马"], season: ["秋"] },
  { char: "庭", element: "火", sourceType: "classic", source: "庭有家门、庭训、端正之意。", tags: ["仁爱", "大气", "书卷气"], meaning: "有家风，也有端正气度。", tone: 2, strokes: 9, gender: "male", zodiac: ["牛", "狗"], season: ["秋"] },
  { char: "修", element: "金", sourceType: "classic", source: "修取修身、修远之意。", tags: ["书卷气", "仁爱", "远志"], meaning: "自我砥砺，向内修养。", tone: 1, strokes: 9, gender: "male", zodiac: ["龙", "蛇"], season: ["秋"] },
  { char: "远", element: "土", sourceType: "classic", source: "远取志向深远、行稳致远。", tags: ["远志", "大气", "自由"], meaning: "志向长远，步伐稳定。", tone: 3, strokes: 7, gender: "male", zodiac: ["马", "龙"], season: ["春", "秋"] },
  { char: "言", element: "木", sourceType: "classic", source: "言取言有物、言行相顾。", tags: ["书卷气", "聪慧", "清朗"], meaning: "表达清楚，言行有信。", tone: 2, strokes: 7, gender: "neutral", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "礼", element: "火", sourceType: "classic", source: "礼取知礼、守礼之意。", tags: ["仁爱", "书卷气", "大气"], meaning: "知分寸，懂敬重。", tone: 3, strokes: 5, gender: "neutral", zodiac: ["蛇", "马"], season: ["夏"] },
  { char: "允", element: "土", sourceType: "classic", source: "允有诚信、公允之意。", tags: ["仁爱", "清朗", "现代"], meaning: "可信可靠，心地端正。", tone: 3, strokes: 4, gender: "neutral", zodiac: ["牛", "羊"], season: ["秋"] },
  { char: "穆", element: "木", sourceType: "classic", source: "穆有温和、庄重之意。", tags: ["温润", "大气", "书卷气"], meaning: "温和而庄重，气度不浮。", tone: 4, strokes: 16, gender: "neutral", zodiac: ["羊", "龙"], season: ["秋"] },
  { char: "然", element: "金", sourceType: "classic", source: "然取自然、坦然之意。", tags: ["自由", "清朗", "现代"], meaning: "坦然自处，顺其本心。", tone: 2, strokes: 12, gender: "neutral", zodiac: ["马", "羊"], season: ["夏", "秋"] },
  { char: "一", element: "土", sourceType: "classic", source: "一取专一、始一之意。", tags: ["清朗", "现代", "平安"], meaning: "纯粹坚定，心无旁骛。", tone: 1, strokes: 1, gender: "neutral", zodiac: ["鼠", "牛"], season: ["冬"] },
  { char: "之", element: "火", sourceType: "classic", source: "之为文言虚字，温雅灵动。", tags: ["书卷气", "清雅", "现代"], meaning: "文气自然，连接有度。", tone: 1, strokes: 3, gender: "neutral", zodiac: ["兔", "蛇"], season: ["春"] },
  { char: "沅", element: "水", sourceType: "classic", source: "沅为水名，带楚辞水意。", tags: ["清雅", "书卷气", "少见不生僻"], meaning: "清润有源，气质古雅。", tone: 2, strokes: 7, gender: "female", zodiac: ["猪", "鼠"], season: ["冬"] },
  { char: "汀", element: "水", sourceType: "poetry", source: "汀为水边平地，常见于诗词清景。", tags: ["清雅", "清朗", "少见不生僻"], meaning: "安静清透，有水岸之美。", tone: 1, strokes: 5, gender: "female", zodiac: ["猪", "鼠"], season: ["春", "冬"] },
  { char: "洲", element: "水", sourceType: "poetry", source: "洲有水中陆地、立足之意。", tags: ["大气", "清朗", "远志"], meaning: "有立足之地，也有开阔水势。", tone: 1, strokes: 9, gender: "male", zodiac: ["龙", "猪"], season: ["夏", "冬"] },
  { char: "林", element: "木", sourceType: "poetry", source: "林为草木成群，生意丰茂。", tags: ["清朗", "自由", "温润"], meaning: "有生长力，也有庇护感。", tone: 2, strokes: 8, gender: "neutral", zodiac: ["虎", "兔"], season: ["春"] },
  { char: "森", element: "木", sourceType: "season", source: "森取木气繁盛。", tags: ["大气", "清朗", "自由"], meaning: "生命力丰厚，向上成林。", tone: 1, strokes: 12, gender: "male", zodiac: ["虎", "兔"], season: ["春"] },
  { char: "桐", element: "木", sourceType: "classic", source: "桐有梧桐、高洁栖凤之意。", tags: ["清雅", "大气", "少见不生僻"], meaning: "高洁舒展，有良木之质。", tone: 2, strokes: 10, gender: "neutral", zodiac: ["鸡", "兔"], season: ["春", "秋"] },
  { char: "槿", element: "木", sourceType: "poetry", source: "槿为木槿花，朝开暮合而坚韧。", tags: ["温润", "清雅", "少见不生僻"], meaning: "温柔坚韧，日日更新。", tone: 3, strokes: 15, gender: "female", zodiac: ["兔", "羊"], season: ["夏"] },
  { char: "竹", element: "木", sourceType: "classic", source: "竹取虚心、有节之意。", tags: ["清雅", "书卷气", "仁爱"], meaning: "有节有度，虚心向上。", tone: 2, strokes: 6, gender: "neutral", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "乔", element: "木", sourceType: "classic", source: "乔取高木、迁乔之意。", tags: ["大气", "远志", "清朗"], meaning: "向高处生长，气质挺拔。", tone: 2, strokes: 6, gender: "neutral", zodiac: ["虎", "龙"], season: ["春"] },
  { char: "微", element: "水", sourceType: "poetry", source: "微有细雨微光的含蓄意象。", tags: ["清雅", "温润", "诗意"], meaning: "细腻温和，不张扬却有光。", tone: 1, strokes: 13, gender: "female", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "熙", element: "火", sourceType: "classic", source: "熙有光明、和乐之意。", tags: ["平安", "清朗", "大气"], meaning: "和乐光明，气象舒展。", tone: 1, strokes: 14, gender: "neutral", zodiac: ["蛇", "马"], season: ["夏"] },
  { char: "昭", element: "火", sourceType: "classic", source: "昭取昭明、光明可见。", tags: ["清朗", "大气", "聪慧"], meaning: "明白坦荡，有光照之感。", tone: 1, strokes: 9, gender: "neutral", zodiac: ["蛇", "马"], season: ["夏"] },
  { char: "晗", element: "火", sourceType: "season", source: "晗为天将明，近清晨节气。", tags: ["清朗", "现代", "温润"], meaning: "晨光初起，含蓄明亮。", tone: 2, strokes: 11, gender: "female", zodiac: ["蛇", "马"], season: ["春", "夏"] },
  { char: "曜", element: "火", sourceType: "classic", source: "曜为日月星光。", tags: ["大气", "清朗", "远志"], meaning: "光彩有力，照见方向。", tone: 4, strokes: 18, gender: "male", zodiac: ["龙", "马"], season: ["夏"] },
  { char: "煦", element: "火", sourceType: "poetry", source: "煦为和暖之光。", tags: ["温润", "平安", "清朗"], meaning: "温暖照拂，柔和有力。", tone: 4, strokes: 13, gender: "neutral", zodiac: ["羊", "马"], season: ["春"] },
  { char: "钧", element: "金", sourceType: "classic", source: "钧有均衡、千钧之重。", tags: ["大气", "仁爱", "远志"], meaning: "稳重有分量，处事能持衡。", tone: 1, strokes: 9, gender: "male", zodiac: ["龙", "牛"], season: ["秋"] },
  { char: "铭", element: "金", sourceType: "classic", source: "铭取铭记、铭德之意。", tags: ["书卷气", "仁爱", "现代"], meaning: "记恩知德，心中有准则。", tone: 2, strokes: 11, gender: "neutral", zodiac: ["龙", "牛"], season: ["秋"] },
  { char: "钰", element: "金", sourceType: "meaning", source: "钰为珍宝坚金。", tags: ["清雅", "平安", "现代"], meaning: "珍贵坚定，有内在光泽。", tone: 4, strokes: 10, gender: "female", zodiac: ["龙", "蛇"], season: ["秋"] },
  { char: "铎", element: "金", sourceType: "classic", source: "铎为大铃，有宣教明声之义。", tags: ["大气", "书卷气", "远志"], meaning: "声音清正，有传播之力。", tone: 2, strokes: 10, gender: "male", zodiac: ["鸡", "龙"], season: ["秋"] },
  { char: "宸", element: "土", sourceType: "classic", source: "宸有屋宇、北辰之意。", tags: ["大气", "平安", "现代"], meaning: "有庇护感，也有高远气象。", tone: 2, strokes: 10, gender: "neutral", zodiac: ["龙", "牛"], season: ["冬"] },
  { char: "垚", element: "土", sourceType: "meaning", source: "垚为土高之形，取稳厚。", tags: ["大气", "少见不生僻", "远志"], meaning: "根基厚实，向上成势。", tone: 2, strokes: 9, gender: "male", zodiac: ["牛", "龙"], season: ["秋"] },
  { char: "屿", element: "土", sourceType: "poetry", source: "屿为海中小山，有独立之象。", tags: ["自由", "清朗", "现代"], meaning: "独立清醒，有自己的立足处。", tone: 3, strokes: 6, gender: "neutral", zodiac: ["龙", "虎"], season: ["夏"] },
  { char: "岚", element: "土", sourceType: "poetry", source: "岚为山间雾气。", tags: ["清雅", "温润", "诗意"], meaning: "山气清润，含蓄有灵气。", tone: 2, strokes: 7, gender: "female", zodiac: ["虎", "兔"], season: ["春", "秋"] },
  { char: "予", element: "土", sourceType: "meaning", source: "予有给予、成全之意。", tags: ["温润", "仁爱", "现代"], meaning: "宽和有爱，也懂得成全。", tone: 3, strokes: 4, gender: "neutral", zodiac: ["羊", "兔"], season: ["秋"] },
  { char: "乐", element: "火", sourceType: "classic", source: "乐取礼乐和合、心有喜乐。", tags: ["平安", "清朗", "自由"], meaning: "心境明朗，能享生活之乐。", tone: 4, strokes: 5, gender: "neutral", zodiac: ["马", "羊"], season: ["夏"] },
  { char: "善", element: "金", sourceType: "classic", source: "善取向善、善言善行。", tags: ["仁爱", "书卷气", "温润"], meaning: "心地仁厚，择善而行。", tone: 4, strokes: 12, gender: "neutral", zodiac: ["羊", "兔"], season: ["秋"] },
  { char: "祺", element: "木", sourceType: "meaning", source: "祺为吉祥安泰。", tags: ["平安", "温润", "现代"], meaning: "顺遂吉安，福气绵长。", tone: 2, strokes: 12, gender: "neutral", zodiac: ["羊", "牛"], season: ["春", "秋"] },
  { char: "望", element: "水", sourceType: "classic", source: "望取远望、德望之意。", tags: ["远志", "大气", "书卷气"], meaning: "有期待，也有能被信望的品质。", tone: 4, strokes: 11, gender: "male", zodiac: ["龙", "马"], season: ["秋"] },
  { char: "舒", element: "金", sourceType: "classic", source: "舒有舒展、从容之义。", tags: ["温润", "自由", "清雅"], meaning: "从容舒展，不局促。", tone: 1, strokes: 12, gender: "female", zodiac: ["羊", "兔"], season: ["春"] },
  { char: "念", element: "火", sourceType: "classic", source: "念有惦念、持念、记取之意。", tags: ["仁爱", "温润", "书卷气"], meaning: "心中有牵挂，懂情义。", tone: 4, strokes: 8, gender: "neutral", zodiac: ["羊", "兔"], season: ["秋"] }
];

function expandCharacterGroup(group) {
  return group.entries.map((entry) => {
    const [char, tone, strokes, gender = "neutral"] = entry.split("|");
    return {
      char,
      element: group.element,
      sourceType: group.sourceType,
      source: group.source.replaceAll("{char}", char),
      tags: group.tags,
      meaning: group.meaning.replaceAll("{char}", char),
      tone: Number(tone),
      strokes: Number(strokes),
      gender,
      zodiac: group.zodiac,
      season: group.season
    };
  });
}

const supplementalNameCharacters = [
  {
    element: "木",
    sourceType: "classic",
    source: "“{char}”取草木生发、良木成材之意。",
    tags: ["清朗", "远志", "少见不生僻"],
    meaning: "像{char}木一样向上生长，有根基也有舒展感。",
    zodiac: ["虎", "兔", "羊"],
    season: ["春"],
    entries: ["柏|3|9|male", "杉|1|7", "柳|3|9|female", "桢|1|10", "榆|2|13", "楠|2|13", "樾|4|16", "棣|4|12|male", "楷|3|13|male", "楚|3|13", "榕|2|14", "榛|1|14", "樵|2|16|male", "梧|2|11", "柯|1|9|male", "栩|3|10", "杭|2|8|male", "枫|1|8", "檀|2|17", "榭|4|14"]
  },
  {
    element: "木",
    sourceType: "poetry",
    source: "“{char}”取诗词花草意象，清雅有生机。",
    tags: ["清雅", "温润", "诗意"],
    meaning: "有{char}草木的柔和与生命力，气质清新不俗。",
    zodiac: ["兔", "羊", "鸡"],
    season: ["春", "夏"],
    entries: ["芷|3|7|female", "芊|1|6|female", "芃|2|6", "萱|1|12|female", "菀|3|11|female", "蔓|4|14|female", "蕴|4|15", "蕙|4|15|female", "荷|2|10|female", "菡|4|11|female", "蓁|1|13|female", "葭|1|12|female", "蘅|2|19", "莞|3|10|female", "荀|2|9|male", "茗|2|9", "茉|4|8|female", "苒|3|8|female", "芙|2|7|female", "芊|1|6|female"]
  },
  {
    element: "木",
    sourceType: "classic",
    source: "“{char}”取修身、文脉、竹简书卷之意。",
    tags: ["书卷气", "聪慧", "仁爱"],
    meaning: "{char}字带文气和修养感，适合希望名字有学养支撑的方向。",
    zodiac: ["兔", "羊", "蛇"],
    season: ["春", "秋"],
    entries: ["筠|2|13|female", "笙|1|11", "简|3|13", "策|4|12|male", "箴|1|15", "篇|1|15", "籍|2|20", "蓝|2|13", "菁|1|11|female", "英|1|8", "苑|4|8|female", "苏|1|7", "荣|2|9", "茂|4|8|male", "秉|3|8|male", "程|2|12|male", "稚|4|13", "稷|4|15|male"]
  },
  {
    element: "水",
    sourceType: "classic",
    source: "“{char}”取水德润物、清源长流之意。",
    tags: ["温润", "清朗", "仁爱"],
    meaning: "有水的润泽与包容，做事清明而不急躁。",
    zodiac: ["鼠", "猪", "龙"],
    season: ["冬", "春"],
    entries: ["涵|2|11", "淳|2|11|male", "润|4|10", "泽|2|8|male", "沛|4|7", "泓|2|8", "洵|2|9", "洺|2|9", "浚|4|10|male", "淇|2|11|female", "洛|4|9", "湘|1|12|female", "渝|2|12", "澄|2|15", "澍|4|15|male", "沂|2|7|female", "沫|4|8|female", "溪|1|13|female", "漾|4|14", "沄|2|7|female"]
  },
  {
    element: "水",
    sourceType: "poetry",
    source: "“{char}”取江河湖海、雨露烟波的诗意。",
    tags: ["自由", "清雅", "远志"],
    meaning: "有水岸开阔之象，既清润也有远方感。",
    zodiac: ["鼠", "猪", "龙"],
    season: ["夏", "冬"],
    entries: ["沣|1|7|male", "泠|2|8|female", "沁|4|7|female", "溶|2|13|female", "渊|1|11|male", "源|2|13|male", "泊|2|8", "瀚|4|19|male", "霁|4|14", "霖|2|16|male", "雨|3|8", "霏|1|16|female", "雪|3|11|female", "露|4|21|female", "霄|1|15|male", "航|2|10|male", "舟|1|6|male", "川|1|3|male", "江|1|6|male", "河|2|8|male"]
  },
  {
    element: "水",
    sourceType: "classic",
    source: "“{char}”取明净、通达、心识清澈之义。",
    tags: ["聪慧", "清朗", "现代"],
    meaning: "{char}字偏清醒通透，适合希望名字干净利落的方向。",
    zodiac: ["鼠", "猪", "兔"],
    season: ["冬"],
    entries: ["识|2|7", "悟|4|10", "敏|3|11|female", "慧|4|15|female", "聪|1|15", "睿|4|14|male", "思|1|9", "想|3|13", "念|4|8", "慕|4|14", "惠|4|12|female", "恬|2|9|female", "怡|2|8|female", "悦|4|10|female", "恒|2|9|male", "恪|4|9|male"]
  },
  {
    element: "火",
    sourceType: "season",
    source: "“{char}”取日光、晨明、夏令舒朗之意。",
    tags: ["清朗", "聪慧", "现代"],
    meaning: "{char}字带光明感，愿孩子明亮坦荡，心中有方向。",
    zodiac: ["蛇", "马", "龙"],
    season: ["春", "夏"],
    entries: ["晨|2|11", "曦|1|20|female", "旭|4|6|male", "昕|1|8|female", "晟|4|10|male", "晖|1|10", "暄|1|13|female", "煜|4|13|male", "烨|4|10|male", "炜|3|8|male", "焕|4|11", "煊|1|13|male", "熠|4|15|male", "灿|4|7", "烁|4|9", "朗|3|10|male", "晴|2|12|female", "晓|3|10|female", "昶|3|9|male", "昱|4|9"]
  },
  {
    element: "火",
    sourceType: "classic",
    source: "“{char}”取礼乐、昭明、奋发之意。",
    tags: ["大气", "远志", "书卷气"],
    meaning: "{char}字有光明和行动力，适合更开阔有力量的名字。",
    zodiac: ["蛇", "马", "龙"],
    season: ["夏"],
    entries: ["晋|4|10|male", "卓|2|8|male", "昊|4|8|male", "晁|2|10|male", "曜|4|18|male", "晔|4|10", "暘|2|13|male", "炫|4|9|male", "焱|4|12|male", "燊|1|16|male", "炯|3|9|male", "烜|3|10|male", "照|4|13", "景|3|12", "昌|1|8|male", "映|4|9|female", "旻|2|8", "晞|1|11|female"]
  },
  {
    element: "火",
    sourceType: "meaning",
    source: "“{char}”取温暖、喜乐、光彩之义。",
    tags: ["平安", "温润", "清朗"],
    meaning: "{char}字偏温暖明净，寓意生活和乐、心性向阳。",
    zodiac: ["马", "羊", "蛇"],
    season: ["春", "夏"],
    entries: ["暖|3|13|female", "熹|1|16", "煦|4|13", "和|2|8", "乐|4|5", "烁|4|9", "炘|1|8|female", "晗|2|11|female", "曈|2|16|female", "暻|3|16", "晤|4|11", "昉|3|8", "昶|3|9", "晟|4|10", "熙|1|14", "昭|1|9"]
  },
  {
    element: "金",
    sourceType: "classic",
    source: "“{char}”取玉石礼器、君子佩玉之意。",
    tags: ["清雅", "书卷气", "少见不生僻"],
    meaning: "{char}字有玉质温润和礼乐之雅，适合端正耐看的名字。",
    zodiac: ["龙", "蛇", "鸡"],
    season: ["秋"],
    entries: ["玥|4|8|female", "玮|3|8", "珺|4|11|female", "琛|1|12|male", "琦|2|12", "琨|1|12|male", "璟|3|16", "璇|2|15|female", "璐|4|17|female", "琪|2|12|female", "瑶|2|14|female", "瑄|1|13|female", "璋|1|15|male", "琮|2|12|male", "珏|2|9", "珂|1|9|female", "璞|2|16|male", "琬|3|12|female"]
  },
  {
    element: "金",
    sourceType: "meaning",
    source: "“{char}”取金石坚明、持守有度之意。",
    tags: ["大气", "仁爱", "现代"],
    meaning: "{char}字有坚定、明亮、可信赖的品质。",
    zodiac: ["龙", "牛", "鸡"],
    season: ["秋"],
    entries: ["锦|3|13", "铄|4|10|male", "铮|1|11|male", "锐|4|12|male", "锋|1|12|male", "钦|1|9|male", "铠|3|11|male", "锴|3|14|male", "镕|2|15", "镇|4|15|male", "鉴|4|13|male", "钊|1|7|male", "铉|4|10|male", "钺|4|10|male", "钧|1|9|male", "铭|2|11"]
  },
  {
    element: "金",
    sourceType: "classic",
    source: "“{char}”取真实、文章、诚信与法度之意。",
    tags: ["书卷气", "聪慧", "仁爱"],
    meaning: "{char}字强调内在准则，适合重视品格和学养的名字。",
    zodiac: ["鸡", "龙", "牛"],
    season: ["秋", "冬"],
    entries: ["素|4|10|female", "真|1|10", "诚|2|8|male", "信|4|9", "诗|1|8|female", "词|2|7", "诵|4|9", "叙|4|9", "序|4|7", "则|2|6|male", "钦|1|9", "谨|3|13", "逊|4|9", "辞|2|13", "章|1|11", "翰|4|16|male"]
  },
  {
    element: "土",
    sourceType: "classic",
    source: "“{char}”取山岳、土地、根基稳厚之意。",
    tags: ["大气", "平安", "远志"],
    meaning: "{char}字有稳重根基，也有向高处生长的力量。",
    zodiac: ["牛", "龙", "狗"],
    season: ["秋", "冬"],
    entries: ["坤|1|8|male", "垣|2|9|male", "培|2|11", "城|2|9|male", "均|1|7", "坦|3|8|male", "域|4|11|male", "基|1|11|male", "堂|2|11|male", "峻|4|10|male", "嵘|2|12|male", "峰|1|10|male", "岑|2|7", "岩|2|8|male", "峤|4|9", "峥|1|9|male", "崧|1|11|male", "峦|2|9"]
  },
  {
    element: "土",
    sourceType: "classic",
    source: "“{char}”取屋宇、家风、安居与护佑之意。",
    tags: ["平安", "仁爱", "温润"],
    meaning: "{char}字有庇护和安定感，适合希望名字温厚可靠的方向。",
    zodiac: ["牛", "羊", "狗"],
    season: ["秋", "冬"],
    entries: ["宇|3|6|male", "容|2|10|female", "宥|4|9", "宣|1|9", "宜|2|8|female", "寅|2|11|male", "辰|2|7|male", "央|1|5", "佑|4|7|male", "轩|1|7|male", "维|2|11|male", "惟|2|11", "恩|1|10", "宛|3|8|female", "宓|4|8|female", "寰|2|16|male", "宴|4|10", "宵|1|10"]
  },
  {
    element: "土",
    sourceType: "poetry",
    source: "“{char}”取山岚丘壑、远行立身之象。",
    tags: ["清雅", "自由", "大气"],
    meaning: "{char}字带山川空间感，名字更开阔有画面。",
    zodiac: ["虎", "龙", "羊"],
    season: ["春", "秋"],
    entries: ["山|1|3|male", "岫|4|8|female", "岱|4|8|male", "岭|3|8", "岸|4|8|male", "坡|1|8", "原|2|10", "野|3|11|male", "远|3|7|male", "越|4|12", "逾|2|12", "逸|4|11", "辰|2|7", "屹|4|6|male", "岐|2|7", "岑|2|7"]
  },
  {
    element: "木",
    sourceType: "classic",
    source: "“{char}”取德行修养、学识明达之义。",
    tags: ["书卷气", "仁爱", "聪慧"],
    meaning: "{char}字强调修养与明理，适合有文化支撑的名字。",
    zodiac: ["兔", "羊", "龙"],
    season: ["春", "秋"],
    entries: ["仁|2|4", "义|4|3|male", "德|2|15|male", "谦|1|12", "敬|4|12", "恭|1|10|male", "慎|4|13", "敏|3|11", "学|2|8", "文|2|4", "雅|3|12|female", "彦|4|9|male", "贤|2|8", "启|3|7|male", "开|1|4", "觉|2|9"]
  },
  {
    element: "水",
    sourceType: "poetry",
    source: "“{char}”取行旅、舟车、天地开阔之意。",
    tags: ["自由", "远志", "清朗"],
    meaning: "{char}字带路途和方向感，适合希望孩子眼界开阔的方向。",
    zodiac: ["马", "龙", "虎"],
    season: ["春", "夏"],
    entries: ["舟|1|6|male", "航|2|10|male", "津|1|9", "渡|4|12", "迈|4|6|male", "越|4|12", "途|2|10|male", "逍|1|10", "遥|2|13", "游|2|12", "溯|4|13", "寻|2|6", "观|1|6", "望|4|11", "临|2|9", "归|1|5"]
  }
].flatMap(expandCharacterGroup);

const literarySeedCharacters = [
  { char: "驰", element: "火", sourceType: "poetry", source: "取自王勃《滕王阁序》“俊采星驰”。", tags: ["书卷气", "大气", "远志"], meaning: "才华如星光奔涌，明亮而有速度感。", tone: 2, strokes: 6, gender: "neutral", zodiac: ["马", "龙"], season: ["春", "夏"] },
  { char: "风", element: "木", sourceType: "poetry", source: "取自柳永《雨霖铃》“杨柳岸，晓风残月”。", tags: ["清朗", "自由", "诗意"], meaning: "有清晨风意，轻盈通达。", tone: 1, strokes: 4, gender: "neutral", zodiac: ["虎", "兔"], season: ["春", "秋"] },
  { char: "兰", element: "木", sourceType: "poetry", source: "取自屈原《九歌·湘夫人》“沅有芷兮澧有兰”。", tags: ["清雅", "温润", "书卷气"], meaning: "兰有幽芳，取高洁清雅之意。", tone: 2, strokes: 5, gender: "female", zodiac: ["兔", "羊"], season: ["春"] },
  { char: "齐", element: "金", sourceType: "classic", source: "取自《论语·里仁》“见贤思齐焉”。", tags: ["书卷气", "仁爱", "聪慧"], meaning: "见贤而向善，有自我修正的力量。", tone: 2, strokes: 6, gender: "neutral", zodiac: ["鸡", "牛"], season: ["秋"] }
];

const literaryNameSeeds = [
  {
    given: "星驰",
    source: "取自王勃《滕王阁序》“俊采星驰”。",
    meaning: "星光驰动，寓意才华明亮、气象开阔。",
    tags: ["书卷气", "大气", "远志"],
    element: "火",
    elements: ["火"],
    gender: "neutral"
  },
  {
    given: "怀瑾",
    source: "取自屈原《九章·怀沙》“怀瑾握瑜兮”。",
    meaning: "心怀美玉，重品格、守本心，气质端正。",
    tags: ["书卷气", "仁爱", "大气"],
    element: "金",
    elements: ["水", "金"],
    gender: "neutral"
  },
  {
    given: "景行",
    source: "取自《诗经·小雅·车辖》“高山仰止，景行行止”。",
    meaning: "向高处看，往正道走，有格局也有约束感。",
    tags: ["书卷气", "大气", "仁爱"],
    element: "木",
    elements: ["木", "水"],
    gender: "male"
  },
  {
    given: "云帆",
    source: "取自李白《行路难》“长风破浪会有时，直挂云帆济沧海”。",
    meaning: "胸怀远方，敢于出发，有向上突破的力量。",
    tags: ["大气", "自由", "远志"],
    element: "水",
    elements: ["水"],
    gender: "male"
  },
  {
    given: "清扬",
    source: "取自《诗经·郑风·野有蔓草》“有美一人，清扬婉兮”。",
    meaning: "清澈明亮，温柔但不弱，有清正向上的气息。",
    tags: ["清朗", "清雅", "书卷气"],
    element: "水",
    elements: ["水", "火"],
    gender: "female"
  },
  {
    given: "明德",
    source: "取自《礼记·大学》“大学之道，在明明德”。",
    meaning: "明亮其德，寓意心性清明、品格可靠。",
    tags: ["书卷气", "仁爱", "聪慧"],
    element: "火",
    elements: ["火", "木"],
    gender: "neutral"
  },
  {
    given: "修远",
    source: "取自屈原《离骚》“路漫漫其修远兮”。",
    meaning: "修身而行远，寓意有恒心、有远志。",
    tags: ["书卷气", "远志", "仁爱"],
    element: "金",
    elements: ["金", "土"],
    gender: "male"
  },
  {
    given: "望舒",
    source: "取自屈原《离骚》“前望舒使先驱兮”。",
    meaning: "望舒为神话中为月驾车之神，名字清雅而有光。",
    tags: ["清雅", "书卷气", "自由"],
    element: "水",
    elements: ["水", "金"],
    gender: "female"
  },
  {
    given: "沅芷",
    source: "取自屈原《九歌·湘夫人》“沅有芷兮澧有兰”。",
    meaning: "沅水与香草并取，寓意清润、有源、品性芬芳。",
    tags: ["清雅", "温润", "书卷气"],
    element: "水",
    elements: ["水", "木"],
    gender: "female"
  },
  {
    given: "澄江",
    source: "取自谢朓《晚登三山还望京邑》“澄江静如练”。",
    meaning: "江水澄明，寓意心性清朗、处事澄澈。",
    tags: ["清朗", "大气", "清雅"],
    element: "水",
    elements: ["水"],
    gender: "neutral"
  },
  {
    given: "晴川",
    source: "取自崔颢《黄鹤楼》“晴川历历汉阳树”。",
    meaning: "晴日江川，画面开阔，名字明朗清新。",
    tags: ["清朗", "大气", "自由"],
    element: "火",
    elements: ["火", "水"],
    gender: "neutral"
  },
  {
    given: "溪亭",
    source: "取自李清照《如梦令》“常记溪亭日暮”。",
    meaning: "溪边小亭，清雅有画面，适合温润从容的方向。",
    tags: ["清雅", "温润", "诗意"],
    element: "水",
    elements: ["水", "火"],
    gender: "female"
  },
  {
    given: "晓风",
    source: "取自柳永《雨霖铃》“杨柳岸，晓风残月”。",
    meaning: "晓色与清风并取，名字轻盈、清朗、有余韵。",
    tags: ["清朗", "自由", "诗意"],
    element: "火",
    elements: ["火", "木"],
    gender: "neutral"
  },
  {
    given: "霁月",
    source: "取自黄庭坚《濂溪诗序》“光风霁月”。",
    meaning: "雨后明月，寓意胸襟清明、气质开阔。",
    tags: ["清雅", "清朗", "书卷气"],
    element: "水",
    elements: ["水", "木"],
    gender: "female"
  },
  {
    given: "允文",
    source: "取自《诗经·鲁颂·泮水》“允文允武”。",
    meaning: "文质兼备，寓意可信、明理、有章法。",
    tags: ["书卷气", "仁爱", "聪慧"],
    element: "土",
    elements: ["土", "木"],
    gender: "neutral"
  },
  {
    given: "思齐",
    source: "取自《论语·里仁》“见贤思齐焉”。",
    meaning: "见贤而思齐，寓意向善好学、不断自省。",
    tags: ["书卷气", "聪慧", "仁爱"],
    element: "水",
    elements: ["水", "金"],
    gender: "neutral"
  },
  {
    given: "芷兰",
    source: "取自屈原《九歌·湘夫人》“沅有芷兮澧有兰”。",
    meaning: "芷与兰皆为香草，寓意品性清雅、内在芬芳。",
    tags: ["清雅", "温润", "书卷气"],
    element: "木",
    elements: ["木"],
    gender: "female"
  }
];

const form = document.querySelector("#namingForm");
const resultsSection = document.querySelector("#resultsSection");
const generateBtn = document.querySelector("#generateBtn");
const resetPreferencesBtn = document.querySelector("#resetPreferencesBtn");
const bottomAction = document.querySelector(".bottom-action");
const comparePanel = document.querySelector("#comparePanel");
const compareList = document.querySelector("#compareList");
const favoriteCount = document.querySelector("#favoriteCount");
const pollText = document.querySelector("#pollText");
const wuxingPanel = document.querySelector("#wuxingPanel");
const toggleGeneration = document.querySelector("#toggleGeneration");
const generationPanel = document.querySelector("#generationPanel");
const generationCharInput = document.querySelector("#generationChar");
const birthdaySolarInput = document.querySelector("#birthdaySolar");
const birthdaySolarText = document.querySelector("#birthdaySolarText");
const birthdayLunarInput = document.querySelector("#birthdayLunar");
const birthdayLunarText = document.querySelector("#birthdayLunarText");
const solarPicker = document.querySelector("#solarPicker");
const closeSolarPickerButton = document.querySelector("#closeSolarPicker");
const clearSolarPickerButton = document.querySelector("#clearSolarPicker");
const confirmSolarPickerButton = document.querySelector("#confirmSolarPicker");
const solarPickerPreview = document.querySelector("#solarPickerPreview");
const solarYearList = document.querySelector("#solarYearList");
const solarMonthList = document.querySelector("#solarMonthList");
const solarDayList = document.querySelector("#solarDayList");
const solarHourList = document.querySelector("#solarHourList");
const solarMinuteList = document.querySelector("#solarMinuteList");
const lunarPicker = document.querySelector("#lunarPicker");
const closeLunarPickerButton = document.querySelector("#closeLunarPicker");
const clearLunarPickerButton = document.querySelector("#clearLunarPicker");
const confirmLunarPickerButton = document.querySelector("#confirmLunarPicker");
const lunarPickerPreview = document.querySelector("#lunarPickerPreview");
const lunarYearList = document.querySelector("#lunarYearList");
const lunarMonthList = document.querySelector("#lunarMonthList");
const lunarDayList = document.querySelector("#lunarDayList");
const lunarHourList = document.querySelector("#lunarHourList");
const choicePicker = document.querySelector("#choicePicker");
const closeChoicePickerButton = document.querySelector("#closeChoicePicker");
const choicePickerEyebrow = document.querySelector("#choicePickerEyebrow");
const choicePickerTitle = document.querySelector("#choicePickerTitle");
const choicePickerList = document.querySelector("#choicePickerList");
const favorites = new Map();
let lastResults = [];
let resultRound = 0;
let lastPreferenceKey = "";
let shownResultNames = new Set();
let lockedPreferences = null;
let isGenerating = false;
let activeChoiceSelect = null;
let activeChoiceTrigger = null;
const lunarYearCache = new Map();

const today = new Date();
const baseYear = today.getFullYear();
const pickerYearStart = Math.max(1901, baseYear - 80);
const pickerYearEnd = Math.min(2099, baseYear + 4);
const solarPickerState = {
  year: baseYear,
  month: today.getMonth() + 1,
  day: today.getDate(),
  hour: today.getHours(),
  minute: Math.floor(today.getMinutes() / 5) * 5
};
const lunarPickerState = {
  year: baseYear,
  monthKey: "1-regular",
  day: 1,
  hour: 0
};

const choicePickerLabels = {
  wish: {
    eyebrow: "希望寄托",
    title: "选择希望寄托"
  },
  region: {
    eyebrow: "谐音检查",
    title: "选择方言谐音检查"
  }
};

function selectSingle(groupSelector, button) {
  document.querySelectorAll(groupSelector).forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement.dataset.group;
    selectSingle(`[data-group="${group}"] button`, button);
    if (group === "calendarType") syncCalendarFields();
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

toggleGeneration.addEventListener("click", () => {
  const willOpen = generationPanel.hidden;
  generationPanel.hidden = !willOpen;
  toggleGeneration.setAttribute("aria-expanded", String(willOpen));
  toggleGeneration.textContent = willOpen ? "移除字辈" : "添加字辈";
  if (willOpen) {
    const doubleNameButton = document.querySelector('[data-group="length"] [data-value="2"]');
    if (doubleNameButton) selectSingle('[data-group="length"] button', doubleNameButton);
    generationCharInput.focus();
  }
  if (!willOpen) generationCharInput.value = "";
});

birthdaySolarInput.addEventListener("click", openSolarPicker);

birthdaySolarInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openSolarPicker();
  }
});

birthdayLunarInput.addEventListener("click", openLunarPicker);

birthdayLunarInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLunarPicker();
  }
});

document.querySelectorAll(".choice-trigger").forEach((button) => {
  button.addEventListener("click", () => openChoicePicker(button.dataset.selectTarget, button));
});

solarPicker.addEventListener("click", (event) => {
  if (event.target === solarPicker) closeSolarPicker();

  const option = event.target.closest("[data-picker-part]");
  if (!option) return;

  solarPickerState[option.dataset.pickerPart] = Number(option.dataset.pickerValue);
  normalizeSolarPickerState();
  renderSolarPicker();
});

lunarPicker.addEventListener("click", (event) => {
  if (event.target === lunarPicker) closeLunarPicker();

  const option = event.target.closest("[data-lunar-part]");
  if (!option) return;

  if (option.dataset.lunarPart === "monthKey") {
    lunarPickerState.monthKey = option.dataset.lunarValue;
  } else {
    lunarPickerState[option.dataset.lunarPart] = Number(option.dataset.lunarValue);
  }
  normalizeLunarPickerState();
  renderLunarPicker();
});

choicePicker.addEventListener("click", (event) => {
  if (event.target === choicePicker) closeChoicePicker();

  const option = event.target.closest("[data-choice-value]");
  if (!option || !activeChoiceSelect) return;

  activeChoiceSelect.value = option.dataset.choiceValue;
  activeChoiceSelect.dispatchEvent(new Event("change", { bubbles: true }));
  syncChoiceTrigger(activeChoiceSelect.id);
  closeChoicePicker({ restoreFocus: true });
});

closeSolarPickerButton.addEventListener("click", closeSolarPicker);
closeLunarPickerButton.addEventListener("click", closeLunarPicker);
closeChoicePickerButton.addEventListener("click", () => closeChoicePicker({ restoreFocus: true }));

clearSolarPickerButton.addEventListener("click", () => {
  setSolarBirthdayValue("");
  closeSolarPicker();
});

confirmSolarPickerButton.addEventListener("click", () => {
  setSolarBirthdayValue(formatSolarIso());
  closeSolarPicker();
});

clearLunarPickerButton.addEventListener("click", () => {
  setLunarBirthdayValue(null);
  closeLunarPicker();
});

confirmLunarPickerButton.addEventListener("click", () => {
  setLunarBirthdayValue(getLunarPickerValue());
  closeLunarPicker();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !solarPicker.hidden) closeSolarPicker();
  if (event.key === "Escape" && !lunarPicker.hidden) closeLunarPicker();
  if (event.key === "Escape" && !choicePicker.hidden) closeChoicePicker({ restoreFocus: true });
});

document.querySelector("#openFavorites").addEventListener("click", () => {
  renderFavorites();
  comparePanel.classList.add("open");
});

document.querySelector("#closeFavorites").addEventListener("click", () => {
  comparePanel.classList.remove("open");
});

document.querySelector("#makePoll").addEventListener("click", async () => {
  const names = [...favorites.values()];
  if (!names.length) {
    toast("先收藏几个候选名");
    return;
  }
  const lines = names.map((item, index) => {
    const given = item.displayGiven || item.given || "";
    const reminder = `${item.risk}${given.length === 1 ? " 单字名建议重点看重名风险。" : ""}`;
    return [
      `${index + 1}. ${formatNameWithPinyin(item)}`,
      `寓意：${item.meaning}`,
      `出处：${sourceForItem(item)}`,
      `五行：${item.element}`,
      `音律：${item.tone}${item.writing || ""}`,
      `提醒：${reminder}`
    ].join("\n");
  });
  pollText.value = `帮宝宝选个名字，你更喜欢哪一个？\n\n${lines.join("\n\n")}`;
  try {
    await navigator.clipboard.writeText(pollText.value);
  } catch (error) {
    pollText.select();
  }
  toast("投票文案已生成并复制");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateNames();
});

resetPreferencesBtn.addEventListener("click", resetPreferences);

function getActiveValue(selector) {
  return document.querySelector(`${selector} .active`)?.dataset.value;
}

function getSelectedBasis() {
  return [...document.querySelectorAll(".basis.active")].map((item) => item.dataset.basis);
}

function getSelectedStyles() {
  return [...document.querySelectorAll("#styleChips .chip.active")].map((item) => item.dataset.value);
}

function clonePreferences(preferences) {
  return JSON.parse(JSON.stringify(preferences));
}

function setActiveButton(containerSelector, value) {
  document.querySelectorAll(`${containerSelector} button`).forEach((button) => {
    button.classList.toggle("active", button.dataset.value === value);
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function pinyinForSurnameChar(char) {
  return surnamePinyinMap[char] || namePinyinMap[char] || "";
}

function pinyinForNameChar(char) {
  return namePinyinMap[char] || surnamePinyinMap[char] || "";
}

function fullNamePinyin(item) {
  const fullChars = [...(item.fullName || "")];
  const givenChars = [...(item.displayGiven || item.given || "")];
  const surnameLength = Math.max(0, fullChars.length - givenChars.length);
  const surnameChars = fullChars.slice(0, surnameLength);
  const missing = new Set();
  const parts = [
    ...surnameChars.map((char) => pinyinForSurnameChar(char) || (missing.add(char), "?")),
    ...givenChars.map((char) => pinyinForNameChar(char) || (missing.add(char), "?"))
  ].filter(Boolean);

  if (!parts.length) return "";
  return missing.size ? `${parts.join(" ")}；${[...missing].join("、")}读音待核` : parts.join(" ");
}

function formatNameWithPinyin(item) {
  const pinyin = fullNamePinyin(item);
  return pinyin ? `${item.fullName}（${pinyin}）` : item.fullName;
}

function renderNameWithPinyin(item) {
  const pinyin = fullNamePinyin(item);
  const pinyinPart = pinyin ? `<small class="name-pinyin">（${escapeHtml(pinyin)}）</small>` : "";
  return `${escapeHtml(item.fullName)}${pinyinPart}`;
}

function getSelectLabel(select) {
  return select.selectedOptions[0]?.textContent.trim() || "";
}

function syncChoiceTrigger(selectId) {
  const select = document.querySelector(`#${selectId}`);
  const triggerText = document.querySelector(`#${selectId}TriggerText`);
  if (!select || !triggerText) return;
  triggerText.textContent = getSelectLabel(select);
}

function syncChoiceTriggers() {
  ["wish", "region"].forEach(syncChoiceTrigger);
}

function renderChoiceOptions(select) {
  choicePickerList.innerHTML = "";
  [...select.options].forEach((selectOption) => {
    const option = document.createElement("button");
    option.type = "button";
    option.dataset.choiceValue = selectOption.value;
    option.classList.toggle("active", selectOption.value === select.value);
    option.textContent = selectOption.textContent;
    choicePickerList.append(option);
  });
}

function openChoicePicker(selectId, trigger) {
  const select = document.querySelector(`#${selectId}`);
  if (!select || select.disabled) return;

  if (!solarPicker.hidden) closeSolarPicker();
  if (!lunarPicker.hidden) closeLunarPicker();

  activeChoiceSelect = select;
  activeChoiceTrigger = trigger || document.querySelector(`[data-select-target="${selectId}"]`);

  const labels = choicePickerLabels[selectId] || { eyebrow: "选项", title: "选择内容" };
  choicePickerEyebrow.textContent = labels.eyebrow;
  choicePickerTitle.textContent = labels.title;
  renderChoiceOptions(select);
  choicePicker.hidden = false;
  document.body.classList.add("picker-open");
  closeChoicePickerButton.focus();
}

function closeChoicePicker(options = {}) {
  const trigger = activeChoiceTrigger;
  const shouldRestoreFocus = options.restoreFocus && trigger && !trigger.disabled;
  choicePicker.hidden = true;
  document.body.classList.remove("picker-open");
  activeChoiceSelect = null;
  activeChoiceTrigger = null;
  if (shouldRestoreFocus) trigger.focus();
}

function readPreferencesFromForm() {
  const calendarType = getActiveValue('[data-group="calendarType"]') || "solar";
  const lunarBirthday = calendarType === "lunar" ? getLunarBirthdayValue() : null;
  return {
    surname: document.querySelector("#surname").value.trim(),
    gender: getActiveValue('[data-group="gender"]') || "neutral",
    length: getActiveValue('[data-group="length"]') || "2",
    basis: getSelectedBasis(),
    element: getActiveValue('[data-chip-group="element"]') || "auto",
    styles: getSelectedStyles(),
    wish: document.querySelector("#wish").value,
    calendarType,
    birthday: calendarType === "lunar" ? lunarBirthday?.solarValue || "" : getSolarBirthdayValue(),
    lunarBirthday: lunarBirthday?.display || "",
    region: document.querySelector("#region").value,
    generationChar: generationPanel.hidden ? "" : firstChar(generationCharInput.value),
    generationPosition: getActiveValue('[data-group="generationPosition"]') || "first",
    likes: splitChars(document.querySelector("#likeChars").value),
    avoids: splitChars(document.querySelector("#avoidChars").value)
  };
}

function setPreferenceControlsLocked(locked) {
  form.classList.toggle("locked", locked);
  form.querySelectorAll("input, select, textarea, button").forEach((control) => {
    control.disabled = locked;
  });
}

function updateBottomAction(locked) {
  bottomAction.classList.toggle("locked", locked);
  resetPreferencesBtn.hidden = !locked;
  generateBtn.textContent = locked ? "换一组名字" : "生成有依据的名字";
}

function lockPreferences(preferences) {
  lockedPreferences = clonePreferences(preferences);
  setPreferenceControlsLocked(true);
  updateBottomAction(true);
}

function unlockPreferences() {
  lockedPreferences = null;
  setPreferenceControlsLocked(false);
  updateBottomAction(false);
}

function resetPreferences() {
  if (isGenerating) return;
  closeSolarPicker();
  closeLunarPicker();
  closeChoicePicker();
  unlockPreferences();

  document.querySelector("#surname").value = "";
  setActiveButton('[data-group="gender"]', "neutral");
  setActiveButton('[data-group="length"]', "2");

  const defaultBasis = new Set(["wuxing"]);
  document.querySelectorAll(".basis").forEach((button) => {
    button.classList.toggle("active", defaultBasis.has(button.dataset.basis));
  });
  wuxingPanel.hidden = false;

  setActiveButton('[data-chip-group="element"]', "auto");
  const defaultStyles = new Set(["书卷气"]);
  document.querySelectorAll("#styleChips .chip").forEach((button) => {
    button.classList.toggle("active", defaultStyles.has(button.dataset.value));
  });
  document.querySelector("#wish").value = "平安";

  setActiveButton('[data-group="calendarType"]', "solar");
  setSolarBirthdayValue("");
  resetLunarControls();
  syncCalendarFields();

  generationPanel.hidden = true;
  toggleGeneration.setAttribute("aria-expanded", "false");
  toggleGeneration.textContent = "添加字辈";
  generationCharInput.value = "";
  setActiveButton('[data-group="generationPosition"]', "first");

  document.querySelector("#likeChars").value = "";
  document.querySelector("#avoidChars").value = "";
  document.querySelector("#region").value = "普通话优先";
  syncChoiceTriggers();

  resultRound = 0;
  lastPreferenceKey = "";
  shownResultNames = new Set();
  clearGeneratedResults();
  toast("已恢复默认条件");
}

function splitChars(value) {
  return [...new Set((value || "").replace(/\s+/g, "").split("").filter(Boolean))];
}

function firstChar(value) {
  return [...(value || "").replace(/\s+/g, "")][0] || "";
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function range(start, end, step = 1) {
  const values = [];
  for (let value = start; value <= end; value += step) values.push(value);
  return values;
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function yearOptions() {
  const values = range(pickerYearStart, pickerYearEnd);
  if (!values.includes(solarPickerState.year)) values.push(solarPickerState.year);
  return values.sort((a, b) => a - b);
}

function normalizeSolarPickerState() {
  solarPickerState.month = Math.max(1, Math.min(12, solarPickerState.month));
  solarPickerState.day = Math.max(1, Math.min(daysInMonth(solarPickerState.year, solarPickerState.month), solarPickerState.day));
  solarPickerState.hour = Math.max(0, Math.min(23, solarPickerState.hour));
  solarPickerState.minute = Math.max(0, Math.min(55, Math.floor(solarPickerState.minute / 5) * 5));
}

function renderWheel(list, part, values, suffix) {
  list.innerHTML = values
    .map((value) => {
      const activeClass = value === solarPickerState[part] ? ' class="active"' : "";
      const label = `${padNumber(value)}${suffix}`;
      return `<button type="button"${activeClass} data-picker-part="${part}" data-picker-value="${value}">${label}</button>`;
    })
    .join("");
}

function centerActiveWheelItems(lists = [solarYearList, solarMonthList, solarDayList, solarHourList, solarMinuteList]) {
  lists.forEach((list) => {
    const active = list.querySelector(".active");
    if (active) active.scrollIntoView({ block: "center" });
  });
}

function renderSolarPicker() {
  normalizeSolarPickerState();
  renderWheel(solarYearList, "year", yearOptions(), "年");
  renderWheel(solarMonthList, "month", range(1, 12), "月");
  renderWheel(solarDayList, "day", range(1, daysInMonth(solarPickerState.year, solarPickerState.month)), "日");
  renderWheel(solarHourList, "hour", range(0, 23), "时");
  renderWheel(solarMinuteList, "minute", range(0, 55, 5), "分");
  solarPickerPreview.textContent = formatSolarDisplay(formatSolarIso());
  requestAnimationFrame(centerActiveWheelItems);
}

function setSolarPickerFromValue(value) {
  const matched = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(value || "");
  if (matched) {
    solarPickerState.year = Number(matched[1]);
    solarPickerState.month = Number(matched[2]);
    solarPickerState.day = Number(matched[3]);
    solarPickerState.hour = Number(matched[4]);
    solarPickerState.minute = Number(matched[5]);
  } else {
    solarPickerState.year = baseYear;
    solarPickerState.month = today.getMonth() + 1;
    solarPickerState.day = today.getDate();
    solarPickerState.hour = today.getHours();
    solarPickerState.minute = Math.floor(today.getMinutes() / 5) * 5;
  }
  normalizeSolarPickerState();
}

function formatSolarIso() {
  return `${solarPickerState.year}-${padNumber(solarPickerState.month)}-${padNumber(solarPickerState.day)}T${padNumber(solarPickerState.hour)}:${padNumber(solarPickerState.minute)}`;
}

function formatSolarDisplay(value) {
  const matched = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(value || "");
  if (!matched) return "";
  return `${matched[1]}年${matched[2]}月${matched[3]}日 ${matched[4]}:${matched[5]}`;
}

function getSolarBirthdayValue() {
  return birthdaySolarInput.dataset.value || "";
}

function setSolarBirthdayValue(value) {
  birthdaySolarInput.dataset.value = value;
  if (value) {
    birthdaySolarText.textContent = formatSolarDisplay(value);
    birthdaySolarText.classList.remove("placeholder");
    return;
  }

  birthdaySolarText.textContent = "选择公历出生时间";
  birthdaySolarText.classList.add("placeholder");
}

function openSolarPicker() {
  if (getActiveValue('[data-group="calendarType"]') !== "solar") return;
  setSolarPickerFromValue(getSolarBirthdayValue());
  renderSolarPicker();
  solarPicker.hidden = false;
  document.body.classList.add("picker-open");
  closeSolarPickerButton.focus();
}

function closeSolarPicker() {
  solarPicker.hidden = true;
  document.body.classList.remove("picker-open");
}

function syncCalendarFields() {
  const isLunar = getActiveValue('[data-group="calendarType"]') === "lunar";
  birthdaySolarInput.hidden = isLunar;
  birthdayLunarInput.hidden = !isLunar;
  if (isLunar) {
    closeSolarPicker();
  } else {
    closeLunarPicker();
  }
}

function isoDateFromDate(date) {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`;
}

function parseLunarDate(date) {
  const parts = Object.fromEntries(lunarDateFormatter.formatToParts(date).map((part) => [part.type, part.value]));
  const rawMonth = parts.month || "";
  const isLeap = rawMonth.startsWith("闰");
  const monthName = rawMonth.replace(/^闰/, "");
  const month = lunarMonthNames.indexOf(monthName) + 1;
  return {
    year: Number(parts.relatedYear),
    month,
    leap: isLeap,
    day: Number(parts.day),
    yearName: parts.yearName || "",
    isoDate: isoDateFromDate(date)
  };
}

function buildLunarYearData(year) {
  if (lunarYearCache.has(year)) return lunarYearCache.get(year);

  const months = [];
  const monthMap = new Map();
  const cursor = new Date(year, 0, 1, 12, 0, 0);
  const end = new Date(year + 1, 2, 1, 12, 0, 0);

  while (cursor <= end) {
    const info = parseLunarDate(cursor);
    if (info.year === year && info.month) {
      const key = `${info.month}-${info.leap ? "leap" : "regular"}`;
      if (!monthMap.has(key)) {
        const monthInfo = {
          key,
          month: info.month,
          leap: info.leap,
          label: `${info.leap ? "闰" : ""}${lunarMonthNames[info.month - 1]}`,
          days: []
        };
        monthMap.set(key, monthInfo);
        months.push(monthInfo);
      }
      monthMap.get(key).days.push({ day: info.day, isoDate: info.isoDate });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  const data = { year, months };
  lunarYearCache.set(year, data);
  return data;
}

function currentLunarInfo() {
  return parseLunarDate(new Date(baseYear, today.getMonth(), today.getDate(), 12, 0, 0));
}

function lunarYearOptions() {
  const values = range(pickerYearStart, pickerYearEnd);
  if (!values.includes(lunarPickerState.year)) values.push(lunarPickerState.year);
  return values.sort((a, b) => a - b);
}

function lunarMonthOptions(year = lunarPickerState.year) {
  return buildLunarYearData(Number(year)).months;
}

function lunarDayOptions(year = lunarPickerState.year, monthKey = lunarPickerState.monthKey) {
  const month = lunarMonthOptions(year).find((item) => item.key === monthKey) || lunarMonthOptions(year)[0];
  return month?.days || [];
}

function normalizeLunarPickerState() {
  const years = lunarYearOptions();
  lunarPickerState.year = Math.max(years[0], Math.min(years[years.length - 1], Number(lunarPickerState.year) || baseYear));
  const months = lunarMonthOptions(lunarPickerState.year);
  if (!months.some((month) => month.key === lunarPickerState.monthKey)) {
    lunarPickerState.monthKey = months[0]?.key || "1-regular";
  }
  const days = lunarDayOptions(lunarPickerState.year, lunarPickerState.monthKey);
  if (!days.some((day) => day.day === Number(lunarPickerState.day))) {
    lunarPickerState.day = days[0]?.day || 1;
  }
  if (!lunarHourOptions.some((hour) => hour.hour === Number(lunarPickerState.hour))) {
    lunarPickerState.hour = 0;
  }
}

function renderLunarWheel(list, part, values, labelOf) {
  list.innerHTML = values
    .map((item) => {
      const value = part === "monthKey" ? item.key : item.value;
      const activeValue = part === "monthKey" ? lunarPickerState.monthKey : lunarPickerState[part];
      const activeClass = value === activeValue ? ' class="active"' : "";
      return `<button type="button"${activeClass} data-lunar-part="${part}" data-lunar-value="${value}">${labelOf(item)}</button>`;
    })
    .join("");
}

function getLunarPickerValue() {
  normalizeLunarPickerState();
  const month = lunarMonthOptions().find((item) => item.key === lunarPickerState.monthKey) || lunarMonthOptions()[0];
  const day = lunarDayOptions().find((item) => item.day === Number(lunarPickerState.day)) || month?.days[0];
  const hour = lunarHourOptions.find((item) => item.hour === Number(lunarPickerState.hour)) || lunarHourOptions[0];
  if (!month || !day || !hour) return null;
  return {
    solarValue: `${day.isoDate}T${padNumber(hour.hour)}:00`,
    display: `${lunarPickerState.year}年${month.label}${day.day}日 ${hour.label}`,
    hourBranch: hour.branch,
    year: lunarPickerState.year,
    monthKey: lunarPickerState.monthKey,
    day: day.day,
    hour: hour.hour
  };
}

function renderLunarPicker() {
  normalizeLunarPickerState();
  renderLunarWheel(lunarYearList, "year", lunarYearOptions().map((value) => ({ value })), (item) => `${item.value}年`);
  renderLunarWheel(lunarMonthList, "monthKey", lunarMonthOptions(), (item) => item.label);
  renderLunarWheel(lunarDayList, "day", lunarDayOptions().map((item) => ({ value: item.day })), (item) => `${item.value}日`);
  renderLunarWheel(lunarHourList, "hour", lunarHourOptions.map((item) => ({ value: item.hour, label: item.label, range: item.range })), (item) => `${item.label} ${item.range}`);
  const value = getLunarPickerValue();
  lunarPickerPreview.textContent = value
    ? `${value.display}，换算为公历${formatSolarDisplay(value.solarValue)}`
    : "请选择农历出生时间";
  requestAnimationFrame(() => centerActiveWheelItems([lunarYearList, lunarMonthList, lunarDayList, lunarHourList]));
}

function setLunarPickerToCurrent() {
  const current = currentLunarInfo();
  lunarPickerState.year = current.year;
  const monthKey = `${current.month}-${current.leap ? "leap" : "regular"}`;
  lunarPickerState.monthKey = monthKey;
  lunarPickerState.day = current.day;
  const currentHour = lunarHourOptions.reduce((best, item) => {
    const distance = Math.abs(item.hour - today.getHours());
    return distance < best.distance ? { value: item.hour, distance } : best;
  }, { value: 0, distance: 24 });
  lunarPickerState.hour = currentHour.value;
  normalizeLunarPickerState();
}

function setLunarPickerFromValue() {
  const value = getLunarBirthdayValue();
  if (value) {
    lunarPickerState.year = Number(value.year);
    lunarPickerState.monthKey = value.monthKey;
    lunarPickerState.day = Number(value.day);
    lunarPickerState.hour = Number(value.hour);
    normalizeLunarPickerState();
    return;
  }

  setLunarPickerToCurrent();
}

function resetLunarControls() {
  setLunarPickerToCurrent();
  setLunarBirthdayValue(null);
}

function getLunarBirthdayValue() {
  if (!birthdayLunarInput.dataset.value) return null;
  return {
    solarValue: birthdayLunarInput.dataset.value,
    display: birthdayLunarInput.dataset.display || "",
    hourBranch: birthdayLunarInput.dataset.hourBranch || "",
    year: birthdayLunarInput.dataset.year,
    monthKey: birthdayLunarInput.dataset.monthKey,
    day: birthdayLunarInput.dataset.day,
    hour: birthdayLunarInput.dataset.hour
  };
}

function setLunarBirthdayValue(value) {
  if (!value) {
    birthdayLunarInput.dataset.value = "";
    birthdayLunarInput.dataset.display = "";
    birthdayLunarInput.dataset.hourBranch = "";
    birthdayLunarInput.dataset.year = "";
    birthdayLunarInput.dataset.monthKey = "";
    birthdayLunarInput.dataset.day = "";
    birthdayLunarInput.dataset.hour = "";
    birthdayLunarText.textContent = "选择农历出生时间";
    birthdayLunarText.classList.add("placeholder");
    return;
  }

  birthdayLunarInput.dataset.value = value.solarValue;
  birthdayLunarInput.dataset.display = value.display;
  birthdayLunarInput.dataset.hourBranch = value.hourBranch;
  birthdayLunarInput.dataset.year = value.year;
  birthdayLunarInput.dataset.monthKey = value.monthKey;
  birthdayLunarInput.dataset.day = value.day;
  birthdayLunarInput.dataset.hour = value.hour;
  birthdayLunarText.textContent = value.display;
  birthdayLunarText.classList.remove("placeholder");
}

function openLunarPicker() {
  if (getActiveValue('[data-group="calendarType"]') !== "lunar") return;
  setLunarPickerFromValue();
  renderLunarPicker();
  lunarPicker.hidden = false;
  document.body.classList.add("picker-open");
  closeLunarPickerButton.focus();
}

function closeLunarPicker() {
  lunarPicker.hidden = true;
  document.body.classList.remove("picker-open");
}

function birthdaySeason(value) {
  if (!value) return "";
  const month = Number(value.slice(5, 7));
  if ([3, 4, 5].includes(month)) return "春";
  if ([6, 7, 8].includes(month)) return "夏";
  if ([9, 10, 11].includes(month)) return "秋";
  return "冬";
}

function birthdayZodiac(value) {
  const year = Number((value || "").slice(0, 4));
  if (!year) return "";
  const animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
  return animals[(year - 4) % 12];
}

function positiveModulo(value, modulo) {
  return ((value % modulo) + modulo) % modulo;
}

const solarTermJieBoundaries = [
  { term: "小寒", month: 1, branch: 1, c: 5.4055, fallbackDay: 6 },
  { term: "立春", month: 2, branch: 2, c: 3.87, fallbackDay: 4 },
  { term: "惊蛰", month: 3, branch: 3, c: 5.63, fallbackDay: 6 },
  { term: "清明", month: 4, branch: 4, c: 4.81, fallbackDay: 5 },
  { term: "立夏", month: 5, branch: 5, c: 5.52, fallbackDay: 6 },
  { term: "芒种", month: 6, branch: 6, c: 5.678, fallbackDay: 6 },
  { term: "小暑", month: 7, branch: 7, c: 7.108, fallbackDay: 7 },
  { term: "立秋", month: 8, branch: 8, c: 7.5, fallbackDay: 8 },
  { term: "白露", month: 9, branch: 9, c: 7.646, fallbackDay: 8 },
  { term: "寒露", month: 10, branch: 10, c: 8.318, fallbackDay: 8 },
  { term: "立冬", month: 11, branch: 11, c: 7.438, fallbackDay: 7 },
  { term: "大雪", month: 12, branch: 0, c: 7.18, fallbackDay: 7 }
];

function solarTermDay(year, term) {
  const boundary = solarTermJieBoundaries.find((item) => item.term === term);
  if (!boundary) return 1;
  if (year < 1901 || year > 2099) return boundary.fallbackDay;

  const y = year % 100;
  return Math.floor(y * 0.2422 + boundary.c) - Math.floor((y - 1) / 4);
}

function sexagenaryFromIndex(index) {
  return {
    stem: heavenlyStems[positiveModulo(index, 10)],
    branch: earthlyBranches[positiveModulo(index, 12)]
  };
}

function pillarElements(pillar) {
  if (!pillar) return [];
  return [stemElements[pillar.stem], branchElements[pillar.branch]].filter(Boolean);
}

function gregorianJdn(year, month, day) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const century = Math.floor(y / 100);
  const correction = 2 - century + Math.floor(century / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + correction - 1524;
}

function yearPillar(year, month, day) {
  const liChunDay = solarTermDay(year, "立春");
  const effectiveYear = month > 2 || (month === 2 && day >= liChunDay) ? year : year - 1;
  return sexagenaryFromIndex(effectiveYear - 4);
}

function monthBranchIndex(year, month, day) {
  let branch = 0;
  solarTermJieBoundaries.forEach((item) => {
    const termDay = solarTermDay(year, item.term);
    if (month > item.month || (month === item.month && day >= termDay)) branch = item.branch;
  });
  return branch;
}

function monthPillar(yearPillarValue, year, month, day) {
  const branchIndex = monthBranchIndex(year, month, day);
  const yearStemIndex = heavenlyStems.indexOf(yearPillarValue.stem);
  const startStemMap = [2, 4, 6, 8, 0];
  const startStem = startStemMap[yearStemIndex % 5];
  const monthOffset = positiveModulo(branchIndex - 2, 12);
  return {
    stem: heavenlyStems[positiveModulo(startStem + monthOffset, 10)],
    branch: earthlyBranches[branchIndex]
  };
}

function dayPillar(year, month, day) {
  return sexagenaryFromIndex(gregorianJdn(year, month, day) + 49);
}

function hourPillar(dayPillarValue, hour) {
  const branchIndex = Math.floor((hour + 1) / 2) % 12;
  const dayStemIndex = heavenlyStems.indexOf(dayPillarValue.stem);
  const startStemMap = [0, 2, 4, 6, 8];
  const startStem = startStemMap[dayStemIndex % 5];
  return {
    stem: heavenlyStems[positiveModulo(startStem + branchIndex, 10)],
    branch: earthlyBranches[branchIndex]
  };
}

function elementCountsFromPillars(pillars) {
  const counts = Object.fromEntries(fiveElements.map((element) => [element, 0]));
  pillars.forEach((pillar) => {
    pillarElements(pillar).forEach((element) => {
      counts[element] += 1;
    });
  });
  return counts;
}

function favorableElementsFromCounts(counts) {
  const ranked = fiveElements
    .map((element) => ({ element, count: counts[element] || 0 }))
    .sort((a, b) => a.count - b.count || fiveElements.indexOf(a.element) - fiveElements.indexOf(b.element));
  return ranked.slice(0, 2).map((item) => item.element);
}

function buildBaziProfile(preferences) {
  if (!preferences.basis.includes("bazi") || !preferences.birthday) return null;

  const matched = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(preferences.birthday);
  if (!matched) return null;

  const year = Number(matched[1]);
  const month = Number(matched[2]);
  const day = Number(matched[3]);
  const hour = Number(matched[4]);
  const yearValue = yearPillar(year, month, day);
  const monthValue = monthPillar(yearValue, year, month, day);
  const dayValue = dayPillar(year, month, day);
  const hourValue = hourPillar(dayValue, hour);
  const pillars = [
    { label: "年柱", ...yearValue },
    { label: "月柱", ...monthValue },
    { label: "日柱", ...dayValue },
    { label: "时柱", ...hourValue }
  ];
  const counts = elementCountsFromPillars(pillars);
  const favorableElements = favorableElementsFromCounts(counts);

  return {
    mode: preferences.calendarType,
    pillars,
    counts,
    favorableElements,
    solarValue: preferences.birthday,
    lunarDisplay: preferences.lunarBirthday || "",
    summary: `${pillars.map((item) => `${item.label}${item.stem}${item.branch}`).join("、")}；按立春与节气分年分月，五行偏弱参考${favorableElements.join("、")}。`
  };
}

function seasonalElements(season) {
  return {
    春: ["木", "水"],
    夏: ["火", "土"],
    秋: ["金", "土"],
    冬: ["水", "木"]
  }[season] || [];
}

const surnameToneMap = {
  赵: 4,
  钱: 2,
  孙: 1,
  李: 3,
  周: 1,
  吴: 2,
  郑: 4,
  王: 2,
  冯: 2,
  陈: 2,
  褚: 3,
  卫: 4,
  蒋: 3,
  沈: 3,
  韩: 2,
  杨: 2,
  朱: 1,
  秦: 2,
  尤: 2,
  许: 3,
  何: 2,
  吕: 3,
  施: 1,
  张: 1,
  孔: 3,
  曹: 2,
  严: 2,
  华: 4,
  金: 1,
  魏: 4,
  陶: 2,
  姜: 1,
  戚: 1,
  谢: 4,
  邹: 1,
  喻: 4,
  柏: 3,
  水: 3,
  窦: 4,
  章: 1,
  云: 2,
  苏: 1,
  潘: 1,
  葛: 3,
  奚: 1,
  范: 4,
  彭: 2,
  郎: 2,
  鲁: 3,
  韦: 2,
  昌: 1,
  马: 3,
  苗: 2,
  凤: 4,
  花: 1,
  方: 1,
  俞: 2,
  任: 4,
  袁: 2,
  柳: 3,
  鲍: 4,
  史: 3,
  唐: 2,
  费: 4,
  廉: 2,
  岑: 2,
  薛: 1,
  雷: 2,
  贺: 4,
  倪: 2,
  汤: 1,
  滕: 2,
  殷: 1,
  罗: 2,
  毕: 4,
  郝: 3,
  安: 1,
  常: 2,
  傅: 4,
  卞: 4,
  齐: 2,
  元: 2,
  顾: 4,
  孟: 4,
  平: 2,
  黄: 2,
  和: 2,
  穆: 4,
  萧: 1,
  尹: 3,
  林: 2,
  梁: 2,
  宋: 4,
  徐: 2,
  胡: 2,
  郭: 1,
  高: 1,
  刘: 2,
  邓: 4
};

const surnamePinyinMap = {
  赵: "zhào",
  钱: "qián",
  孙: "sūn",
  李: "lǐ",
  周: "zhōu",
  吴: "wú",
  郑: "zhèng",
  王: "wáng",
  冯: "féng",
  陈: "chén",
  褚: "chǔ",
  卫: "wèi",
  蒋: "jiǎng",
  沈: "shěn",
  韩: "hán",
  杨: "yáng",
  朱: "zhū",
  秦: "qín",
  尤: "yóu",
  许: "xǔ",
  何: "hé",
  吕: "lǚ",
  施: "shī",
  张: "zhāng",
  孔: "kǒng",
  曹: "cáo",
  严: "yán",
  华: "huà",
  金: "jīn",
  魏: "wèi",
  陶: "táo",
  姜: "jiāng",
  戚: "qī",
  谢: "xiè",
  邹: "zōu",
  喻: "yù",
  柏: "bǎi",
  水: "shuǐ",
  窦: "dòu",
  章: "zhāng",
  云: "yún",
  苏: "sū",
  潘: "pān",
  葛: "gě",
  奚: "xī",
  范: "fàn",
  彭: "péng",
  郎: "láng",
  鲁: "lǔ",
  韦: "wéi",
  昌: "chāng",
  马: "mǎ",
  苗: "miáo",
  凤: "fèng",
  花: "huā",
  方: "fāng",
  俞: "yú",
  任: "rèn",
  袁: "yuán",
  柳: "liǔ",
  鲍: "bào",
  史: "shǐ",
  唐: "táng",
  费: "fèi",
  廉: "lián",
  岑: "cén",
  薛: "xuē",
  雷: "léi",
  贺: "hè",
  倪: "ní",
  汤: "tāng",
  滕: "téng",
  殷: "yīn",
  罗: "luó",
  毕: "bì",
  郝: "hǎo",
  安: "ān",
  常: "cháng",
  傅: "fù",
  卞: "biàn",
  齐: "qí",
  元: "yuán",
  顾: "gù",
  孟: "mèng",
  平: "píng",
  黄: "huáng",
  和: "hé",
  穆: "mù",
  萧: "xiāo",
  尹: "yǐn",
  林: "lín",
  梁: "liáng",
  宋: "sòng",
  徐: "xú",
  胡: "hú",
  郭: "guō",
  高: "gāo",
  刘: "liú",
  邓: "dèng",
  叶: "yè",
  曾: "zēng",
  肖: "xiāo",
  欧: "ōu",
  阳: "yáng",
  司: "sī",
  上: "shàng",
  官: "guān",
  诸: "zhū",
  夏: "xià",
  侯: "hóu",
  邱: "qiū",
  钟: "zhōng",
  廖: "liào",
  熊: "xióng",
  黎: "lí",
  贾: "jiǎ",
  邵: "shào",
  万: "wàn",
  丁: "dīng",
  于: "yú",
  陆: "lù",
  崔: "cuī",
  石: "shí",
  龙: "lóng",
  龚: "gōng",
  白: "bái",
  邢: "xíng"
};

const namePinyinMap = {
  知: "zhī",
  安: "ān",
  宁: "níng",
  遥: "yáo",
  怀: "huái",
  瑾: "jǐn",
  瑜: "yú",
  清: "qīng",
  扬: "yáng",
  云: "yún",
  帆: "fān",
  星: "xīng",
  驰: "chí",
  澜: "lán",
  明: "míng",
  棠: "táng",
  砚: "yàn",
  书: "shū",
  景: "jǐng",
  行: "xíng",
  若: "ruò",
  承: "chéng",
  岳: "yuè",
  栖: "qī",
  月: "yuè",
  澈: "chè",
  昀: "yún",
  珩: "héng",
  芮: "ruì",
  衡: "héng",
  沐: "mù",
  禾: "hé",
  初: "chū",
  晏: "yàn",
  庭: "tíng",
  修: "xiū",
  远: "yuǎn",
  言: "yán",
  礼: "lǐ",
  允: "yǔn",
  穆: "mù",
  然: "rán",
  一: "yī",
  之: "zhī",
  沅: "yuán",
  汀: "tīng",
  洲: "zhōu",
  林: "lín",
  森: "sēn",
  桐: "tóng",
  槿: "jǐn",
  竹: "zhú",
  乔: "qiáo",
  微: "wēi",
  熙: "xī",
  昭: "zhāo",
  晗: "hán",
  曜: "yào",
  煦: "xù",
  钧: "jūn",
  铭: "míng",
  钰: "yù",
  铎: "duó",
  宸: "chén",
  垚: "yáo",
  屿: "yǔ",
  岚: "lán",
  予: "yǔ",
  乐: "lè",
  善: "shàn",
  祺: "qí",
  望: "wàng",
  舒: "shū",
  念: "niàn",
  柏: "bǎi",
  杉: "shān",
  柳: "liǔ",
  桢: "zhēn",
  榆: "yú",
  楠: "nán",
  樾: "yuè",
  棣: "dì",
  楷: "kǎi",
  楚: "chǔ",
  榕: "róng",
  榛: "zhēn",
  樵: "qiáo",
  梧: "wú",
  柯: "kē",
  栩: "xǔ",
  杭: "háng",
  枫: "fēng",
  风: "fēng",
  檀: "tán",
  榭: "xiè",
  芷: "zhǐ",
  芊: "qiān",
  芃: "péng",
  萱: "xuān",
  菀: "wǎn",
  蔓: "màn",
  蕴: "yùn",
  蕙: "huì",
  荷: "hé",
  菡: "hàn",
  蓁: "zhēn",
  葭: "jiā",
  蘅: "héng",
  兰: "lán",
  莞: "wǎn",
  荀: "xún",
  茗: "míng",
  茉: "mò",
  苒: "rǎn",
  芙: "fú",
  筠: "yún",
  笙: "shēng",
  简: "jiǎn",
  策: "cè",
  箴: "zhēn",
  篇: "piān",
  籍: "jí",
  蓝: "lán",
  菁: "jīng",
  英: "yīng",
  苑: "yuàn",
  苏: "sū",
  荣: "róng",
  茂: "mào",
  秉: "bǐng",
  程: "chéng",
  稚: "zhì",
  稷: "jì",
  涵: "hán",
  淳: "chún",
  润: "rùn",
  泽: "zé",
  沛: "pèi",
  泓: "hóng",
  洵: "xún",
  洺: "míng",
  浚: "jùn",
  淇: "qí",
  洛: "luò",
  湘: "xiāng",
  渝: "yú",
  澄: "chéng",
  澍: "shù",
  沂: "yí",
  沫: "mò",
  溪: "xī",
  漾: "yàng",
  沄: "yún",
  沣: "fēng",
  泠: "líng",
  沁: "qìn",
  溶: "róng",
  渊: "yuān",
  源: "yuán",
  泊: "bó",
  瀚: "hàn",
  霁: "jì",
  霖: "lín",
  雨: "yǔ",
  霏: "fēi",
  雪: "xuě",
  露: "lù",
  霄: "xiāo",
  航: "háng",
  舟: "zhōu",
  川: "chuān",
  江: "jiāng",
  河: "hé",
  识: "shí",
  悟: "wù",
  敏: "mǐn",
  慧: "huì",
  聪: "cōng",
  睿: "ruì",
  思: "sī",
  想: "xiǎng",
  慕: "mù",
  惠: "huì",
  恬: "tián",
  怡: "yí",
  悦: "yuè",
  恒: "héng",
  恪: "kè",
  晨: "chén",
  曦: "xī",
  旭: "xù",
  昕: "xīn",
  晟: "shèng",
  晖: "huī",
  暄: "xuān",
  煜: "yù",
  烨: "yè",
  炜: "wěi",
  焕: "huàn",
  煊: "xuān",
  熠: "yì",
  灿: "càn",
  烁: "shuò",
  朗: "lǎng",
  晴: "qíng",
  晓: "xiǎo",
  昶: "chǎng",
  昱: "yù",
  晋: "jìn",
  卓: "zhuó",
  昊: "hào",
  晁: "cháo",
  晔: "yè",
  暘: "yáng",
  炫: "xuàn",
  焱: "yàn",
  燊: "shēn",
  炯: "jiǒng",
  烜: "xuǎn",
  照: "zhào",
  昌: "chāng",
  映: "yìng",
  旻: "mín",
  晞: "xī",
  暖: "nuǎn",
  熹: "xī",
  和: "hé",
  炘: "xīn",
  曈: "tóng",
  暻: "jǐng",
  晤: "wù",
  昉: "fǎng",
  玥: "yuè",
  玮: "wěi",
  珺: "jùn",
  琛: "chēn",
  琦: "qí",
  琨: "kūn",
  璟: "jǐng",
  璇: "xuán",
  璐: "lù",
  琪: "qí",
  瑶: "yáo",
  瑄: "xuān",
  璋: "zhāng",
  琮: "cóng",
  珏: "jué",
  珂: "kē",
  璞: "pú",
  琬: "wǎn",
  锦: "jǐn",
  铄: "shuò",
  铮: "zhēng",
  锐: "ruì",
  锋: "fēng",
  钦: "qīn",
  铠: "kǎi",
  锴: "kǎi",
  镕: "róng",
  镇: "zhèn",
  鉴: "jiàn",
  钊: "zhāo",
  铉: "xuàn",
  钺: "yuè",
  素: "sù",
  真: "zhēn",
  诚: "chéng",
  信: "xìn",
  诗: "shī",
  词: "cí",
  诵: "sòng",
  叙: "xù",
  序: "xù",
  则: "zé",
  谨: "jǐn",
  逊: "xùn",
  辞: "cí",
  章: "zhāng",
  齐: "qí",
  翰: "hàn",
  坤: "kūn",
  垣: "yuán",
  培: "péi",
  城: "chéng",
  均: "jūn",
  坦: "tǎn",
  域: "yù",
  基: "jī",
  堂: "táng",
  峻: "jùn",
  嵘: "róng",
  峰: "fēng",
  岑: "cén",
  岩: "yán",
  峤: "qiáo",
  峥: "zhēng",
  崧: "sōng",
  峦: "luán",
  宇: "yǔ",
  容: "róng",
  宥: "yòu",
  宣: "xuān",
  宜: "yí",
  寅: "yín",
  辰: "chén",
  央: "yāng",
  佑: "yòu",
  轩: "xuān",
  维: "wéi",
  惟: "wéi",
  恩: "ēn",
  宛: "wǎn",
  宓: "mì",
  寰: "huán",
  宴: "yàn",
  宵: "xiāo",
  山: "shān",
  岫: "xiù",
  岱: "dài",
  岭: "lǐng",
  岸: "àn",
  坡: "pō",
  原: "yuán",
  野: "yě",
  越: "yuè",
  逾: "yú",
  逸: "yì",
  屹: "yì",
  岐: "qí",
  仁: "rén",
  义: "yì",
  德: "dé",
  谦: "qiān",
  敬: "jìng",
  恭: "gōng",
  慎: "shèn",
  学: "xué",
  文: "wén",
  雅: "yǎ",
  彦: "yàn",
  贤: "xián",
  启: "qǐ",
  开: "kāi",
  觉: "jué",
  津: "jīn",
  渡: "dù",
  迈: "mài",
  途: "tú",
  逍: "xiāo",
  游: "yóu",
  溯: "sù",
  寻: "xún",
  观: "guān",
  临: "lín",
  归: "guī"
};

function getSurnameTone(surname) {
  const first = [...(surname || "")][0];
  return surnameToneMap[first] || 0;
}

function soundFitScore(item, preferences) {
  const tones = item.chars?.map((char) => char.tone).filter(Boolean) || [];
  if (!tones.length) return 0;

  const surnameTone = getSurnameTone(preferences.surname);
  let score = 0;

  if (surnameTone) {
    score += surnameTone !== tones[0] ? 4 : -3;
    const fullToneSet = new Set([surnameTone, ...tones]);
    score += fullToneSet.size >= Math.min(3, tones.length + 1) ? 3 : -1;
  }

  if (tones.length > 1) {
    score += tones[0] !== tones[1] ? 4 : -3;
    if (tones[tones.length - 1] === 1 || tones[tones.length - 1] === 2) score += 1;
  }

  return score;
}

function uniqueCharacters() {
  const seen = new Set();
  return [...nameCharacters, ...supplementalNameCharacters].filter((item) => {
    if (seen.has(item.char)) return false;
    seen.add(item.char);
    return true;
  });
}

function combineGender(chars) {
  const genders = new Set(chars.map((item) => item.gender).filter((item) => item !== "neutral"));
  return genders.size === 1 ? [...genders][0] : "neutral";
}

function sourcePriority(sourceType) {
  return { classic: 4, poetry: 3, season: 2, meaning: 1 }[sourceType] || 1;
}

function combineSourceType(chars) {
  return [...chars].sort((a, b) => sourcePriority(b.sourceType) - sourcePriority(a.sourceType))[0].sourceType;
}

function joinUnique(values) {
  return [...new Set(values.filter(Boolean))];
}

function dominantElement(chars) {
  const counts = chars.reduce((map, item) => {
    map[item.element] = (map[item.element] || 0) + 1;
    return map;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function toneLabel(chars, surname) {
  const surnameChar = [...(surname || "")][0] || "";
  const surnameTone = getSurnameTone(surname);
  const surnamePart = surnameTone ? `姓氏“${surnameChar}”约${surnameTone}声，` : "";

  if (chars.length === 1) {
    const connect = surnameTone && surnameTone !== chars[0].tone ? "姓与名单字声调有变化，" : "";
    return `${surnamePart}单字${chars[0].tone}声，${connect}短促清楚，适合连读后再听整体收束。`;
  }

  const [first, second] = chars;
  const changed = first.tone !== second.tone;
  const surnameChanged = surnameTone ? surnameTone !== first.tone : true;
  const ending = second.tone === 1 || second.tone === 2 ? "尾音上扬，听感更明亮。" : "尾音收稳，听感更沉着。";
  return `${surnamePart}名中${first.tone}声接${second.tone}声，${surnameChanged ? "姓与名首有起伏，" : "姓与名首声调接近，需复读确认，"}${changed ? "名字内部也有变化。" : "名字内部偏平顺。"}${ending}`;
}

function writingLabel(chars) {
  const total = chars.reduce((sum, item) => sum + item.strokes, 0);
  const structure = chars.map((item) => `${item.char}${item.strokes}画`).join("、");
  if (total <= 14) return `${structure}，整体笔画轻，低年级书写压力小。`;
  if (total <= 24) return `${structure}，笔画轻重适中，正式场景辨识度稳定。`;
  return `${structure}，字形偏厚重，适合看重格局感，但幼年书写要多确认。`;
}

function riskLabel(chars, given) {
  const rare = chars.filter((item) => item.tags.includes("少见不生僻")).map((item) => item.char);
  const heavy = chars.filter((item) => item.strokes >= 15).map((item) => item.char);
  const notes = [];
  if (given.length === 1) notes.push("单字名建议重点看重名风险。");
  if (rare.length) notes.push(`“${rare.join("、")}”辨识度较高，建议确认长辈读写接受度。`);
  if (heavy.length) notes.push(`“${heavy.join("、")}”笔画稍重，需看姓氏整体是否过密。`);
  return notes.join("") || "建议把全名连续读三遍，确认没有突兀谐音或拗口停顿。";
}

function buildNameItem(chars, preferences) {
  const given = chars.map((item) => item.char).join("");
  const tags = joinUnique(chars.flatMap((item) => item.tags));
  const sourceType = combineSourceType(chars);
  const elements = joinUnique(chars.map((item) => item.element));
  const source = chars.length === 1
    ? chars[0].source
    : `${chars.map((item) => item.source).join(" ")}两字合看，兼取${tags.slice(0, 2).join("与")}之意。`;
  const meaning = chars.length === 1
    ? chars[0].meaning
    : `${chars.map((item) => `${item.char}取“${item.meaning}”`).join("，")}，合成一个${tags.slice(0, 2).join("、")}的名字方向。`;

  return {
    given,
    gender: combineGender(chars),
    element: dominantElement(chars),
    elements,
    sourceType,
    source,
    tags,
    meaning,
    tone: toneLabel(chars, preferences.surname),
    writing: writingLabel(chars),
    risk: riskLabel(chars, given),
    chars,
    zodiac: joinUnique(chars.flatMap((item) => item.zodiac || [])),
    seasons: joinUnique(chars.flatMap((item) => item.season || []))
  };
}

function characterMetaMap() {
  return new Map([...nameCharacters, ...supplementalNameCharacters, ...literarySeedCharacters].map((item) => [item.char, item]));
}

function literarySeedCandidates(preferences) {
  if (!preferences.basis.includes("classic")) return [];

  const charMap = characterMetaMap();
  return literaryNameSeeds.map((seed) => {
    const chars = [...seed.given].map((char) => {
      const meta = charMap.get(char) || {
        char,
        element: seed.element,
        sourceType: "classic",
        source: seed.source,
        tags: seed.tags,
        meaning: `${char}字取自${seed.source.replace(/^取自/, "")}`,
        tone: 2,
        strokes: 8,
        gender: seed.gender || "neutral",
        zodiac: [],
        season: []
      };
      return {
        ...meta,
        sourceType: ["classic", "poetry"].includes(meta.sourceType) ? meta.sourceType : "classic"
      };
    });
    const item = buildNameItem(chars, preferences);
    return {
      ...item,
      element: seed.element || item.element,
      elements: seed.elements || item.elements,
      gender: seed.gender || item.gender,
      sourceType: "poetry",
      source: seed.source,
      displaySource: seed.source,
      literarySource: seed.source,
      literarySeed: true,
      tags: joinUnique([...seed.tags, ...item.tags]),
      meaning: seed.meaning,
      risk: `${item.risk} 典籍诗词出处明确，建议家人重点听读全名音律。`
    };
  });
}

function buildGeneratedCandidates(preferences) {
  const chars = uniqueCharacters();
  const allowSingle = preferences.length === "1" || preferences.length === "all";
  const allowDouble = preferences.length === "2" || preferences.length === "all" || Boolean(preferences.generationChar);
  const generated = preferences.generationChar ? [] : literarySeedCandidates(preferences);

  if (allowSingle && !preferences.generationChar) {
    chars.forEach((item) => generated.push(buildNameItem([item], preferences)));
  }

  if (allowDouble) {
    if (preferences.generationChar) {
      const generationMeta = {
        char: preferences.generationChar,
        element: preferences.element === "auto" ? "土" : preferences.element,
        sourceType: "meaning",
        source: `“${preferences.generationChar}”按家族字辈入名，重在承续家风。`,
        tags: ["仁爱", "平安", "书卷气"],
        meaning: "承接家族排行与祝愿。",
        tone: 2,
        strokes: 8,
        gender: "neutral",
        zodiac: [],
        season: []
      };

      chars
        .filter((item) => item.char !== preferences.generationChar)
        .forEach((item) => {
          const pair = preferences.generationPosition === "first" ? [generationMeta, item] : [item, generationMeta];
          generated.push(buildNameItem(pair, preferences));
        });
      return generated;
    }

    chars.forEach((first) => {
      chars.forEach((second) => {
        if (first.char === second.char) return;
        generated.push(buildNameItem([first, second], preferences));
      });
    });
  }

  return generated;
}

function scoreCandidate(item, preferences) {
  let score = 70;
  const reasons = [];
  const candidateLength = preferences.generationChar ? 2 : item.given.length;
  const elements = item.elements || [item.element];
  const soundFit = soundFitScore(item, preferences);

  if (preferences.gender !== "neutral" && item.gender === preferences.gender) score += 5;
  if (preferences.gender !== "neutral" && item.gender !== "neutral" && item.gender !== preferences.gender) score -= 22;

  if (preferences.length !== "all" && candidateLength === Number(preferences.length)) score += 8;
  if (preferences.length !== "all" && candidateLength !== Number(preferences.length)) score -= 40;

  if (preferences.basis.includes("wuxing")) {
    if (preferences.element === "auto") {
      const seasonalFit = seasonalElements(preferences.season).some((element) => elements.includes(element));
      score += seasonalFit ? 10 : 4;
      reasons.push(seasonalFit ? "五行参考出生季节取相生气息" : "五行采用平衡参考");
    } else if (elements.includes(preferences.element)) {
      score += 13;
      reasons.push(`契合补${preferences.element}`);
    } else {
      score -= 8;
    }
  }

  if (preferences.basis.includes("classic")) {
    if (item.literarySource) {
      score += 34;
      reasons.push("典籍诗词出处明确");
    } else if (["classic", "poetry"].includes(item.sourceType)) {
      score += 8;
    } else {
      score -= 16;
    }
  }
  if (preferences.basis.includes("meaning") && item.tags.includes(preferences.wish)) score += 10;
  score += Math.round(soundFit * 0.45);
  if (preferences.basis.includes("sound")) {
    const tones = item.chars?.map((char) => char.tone) || [];
    score += (new Set(tones).size > 1 ? 8 : 3) + soundFit;
  }
  if (preferences.basis.includes("shape")) {
    const totalStrokes = item.chars?.reduce((sum, char) => sum + char.strokes, 0) || 0;
    score += totalStrokes && totalStrokes <= 24 ? 7 : 2;
  }
  if (preferences.basis.includes("season")) {
    if (item.seasons?.includes(preferences.season)) score += 10;
    if (item.zodiac?.includes(preferences.zodiac)) score += 7;
    if (["season", "poetry"].includes(item.sourceType)) score += 4;
  }

  if (preferences.basis.includes("bazi")) {
    const favorable = preferences.bazi?.favorableElements || [];
    const baziFit = favorable.some((element) => elements.includes(element));
    if (baziFit) {
      score += 15;
      reasons.push(`八字轻参补${favorable.join("、")}`);
    } else if (favorable.length) {
      score -= 4;
    } else if (preferences.birthday) {
      score += 2;
      reasons.push("八字信息已记录，按轻量参考处理");
    }
  }

  if (preferences.basis.includes("yijing")) {
    const images = yijingImagesForItem(item);
    const styleFit = images.some((image) => image.tags.some((tag) => item.tags.includes(tag) || preferences.styles.includes(tag)));
    score += styleFit ? 10 : 5;
    if (["classic", "poetry"].includes(item.sourceType)) score += 4;
    if (images.length) reasons.push(`周易取${images.map((image) => image.trigram).join("、")}象`);
  }

  preferences.styles.forEach((style) => {
    if (item.tags.includes(style)) score += 5;
  });

  preferences.likes.forEach((char) => {
    if (item.given.includes(char)) score += 18;
  });

  if (preferences.generationChar) score += 10;

  preferences.avoids.forEach((char) => {
    if (item.given.includes(char)) score -= 100;
  });

  if (/([^\u4e00-\u9fa5])/.test(item.given)) score -= 100;

  return {
    score: Math.max(0, Math.min(98, score)),
    reasons
  };
}

function applyGeneration(given, preferences) {
  if (!preferences.generationChar) return given;
  const chars = [...given].filter((char) => char !== preferences.generationChar);
  const fallback = preferences.generationChar === "安" ? "宁" : "安";
  const companion = chars[preferences.generationPosition === "first" ? chars.length - 1 : 0] || chars[0] || fallback;
  return preferences.generationPosition === "first"
    ? `${preferences.generationChar}${companion}`
    : `${companion}${preferences.generationChar}`;
}

function preferenceKey(preferences) {
  return JSON.stringify({
    surname: preferences.surname,
    gender: preferences.gender,
    length: preferences.length,
    basis: preferences.basis,
    element: preferences.element,
    styles: preferences.styles,
    wish: preferences.wish,
    calendarType: preferences.calendarType,
    birthday: preferences.birthday,
    lunarBirthday: preferences.lunarBirthday,
    region: preferences.region,
    generationChar: preferences.generationChar,
    generationPosition: preferences.generationPosition,
    likes: preferences.likes,
    avoids: preferences.avoids
  });
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function generationDelayMs(preferences) {
  let delay = 5000;
  delay += Math.max(0, preferences.basis.length - 1) * 2200;
  delay += Math.max(0, preferences.styles.length - 1) * 650;
  if (preferences.basis.includes("bazi")) delay += preferences.calendarType === "solar" ? 5200 : 3200;
  if (preferences.basis.includes("yijing")) delay += 2200;
  if (preferences.birthday) delay += 1200;
  if (preferences.generationChar) delay += 2400;
  if (preferences.element && preferences.element !== "auto") delay += 800;
  if (preferences.gender !== "neutral") delay += 600;
  if (preferences.length === "all") delay += 700;
  if (preferences.region && preferences.region !== "普通话优先") delay += 1100;
  delay += Math.min(2200, preferences.likes.length * 420);
  delay += Math.min(2600, preferences.avoids.length * 520);
  delay += Math.round(Math.random() * 1200);
  return Math.max(5000, Math.min(30000, delay));
}

function renderGeneratingState(preferences, delay) {
  const selected = preferences.basis.map((basis) => basisLabels[basis]).join("、") || "基础条件";
  const steps = [
    `合参${selected}`,
    preferences.basis.includes("bazi") ? "推演生辰八字与五行偏弱" : "",
    preferences.basis.includes("yijing") ? "校验周易卦象与名义" : "",
    preferences.generationChar ? "校对家族字辈位置" : "",
    preferences.likes.length || preferences.avoids.length ? "筛选喜欢字与忌用字" : "",
    preferences.region !== "普通话优先" ? "检查地区连读提醒" : ""
  ].filter(Boolean);

  resultsSection.setAttribute("aria-busy", "true");
  resultsSection.innerHTML = `
    <div class="thinking-card">
      <div class="thinking-mark" aria-hidden="true"></div>
      <strong>正在推演名字</strong>
      <span>${steps.join(" · ")}</span>
      <small>约 ${Math.ceil(delay / 1000)} 秒后生成候选</small>
    </div>
  `;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setGeneratingState(active, preferences = null, delay = 0) {
  isGenerating = active;
  generateBtn.disabled = active;
  resetPreferencesBtn.disabled = active;
  document.body.classList.toggle("is-generating", active);

  if (active && preferences) {
    generateBtn.textContent = "正在推演...";
    renderGeneratingState(preferences, delay);
    return;
  }

  resultsSection.removeAttribute("aria-busy");
  updateBottomAction(Boolean(lockedPreferences));
}

function getNameChars(item) {
  return [...(item.displayGiven || item.given || "")];
}

function companionChar(item, preferences) {
  const chars = getNameChars(item);
  if (!preferences.generationChar) return "";
  return chars.find((char) => char !== preferences.generationChar) || chars[0] || "";
}

function canUseCandidate(candidate, selected, preferences, level) {
  if (!level) return true;

  const chars = getNameChars(candidate);
  const first = chars[0] || "";
  const last = chars[chars.length - 1] || "";

  return !selected.some((item) => {
    const itemChars = getNameChars(item);
    if (preferences.generationChar) {
      return companionChar(item, preferences) === companionChar(candidate, preferences);
    }

    if (level >= 2 && itemChars[itemChars.length - 1] === last) return true;
    return itemChars[0] === first;
  });
}

function selectDiverseResults(items, preferences, size) {
  if (items.length <= size) return items;

  let pool = items.filter((item) => !shownResultNames.has(item.fullName));
  if (pool.length < size) {
    shownResultNames.clear();
    pool = items;
  }

  const ranked = pool
    .map((item) => ({
      ...item,
      pickScore: item.score + Math.random() * 24 + Math.random() * 8
    }))
    .sort((a, b) => b.pickScore - a.pickScore);

  const selected = [];
  [2, 1, 0].forEach((level) => {
    ranked.forEach((item) => {
      if (selected.length >= size) return;
      if (selected.some((selectedItem) => selectedItem.fullName === item.fullName)) return;
      if (!canUseCandidate(item, selected, preferences, level)) return;
      selected.push(item);
    });
  });

  selected.forEach((item) => shownResultNames.add(item.fullName));
  return selected.slice(0, size);
}

async function generateNames() {
  if (isGenerating) return;
  const preferences = lockedPreferences ? clonePreferences(lockedPreferences) : readPreferencesFromForm();
  const surname = preferences.surname;

  if (!surname) {
    toast("请先输入姓氏");
    return;
  }

  if (!preferences.basis.length) {
    toast("至少选择一个取名依据");
    return;
  }

  if (preferences.basis.includes("bazi") && !preferences.birthday) {
    toast("选择生辰八字需先填写出生时间");
    return;
  }

  const currentPreferenceKey = preferenceKey(preferences);
  if (currentPreferenceKey !== lastPreferenceKey) {
    resultRound = 0;
    lastPreferenceKey = currentPreferenceKey;
    shownResultNames = new Set();
  }

  const season = preferences.calendarType === "solar" ? birthdaySeason(preferences.birthday) : "";
  const zodiac = preferences.calendarType === "solar" ? birthdayZodiac(preferences.birthday) : "";
  preferences.season = season;
  preferences.zodiac = zodiac;
  preferences.bazi = buildBaziProfile(preferences);

  const wasLocked = Boolean(lockedPreferences);
  if (!lockedPreferences) lockPreferences(preferences);
  else updateBottomAction(true);

  const delay = generationDelayMs(preferences);
  setGeneratingState(true, preferences, delay);

  try {
    await wait(delay);
    const matchedResults = buildGeneratedCandidates(preferences)
      .map((item) => {
        const scored = scoreCandidate(item, preferences);
        return {
          ...item,
          score: scored.score,
          supportReasons: scored.reasons,
          displayGiven: item.given,
          fullName: `${surname}${item.given}`,
          displaySource: sourceForItem(item, preferences),
          season,
          zodiac
        };
      })
      .filter((item) => item.score > 35)
      .sort((a, b) => b.score - a.score);

    lastResults = selectDiverseResults(matchedResults, preferences, 6);
    if (lastResults.length) {
      resultRound += 1;
    } else if (!wasLocked) {
      unlockPreferences();
    }

    renderResults(preferences);
    document.querySelector("#resultsSection").scrollIntoView({ behavior: "smooth", block: "start" });
  } finally {
    setGeneratingState(false);
  }
}

function yijingImagesForItem(item) {
  const elements = item.elements || [item.element];
  const images = [];
  elements.forEach((element) => {
    (yijingImagesByElement[element] || []).forEach((image) => {
      if (!images.some((itemImage) => itemImage.trigram === image.trigram)) images.push(image);
    });
  });
  return images.slice(0, 3);
}

function yijingSupportText(item, preferences) {
  if (!preferences.basis.includes("yijing")) return "";
  const images = yijingImagesForItem(item);
  if (!images.length) return "";
  const imageText = images
    .map((image) => `${image.trigram}卦${image.image}象，取${image.virtue}`)
    .join("；");
  return `周易/易经取象参考${imageText}，与名字寓意、五行气质合参。`;
}

function baziSupportText(item, preferences) {
  if (!preferences.basis.includes("bazi")) return "";
  const profile = preferences.bazi;
  if (!profile) return "";

  const elementText = item.elements?.join("、") || item.element;
  if (profile.mode === "lunar") {
    return `生辰八字按农历“${profile.lunarDisplay}”换算为公历${formatSolarDisplay(profile.solarValue)}后推演：${profile.summary}此名含${elementText}意象，用作民俗参考。`;
  }

  return `生辰八字按公历推演：${profile.summary}此名含${elementText}意象，用作民俗参考。`;
}

function sourceForItem(item, preferences = null) {
  if (preferences?.basis?.includes("classic") && item.literarySource) return item.literarySource;
  return item.displaySource || item.literarySource || item.source;
}

function supportText(item, preferences) {
  const selected = preferences.basis.map((basis) => basisLabels[basis]).join("、");
  const elementText = item.elements?.join("、") || item.element;
  const elementPart = preferences.basis.includes("wuxing")
    ? `五行按${preferences.element === "auto" ? "出生季节与平衡" : `补${preferences.element}`}处理，此名含${elementText}意象。`
    : "";
  const seasonPart = preferences.basis.includes("season") && item.season
    ? `出生时令取${item.season}季气息作参考${item.zodiac ? `，生肖按公历年份粗略取${item.zodiac}作轻量辅助` : ""}。`
    : "";
  const calendarPart = preferences.birthday
    ? preferences.calendarType === "lunar"
      ? `出生时间按农历${preferences.lunarBirthday}记录，已换算为公历${formatSolarDisplay(preferences.birthday)}。`
      : `出生时间按公历${formatSolarDisplay(preferences.birthday)}记录。`
    : "";
  const generationPart = preferences.generationChar
    ? `家族字辈取“${preferences.generationChar}”，置于${preferences.generationPosition === "first" ? "名首" : "名末"}。`
    : "";
  const dialectPart = preferences.region && preferences.region !== "普通话优先"
    ? `已标记${preferences.region}，建议重点复读全名连读谐音。`
    : "";
  const baziPart = baziSupportText(item, preferences);
  const yijingPart = yijingSupportText(item, preferences);
  return `本次依据包含${selected}。${calendarPart}${generationPart}${dialectPart}${elementPart}${seasonPart}${baziPart}${yijingPart}`;
}

function clearGeneratedResults() {
  lastResults = [];
  resultsSection.innerHTML = `
    <div class="results-empty">
      <strong>生成一组候选名</strong>
      <span>结果会展示名字、出处、五行、寓意、音律和提醒。</span>
    </div>
  `;
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
      const given = item.displayGiven || item.given;
      const tags = [
        `五行 ${item.element}`,
        ...(preferences.basis.includes("bazi") && preferences.bazi?.favorableElements?.length ? [`八字 ${preferences.bazi.favorableElements.join("、")}`] : []),
        ...(preferences.basis.includes("bazi") && !preferences.bazi?.favorableElements?.length ? ["八字参考"] : []),
        ...(preferences.basis.includes("yijing") ? [`周易 ${yijingImagesForItem(item).map((image) => image.trigram).join("、")}`] : []),
        ...(preferences.generationChar ? [`字辈 ${preferences.generationChar}`] : []),
        ...item.tags.slice(0, 3),
        given.length === 1 ? "单字名" : "双字名"
      ];
      return `
        <article class="name-card">
          <div class="name-top">
            <div class="name-title">
              <strong>${renderNameWithPinyin(item)}</strong>
              <span>${item.sourceType === "poetry" ? "诗词意象" : item.sourceType === "classic" ? "典籍取意" : item.sourceType === "season" ? "节气生肖" : "寓意取向"} · ${preferences.region}</span>
            </div>
            <div class="score">${item.score}</div>
          </div>
          <div class="tag-row">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="reason-grid">
            <div class="reason">
              <b>出处</b>
              <p>${sourceForItem(item, preferences)}</p>
            </div>
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
              <p>${item.risk}${given.length === 1 ? " 单字名建议重点看重名风险。" : ""}</p>
            </div>
          </div>
          <div class="card-actions">
            <button type="button" class="outline" data-action="explain" data-name="${escapeAttribute(item.fullName)}">看对比</button>
            <button type="button" class="save-name ${saved ? "saved" : ""}" data-action="save" data-name="${escapeAttribute(item.fullName)}">
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
          <strong>${renderNameWithPinyin(item)}</strong>
          <span>${item.tags.slice(0, 2).join(" · ")} · ${item.element}</span>
        </div>
        <button type="button" data-remove="${escapeAttribute(item.fullName)}">移除</button>
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

resetLunarControls();
syncCalendarFields();
syncChoiceTriggers();
renderFavorites();
