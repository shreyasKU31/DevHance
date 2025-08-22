import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
}
