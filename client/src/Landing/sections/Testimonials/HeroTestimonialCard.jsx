import { motion } from "framer-motion";

const HeroTestimonialCard = ({
  quote,
  author,
  title,
  headshot,
  CompanyIcon,
}) => (
  <motion.div
    className="glass-pro flex h-full flex-col justify-between p-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div>
      <p className="mb-6 text-xl leading-relaxed text-gray-300">
        "
        {quote.replace(
          `a total game-changer,
          ${(
            <span className="font-semibold text-[#46C4FA]">
              a total game-changer
            </span>
          )}`
        )}
        "
      </p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={headshot}
          alt={author}
          className="mr-4 h-14 w-14 rounded-full border-2 border-white/30"
        />
        <div>
          <p className="font-['Syne'] text-lg font-bold text-white">{author}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
      <CompanyIcon className="text-4xl text-white/50" width={36} height={36} />
    </div>
  </motion.div>
);

export default HeroTestimonialCard;
