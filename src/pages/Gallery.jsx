import React from "react";
import school from "../assets/School.png";
import { motion } from "framer-motion";

function Gallery() {
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
          <div className="absolute flex flex-col items-center text-[#ffffff]">
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-[40px] mb-10"
            >
              Coming Soon
            </motion.h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
