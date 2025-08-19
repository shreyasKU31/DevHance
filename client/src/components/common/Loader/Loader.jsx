// src/components/Loader.jsx

import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <PacmanLoader color="#46c4fa" />
    </div>
  );
};

export default Loader;
