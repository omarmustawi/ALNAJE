import { IsOpenContactProvider } from "@/context/IsOpenContact";
import { WindowSizeProvider } from "@/context/WindowWidthContext";
import { ModalProvider } from "@/context/useModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <IsOpenContactProvider>
        <WindowSizeProvider>
          <Component {...pageProps} />
        </WindowSizeProvider>
      </IsOpenContactProvider>
    </ModalProvider>
  );
}
