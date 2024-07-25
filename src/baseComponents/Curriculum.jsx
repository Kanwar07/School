import React from "react";
import { motion } from "framer-motion";

function Curriculum({ curriculum }) {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="flex flex-col justify-start w-full"
    >
      {curriculum.map((level) => (
        <div key={level.id} className="flex flex-row mb-10">
          <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[28px] mr-10"
          >
            {level.name}
          </motion.h2>
          {level.id !== 3 ? (
            <ul className="flex flex-row">
              {level.subjects.map((subject, index) => (
                <motion.li
                  variants={itemVariants}
                  key={index}
                  className="border py-3 px-6 border-1 rounded-xl mx-2 h-fit backdrop-blur-sm"
                >
                  {subject}
                </motion.li>
              ))}
            </ul>
          ) : (
            level.subjects.map((stream, index) => {
              const streamKey = Object.keys(stream)[0];
              return (
                <div key={index} className="flex flex-row mr-10 w-full">
                  <motion.h3
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    {streamKey.charAt(0).toUpperCase() + streamKey.slice(1)}
                  </motion.h3>
                  <ul className="flex flex-row flex-wrap">
                    {stream[streamKey].map((subject, subIndex) => (
                      <motion.li
                        variants={itemVariants}
                        key={subIndex}
                        className="border py-3 px-6 border-1 rounded-xl mx-2 h-fit backdrop-blur-sm m-1"
                      >
                        {subject}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default Curriculum;
