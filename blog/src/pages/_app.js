import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="The devhance Logbook"
        description="Insights on design, engineering, and the art of showcasing creative work."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://devhance.com/blog",
          site_name: "The devhance Logbook",
        }}
        twitter={{
          handle: "@devhance",
          site: "@devhance",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
