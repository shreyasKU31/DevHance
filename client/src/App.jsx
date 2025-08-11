import { useUser } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  const { isSignedIn } = useUser();
  return (
    <>
      <div>
        <nav className="text-4xl">This is navbar</nav>
        {isSignedIn ? <Dashboard /> : <LandingPage />}
      </div>
    </>
  );
}

export default App;
