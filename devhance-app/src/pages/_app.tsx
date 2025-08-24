import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import PleaseSignIn from "@/components/PleaseSignIn";
import Welcome from "@/components/root/Welcome";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Navbar />
        <Welcome />
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
