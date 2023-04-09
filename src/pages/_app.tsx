import type { AppProps } from "next/app";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const ZenKakuGothicNew_normal = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ["cyrillic"],
});
const ZenKakuGothicNew_bold = Zen_Kaku_Gothic_New({
  weight: "700",
  subsets: ["cyrillic"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ZenKakuGothicNew_normal.style.fontFamily},
            ${ZenKakuGothicNew_bold.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
