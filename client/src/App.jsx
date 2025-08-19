import { useEffect, useState } from "react";
import LandingPage from "./Landing/landingPage/LandingPage";
import Loader from "./components/common/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This function will be called when the window is fully loaded
    const handleLoad = () => {
      // A small delay to make the transition feel smoother
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Otherwise, add an event listener for the 'load' event
      window.addEventListener("load", handleLoad);

      // Cleanup the event listener
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return <>{isLoading ? <Loader /> : <LandingPage />}</>;
}

export default App;
