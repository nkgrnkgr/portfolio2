import { Timeline } from "@/types/Timeline";
import { Box, Flex, Text } from "@chakra-ui/react";

type Content = Record<number, Timeline[]>;

type Props = {
  timelineItems: Timeline[];
};

export const UserTimeline: React.FC<Props> = ({ timelineItems }) => {
  const content = convertToContent(timelineItems);
  return (
    <Box>
      {Object.entries(content)
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
                      background: "#000",
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
                      backgroundColor: "#000",
                    }}
                  ></Box>
                  <Box>{item.title}</Box>
                  <Box>{item.content}</Box>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};

const convertToContent = (timelineItems: Timeline[]) =>
  timelineItems.reduce<Content>((accumulator, currentValue) => {
    const year = currentValue.date.split("-")[0];
    const list = accumulator[Number(year)];
    accumulator[Number(year)] = list ? [...list, currentValue] : [currentValue];
    return accumulator;
  }, {});
