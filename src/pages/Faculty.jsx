import React from "react";
import FacultyCard from "../baseComponents/FacultyCard";
import school from "../assets/School.png";
import { motion } from "framer-motion";

function Faculty() {
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

  const list = [
    {
      id: 1,
      name: "John Doe",
      designation: "Principal",
      qualification: "M.Ed",
      experience: "20 years of experience in educational administration.",
      image: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
      image: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      name: "Emily Johnson",
      designation: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years of teaching experience",
      image: "https://reqres.in/img/faces/12-image.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      designation: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
      image: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 5,
      name: "Sophia Davis",
      designation: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
      image: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 6,
      name: "David Wilson",
      designation: " Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
      image: "https://reqres.in/img/faces/9-image.jpg",
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="absolute grid grid-cols-3 gap-4 flex justify-center items-center"
          >
            {list.map((faculty) => {
              const {
                id,
                name,
                designation,
                qualification,
                experience,
                image,
              } = faculty;
              return (
                <motion.div variants={itemVariants} key={id}>
                  <FacultyCard
                    {...{
                      name,
                      designation,
                      qualification,
                      experience,
                      image,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Faculty;
