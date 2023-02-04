import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Unbounded&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Script
          id="kute-cdn"
          src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
