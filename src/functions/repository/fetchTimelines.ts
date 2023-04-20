import { TIMELINE_CATEGORY, TimelineContent } from "@/types/Timeline";

const TIMELINE_CONTENTS: TimelineContent[] = [
  {
    date: "2023-04-20",
    title: "",
    imageUrl:
      "https://cdn-ak.f.st-hatena.com/images/fotolife/c/cybozuinsideout/20230419/20230419100229.png",
    linkUrl: "https://blog.cybozu.io/entry/2023/04/20/190000",
    category: TIMELINE_CATEGORY.ARTICLE,
    description: "kintone アプリ作成フォームの UI の状態管理のライブラリ選定",
  },
  {
    date: "2022-12-16",
    title: "",
    imageUrl:
      "https://res.cloudinary.com/zenn/image/upload/s--7Vi0QWoV--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%259D%25E3%2582%25B1%25E3%2583%25A2%25E3%2583%25B3SV%25E3%2581%25AE%25E3%2583%2580%25E3%2583%25A1%25E3%2583%25BC%25E3%2582%25B8%25E8%25A8%2588%25E7%25AE%2597%25E3%2582%25A2%25E3%2583%2597%25E3%2583%25AA%25E3%2582%2592%25E6%2594%25AF%25E3%2581%2588%25E3%2582%258B%25E6%258A%2580%25E8%25A1%2593%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:nokogiri%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2k2ZV9uT0lXWkJuazVRMTcyNy1ReFNOLUhEX010bk9ZRjI3NTZrVVE9czI1MC1j%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png",
    linkUrl: "https://zenn.dev/nokogiri/articles/123c0513504060",
    category: TIMELINE_CATEGORY.ZENN,
    description: "ポケモンSVのダメージ計算アプリを支える技術",
  },
  {
    date: "2022-11-27",
    title: "ポケモンSVのダメージ計算アプリ リリース",
    imageUrl:
      "https://i.ytimg.com/vi/LHZH4zSQh4E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCFCOoXeNkJJJk8ROGDhe3D6XeMJA",
    linkUrl: "https://youtu.be/LHZH4zSQh4E",
    category: TIMELINE_CATEGORY.RELEASE,
    description: "",
  },
  {
    date: "2021-11-06",
    title: "人事評価SaaS fair リリース",
    imageUrl: "https://fair.ne.jp/wp-content/uploads/2021/10/kv-img.jpeg",
    linkUrl: "https://fair.ne.jp/",
    category: TIMELINE_CATEGORY.RELEASE,
    description: "",
  },
  {
    date: "2020-02-04",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/b3527a4ee0b54f5d9f1b5566957acf6f/slide_0.jpg?14804822",
    linkUrl:
      "https://speakerdeck.com/undefined_name/mopupuro-at-kintonekai-fa-timu",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2020-01-27",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/8cba982466a54d58b967148030a9b59d/slide_0.jpg?14729734",
    linkUrl:
      "https://speakerdeck.com/undefined_name/mian-qiang-hui-dedeng-tan-zhe-ni-zhi-wen-siduraike-ti-wojie-jue-suru-sabisuworirisusimasita",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2020-01-22",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/c4de7fe7872b496f8fdf58f6e5d31474/slide_0.jpg?14703199",
    linkUrl: "https://speakerdeck.com/undefined_name/usefull-gitlens",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2019-10-25",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/2f7e34d2a13e4a3f8bac5035d5408c76/slide_0.jpg?13977892",
    linkUrl:
      "https://speakerdeck.com/undefined_name/trying-state-manegemant-without-redux-updated",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2019-06-26",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/4b1adbca51a047bab5ee8526eaa5b7d7/slide_0.jpg?12891576",
    linkUrl:
      "https://speakerdeck.com/undefined_name/5fen-teshao-jie-suruensiniafalsezhi-de-sheng-chan-shu",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2019-05-23",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/60d9444ece784968a74e7ab860d39f17/slide_0.jpg?12162395",
    linkUrl:
      "https://speakerdeck.com/undefined_name/does-react-redux-firebase-spark-joy-6bb3b8fc-1e75-4c00-a9b8-78ad08546cf1",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2019-01-16",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/f9167c7fe58140c8a87da9b5f170fdee/slide_0.jpg?11554946",
    linkUrl:
      "https://speakerdeck.com/undefined_name/kotlin-plus-springboottesahisuwozuo-tutekotlinwohao-kininatutafalsetesofalseliang-sawoshao-jie-suru",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
  {
    date: "2018-11-25",
    title: "",
    imageUrl:
      "https://files.speakerdeck.com/presentations/15d44a279b81497ca728f37921d59725/slide_0.jpg?11304601",
    linkUrl:
      "https://speakerdeck.com/undefined_name/xiao-sakuhasimerusukuramukai-fa",
    category: TIMELINE_CATEGORY.SPEAKER_DECK,
    description: "",
  },
];

export const fetchTimelineContents = async () => {
  return TIMELINE_CONTENTS;
};
