import { ABOUT_EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const AboutExperience = () => {
  return (
    <div className="mt-16">
      <h2 className="mb-10 text-3xl font-semibold">
        Professional <span className="text-neutral-500">Experience</span>
      </h2>

      <div className="space-y-6">
        {ABOUT_EXPERIENCE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col gap-2 border-b border-neutral-800 pb-6 md:flex-row md:items-center md:justify-between"
          >
            <p className="font-medium">{item.role}</p>

            <p className="text-neutral-400">{item.company}</p>

            <p className="text-sm text-neutral-500">{item.duration}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutExperience;
