import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

export const Meta: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:description" content={description}></meta>
      <meta name="thumbnail" content="https://www.nkgr.dev/ogimage.png"></meta>
      <meta
        property="og:image"
        content="https://www.nkgr.dev/ogimage.png"
      ></meta>
      <meta property="og:image:alt" content="logo"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.nkgr.dev"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@nkgrnkgr"></meta>

      <meta name="application-name" content="nkgr.dev" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="nkgr.dev" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#fff" />

      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="apple-touch-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};
