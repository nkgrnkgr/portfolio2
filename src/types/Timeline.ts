export type Timeline = {
  date: string;
  title: string;
  category: TimelineCategory;
  content: React.ReactNode;
};

export type TimelineRawData = {
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
