import { Icon, Text } from "@chakra-ui/react";
import { FaSpeakerDeck } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { SiZenn } from "react-icons/si";

export type TimelineContent = {
  date: string;
  category: TimelineCategory;
  title: string;
  imageUrl: string;
  linkUrl: string;
  description: string;
};

export const TIMELINE_CATEGORY = {
  RELEASE: "RELEASE",
  ZENN: "ZENN",
  SPEAKER_DECK: "SPEAKER_DECK",
  ARTICLE: "ARTICLE",
} as const;

export type TimelineCategory = TypeOfValues<typeof TIMELINE_CATEGORY>;

export const CATEGORY_ICON: Record<TimelineCategory, React.ReactNode> = {
  [TIMELINE_CATEGORY.RELEASE]: "🎉",
  [TIMELINE_CATEGORY.ZENN]: <Icon as={SiZenn} color="#3EA8FF" />,
  [TIMELINE_CATEGORY.SPEAKER_DECK]: <Icon color="#009287" as={FaSpeakerDeck} />,
  [TIMELINE_CATEGORY.ARTICLE]: <Icon as={MdArticle} />,
} as const;

export const CATEGORY_NAME: Record<TimelineCategory, React.ReactNode> = {
  [TIMELINE_CATEGORY.RELEASE]: <Text>🎉Published🎉</Text>,
  [TIMELINE_CATEGORY.ZENN]: (
    <Text color="gray.500">Published a post on zenn.dev</Text>
  ),
  [TIMELINE_CATEGORY.SPEAKER_DECK]: (
    <Text color="gray.500">Published a slide on speakerdeck.com</Text>
  ),
  [TIMELINE_CATEGORY.ARTICLE]: <Text color="gray.500">Published a post</Text>,
} as const;
