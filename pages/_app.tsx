import "@/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StyleProvider } from "vcc-ui";
import { ThemePicker } from "vcc-ui/dist/styling/theme-picker";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Head>
          <title>Volvo Cars Sweden</title>
        </Head>
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}
