import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import PleaseSignIn from "@/components/PleaseSignIn";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </SignedIn>
      <SignedOut>
        <PleaseSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
