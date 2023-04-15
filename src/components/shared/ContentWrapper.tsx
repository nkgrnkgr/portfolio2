import { Center } from "@chakra-ui/react";

export const ContentWrapper: React.FC<{
  children: React.ReactNode;
  background?: string;
}> = ({ children, background = "#000" }) => (
  <Center
    background={background}
    sx={{
      borderRadius: "10px 10px",
      padding: 3,
      height: "100%",
    }}
  >
    {children}
  </Center>
);
