import Marquee from "react-fast-marquee";
import { FaTwitter } from "react-icons/fa";
import { wallOfLoveTweets } from "./data.js";

const WallOfLove = () => (
  <div className="wall-of-love-container">
    <Marquee pauseOnHover speed={40} gradient={false}>
      {wallOfLoveTweets.map((tweet, i) => (
        <div key={i} className="tweet-card">
          <FaTwitter className="mr-3 text-4xl text-blue-400" />
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
