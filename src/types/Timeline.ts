export type TimelineContent = {
  date: string;
  category: TimelineCategory;
  title: string;
  imageUrl: string;
  description: string;
};

export const TIMELINE_CATEGORY = {
  RELEASE: "RELEASE",
  ZENN: "ZENN",
  SPEAKER_DECK: "SPEAKER_DECK",
  BLOG: "BLOG",
} as const;

export type TimelineCategory = TypeOfValues<typeof TIMELINE_CATEGORY>;
