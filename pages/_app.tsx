import "@/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Volvo Cars Sweden</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
