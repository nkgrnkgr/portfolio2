import { CATEGORY_NAME, TimelineContent } from "@/types/Timeline";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TimelineCard } from "./TimelineCard";

type Content = Record<number, TimelineContent[]>;

type Props = {
  timelineContents: TimelineContent[];
};

export const UserTimeline: React.FC<Props> = ({ timelineContents }) => {
  const converted = convert(timelineContents);
  return (
    <Box>
      {Object.entries(converted)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([key, value]) => (
          <Flex key={key}>
            <Text fontWeight="extrabold" fontFamily="Helvetica" pr="4">
              {key}
            </Text>
            <Flex direction="column">
              {value.map((item) => (
                <Flex
                  direction="column"
                  key={item.title}
                  sx={{
                    position: "relative",
                    pl: 4,
                    _before: {
                      content: '""',
                      position: "absolute",
                      left: "-2px",
                      top: "10px",
                      bottom: "0",
                      width: "2px",
                      backgroundColor: "#CBD5E0",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center",
                      border: "4px solid #fff",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "-9px",
                      backgroundColor: "#CBD5E0",
                    }}
                  ></Box>
                  <Flex mb={2}>
                    {CATEGORY_NAME[item.category]}
                    <Text ml={2} color="gray.500">
                      {createDateText(item.date)}
                    </Text>
                  </Flex>
                  <Box mb={10}>
                    <TimelineCard content={item} />
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};

const convert = (timelineItems: TimelineContent[]) =>
  timelineItems.reduce<Content>((accumulator, currentValue) => {
    const year = currentValue.date.split("-")[0];
    const list = accumulator[Number(year)];
    accumulator[Number(year)] = list ? [...list, currentValue] : [currentValue];
    accumulator[Number(year)].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() // 日付の降順にソート
    );
    return accumulator;
  }, {});

const createDateText = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};
