import { Box } from "@chakra-ui/react";

export const Overlay: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        p: "0, 2rem",
        bgColor: "white",
        backgroundImage:
          "radial-gradient(at 44% 0%,rgba(255,184,122,.4) 0px,transparent 50%),radial-gradient(at 80% 0%,rgba(31,221,255,.1) 0px,transparent 50%),radial-gradient(at 80% 50%,rgba(255,133,173,.1) 0px,transparent 50%),radial-gradient(at 0% 100%,rgba(255,181,138,0) 0px,transparent 50%),radial-gradient(at 80% 100%,rgba(107,102,255,0) 0px,transparent 50%),radial-gradient(at 0% 0%,rgba(255,133,167,.25) 0px,transparent 50%)",
      }}
    ></Box>
  );
};
