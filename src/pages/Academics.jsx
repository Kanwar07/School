import React from "react";
import Curriculum from "../baseComponents/Curriculum";
import school from "../assets/School.png";
import { motion } from "framer-motion";

function Academics() {
  const curriculum = [
    {
      id: 1,
      name: "Primary (Grades 1-5)",
      subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Art",
        "Physical Education",
      ],
    },
    {
      id: 2,
      name: "Secondary (Grades 6-10)",
      subjects: [
        "English",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies",
        "Computer Science",
        "Physical Education",
        "Art",
      ],
    },
    {
      id: 3,
      name: "Senior Secondary (Grades 11-12)",
      subjects: [
        {
          scienceStream: [
            "Physics",
            "Chemistry",
            "Biology",
            "Mathematics",
            "Computer Science",
            "English",
          ],
        },
        {
          commerceStream: [
            "Accountancy",
            "Business Studies",
            "Economics",
            "Mathematics",
            "English",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <section>
        <div
          className="relative w-full h-screen flex justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${school})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute flex flex-col items-center text-[#ffffff] px-[10%] w-full">
            <div className="w-full">
              <Curriculum curriculum={curriculum} />
            </div>
            <div className="flex flex-row w-full justify-between items-center mb-5">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-[30px]"
              >
                Teaching Methodologies:
              </motion.h1>
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="text-[20px]"
              >
                "We use a blend of traditional and modern teaching techniques to
                cater to different learning styles"
              </motion.p>
            </div>
            <div className="flex flex-row w-full justify-between items-center mb-5">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-[30px]"
              >
                Educational Resources:
              </motion.h1>
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="text-[20px]"
              >
                Digital classrooms, interactive learning modules, and access to
                online educational platforms.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Academics;
