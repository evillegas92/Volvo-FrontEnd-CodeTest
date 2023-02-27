import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon-16x16.v2.svg" />
        <meta
          name="description"
          content="Välkommen till Volvo Cars Sverige. Ta reda på mer om våra nya och begagnade bilar. Utforska och välj din favorit Volvo SUV, Sedan eller Kombi idag."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
