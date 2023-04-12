import { Center } from "@chakra-ui/react";

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Center
    sx={{
      border: "4px solid #000",
      borderRadius: "10px 10px",
      padding: 3,
      height: "100%",
      backgroundColor: "white",
    }}
  >
    {children}
  </Center>
);
