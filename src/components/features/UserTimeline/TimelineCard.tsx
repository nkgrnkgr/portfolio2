import { TimelineRawData } from "@/types/Timeline";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  rowData: TimelineRawData;
};

export const TimelineCard: React.FC<Props> = ({ rowData }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={rowData.imageUrl} alt={rowData.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text fontFamily="Helvetica">{rowData.date}</Text>{" "}
        </Stack>
      </CardBody>
    </Card>
  );
};
