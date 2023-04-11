import { extendTheme } from "@chakra-ui/react";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ["latin"],
});

export const theme = extendTheme({
  fonts: {
    body: `${zenKakuGothicNew.style.fontFamily}, -apple-system, BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  colors: {
    brand: {
      100: "#FEC600",
      200: "#0038FE",
    },
  },
});
