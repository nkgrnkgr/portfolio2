import { TIMELINE_CATEGORY, TimelineContent } from "@/types/Timeline";

const TIMELINE_CONTENTS: TimelineContent[] = [
  {
    date: "2022-12-16",
    title: "ポケモンSVのダメージ計算アプリを支える技術",
    imageUrl:
      "https://res.cloudinary.com/zenn/image/upload/s--7Vi0QWoV--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%259D%25E3%2582%25B1%25E3%2583%25A2%25E3%2583%25B3SV%25E3%2581%25AE%25E3%2583%2580%25E3%2583%25A1%25E3%2583%25BC%25E3%2582%25B8%25E8%25A8%2588%25E7%25AE%2597%25E3%2582%25A2%25E3%2583%2597%25E3%2583%25AA%25E3%2582%2592%25E6%2594%25AF%25E3%2581%2588%25E3%2582%258B%25E6%258A%2580%25E8%25A1%2593%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:nokogiri%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2k2ZV9uT0lXWkJuazVRMTcyNy1ReFNOLUhEX010bk9ZRjI3NTZrVVE9czI1MC1j%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png",
    linkUrl: "https://zenn.dev/nokogiri/articles/123c0513504060",
    category: TIMELINE_CATEGORY.ZENN,
    description: "",
  },
];

export const fetchTimelineContents = async () => {
  return TIMELINE_CONTENTS;
};
