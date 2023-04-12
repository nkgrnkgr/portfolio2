import { Center } from "@chakra-ui/react";

export const ContentWrapper: React.FC<{
  children: React.ReactNode;
  background?: string;
}> = ({ children, background = "#fff" }) => (
  <Center
    background={background}
    border="1px solid"
    borderColor="gray.200"
    sx={{
      borderRadius: "10px 10px",
      padding: 3,
      height: "100%",
    }}
  >
    {children}
  </Center>
);
