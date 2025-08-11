import { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

function ProfilePage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const [authToken, setAuthToken] = useState("");

  const handleGetToken = async () => {
    try {
      // getToken() is an async function
      const token = await getToken();

      // Print the token to the browser's console
      console.log("Clerk Auth Token:", token);

      // Also set it in state to display it on the screen
      setAuthToken(token);
    } catch (error) {
      console.error("Error fetching auth token:", error);
    }
  };
  if (!isLoaded) {
    // Handle loading state
    return <div>Loading....</div>;
  }
  if (user) {
    console.log(user);
  }
  if (!isSignedIn) {
    // Handle signed out state
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div>
      <button onClick={handleGetToken}>Print Auth Token to Console</button>

      {authToken && (
        <div>
          <h3>Your Token:</h3>
          <pre>{authToken}</pre>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
