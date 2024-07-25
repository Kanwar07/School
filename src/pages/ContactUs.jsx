import React from "react";
import school from "../assets/School.png";
import ContactForm from "../baseComponents/ContactForm";
import { motion } from "framer-motion";

function ContactUs() {
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
          <div className="absolute flex flex-row gap-4 justify-center items-center text-[#ffffff] px-[10%]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="flex flex-col gap-4"
            >
              <div className="text-[32px]">Springdale Public School</div>
              <div>
                <p>
                  <span className="font-bold">Address: </span>
                  Springdale Public School, 123 Education Lane, Cityville,
                  State, ZIP Code
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Phone: </span>+1 (123) 456-7890
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Email: </span>info@springdale.edu
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
