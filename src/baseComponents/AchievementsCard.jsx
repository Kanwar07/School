import React from "react";

function AchievementsCard({ name, achievement, icon, imageurl }) {
  return (
    <>
      <div className="mb-5 flex flex-col items-start justify-start">
        <div className="flex flex-row gap-4 items-center mb-5">
          <img src={imageurl} alt={name} className="size-20 rounded-lg" />
          <div className="text-[32px]">{name}</div>
        </div>
        <img src={icon} alt={name} className="size-10" />
        <div>{achievement}</div>
      </div>
    </>
  );
}

export default AchievementsCard;
