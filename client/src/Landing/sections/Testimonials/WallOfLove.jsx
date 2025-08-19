import Marquee from "react-fast-marquee";
import { wallOfLoveTweets } from "./data.js";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

const WallOfLove = () => (
  <div className="wall-of-love-container">
    <Marquee pauseOnHover speed={40} gradient={false}>
      {wallOfLoveTweets.map((tweet, i) => (
        <div key={i} className="tweet-card">
          <TwitterLogoIcon
            className="mr-3 text-4xl text-blue-400"
            width={50}
            height={50}
          />
          <div>
            <p className="font-bold text-white">{tweet.handle}</p>
            <p className="text-gray-300">{tweet.text}</p>
          </div>
        </div>
      ))}
    </Marquee>
  </div>
);

export default WallOfLove;
