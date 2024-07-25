import React from "react";
import school from "../assets/School.png";

function HomePage() {
  return (
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
          <h1 className="text-[40px] mb-10">Springdale Public School</h1>
          <p className="text-[20px]">
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
