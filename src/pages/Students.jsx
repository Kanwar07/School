import React from "react";
import CouncilCard from "../baseComponents/CouncilCard";
import AchievementsCard from "../baseComponents/AchievementsCard";
import ActivitiesCard from "../baseComponents/ActivitiesCard";
import school from "../assets/School.png";
import award from "../assets/award.png";
import goldmedal from "../assets/goldmedal.png";
import robot from "../assets/robot.png";
import robotic from "../assets/robotic.png";
import { motion } from "framer-motion";

function Students() {
  const activities = [
    { id: 1, item: "Music" },
    { id: 2, item: "Dance" },
    { id: 3, item: "Drama" },
    { id: 4, item: "Art" },
    { id: 5, item: "Sports" },
    { id: 6, item: "Robotics" },
    { id: 7, item: "Debate Club" },
    { id: 8, item: "Science Club" },
    { id: 9, item: "Literary Society" },
    { id: 10, item: "Environmental Club" },
    { id: 11, item: "Astronomy Club" },
    { id: 12, item: "Coding Club" },
  ];

  const achievements = [
    {
      id: 1,
      name: "John Smith",
      achievement: "National Level Math Olympiad Winner",
      icon: award,
      imageurl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Lee",
      achievement: "Gold Medalist in State Swimming Championship",
      icon: goldmedal,
      imageurl: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      id: 3,
      name: "Tech Innovators Club",
      achievement: "Winners of Inter-School Robotics Competition",
      icon: robot,
      imageurl: robotic,
    },
  ];

  const council = [
    {
      id: 1,
      name: "Amy Parker",
      position: "President",
      grade: "Grade 12",
      imageurl: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      position: "Vice President",
      grade: "Grade 11",
      imageurl: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
      id: 3,
      name: "Lisa Wong",
      position: "Secretary",
      grade: "Grade 10",
      imageurl: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];
  return (
    <>
      <section>
        <div
          className="relative w-full h-screen flex py-32 px-[10%]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${school})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute gap-4 flex flex-col items-start text-[#ffffff]"
          >
            <h1 className="text-[40px]">Life at Springdale</h1>
            <div className="grid grid-cols-3 gap-4 w-full">
              {council.map((student) => {
                const { id, name, position, grade, imageurl } = student;
                return (
                  <div key={id}>
                    <CouncilCard {...{ name, position, grade, imageurl }} />
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((item) => {
                const { id, name, achievement, icon, imageurl } = item;
                return (
                  <div key={id}>
                    <AchievementsCard
                      {...{ name, achievement, icon, imageurl }}
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <div className="text-[40px] mb-5">Activities</div>
              <div className="grid grid-cols-5 gap-4">
                {activities.map((student) => {
                  const { id, item } = student;
                  return (
                    <div key={id}>
                      <ActivitiesCard {...{ item }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Students;
