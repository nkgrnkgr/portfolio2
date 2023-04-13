import { TimelineContent } from "@/types/Timeline";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  content: TimelineContent;
};

export const TimelineCard: React.FC<Props> = ({ content }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={content.imageUrl} alt={content.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text fontFamily="Helvetica">{content.date}</Text>{" "}
        </Stack>
      </CardBody>
    </Card>
  );
};
