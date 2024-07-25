import React from "react";
import school from "../assets/School.png";
import { motion } from "framer-motion";

function Admissions() {
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
          <div className="absolute flex flex-row gap-8 items-start mt-[25%] h-full text-white px-[10%] w-full">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="flex flex-col justify-center items-center flex-1 gap-8"
            >
              <h1 className="text-[32px]">Process</h1>
              <ul className="border border-2 px-8 py-4 rounded-2xl backdrop-blur-sm space-y-4">
                <li>Admission forms are available for download.</li>
                <li>
                  Submit the completed form along with required documents at the
                  school office.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              className="flex flex-col justify-center items-center flex-1 gap-8"
            >
              <h1 className="text-[32px]">Criteria</h1>
              <ul className="border border-2 px-8 py-4 rounded-2xl backdrop-blur-sm space-y-4">
                <li>Admission is based on merit and availability of seats.</li>
                <li>Entrance tests may be conducted for certain grades.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
              className="flex flex-col justify-center items-center flex-1 gap-8"
            >
              <h1 className="text-[32px]">Important Dates</h1>
              <ul className="border border-2 px-8 py-4 rounded-2xl backdrop-blur-sm space-y-4">
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
                <li>Announcement of Results: April 30th</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admissions;
