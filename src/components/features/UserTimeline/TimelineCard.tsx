import { ExternalLink } from "@/components/shared/ExternalLink";
import { CATEGORY_ICON, TimelineContent } from "@/types/Timeline";
import { Card, CardBody, Flex, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  content: TimelineContent;
};

export const TimelineCard: React.FC<Props> = ({ content }) => {
  return (
    <Card maxW="sm" variant="filled" color="gray.800" bgColor="gray.100">
      <CardBody>
        <ExternalLink href={content.linkUrl}>
          <Image src={content.imageUrl} alt={content.title} borderRadius="lg" />
        </ExternalLink>
        <Stack mt="6" spacing="2">
          <Text>{content.title}</Text>
          <Flex alignItems="center" justifyContent="flex-end" gap={2}>
            {CATEGORY_ICON[content.category]}
            <Text fontFamily="Helvetica">{createDateText(content.date)}</Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

const createDateText = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
