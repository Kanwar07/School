import React from "react";

function CouncilCard({ name, position, grade, imageurl }) {
  return (
    <>
      <div className="flex flex-row items-center gap-4 mb-10">
        <img src={imageurl} alt={name} className="size-28 rounded-lg" />
        <div>
          <div className="text-[26px]">{name}</div>
          <div>{position}</div>
          <div>{grade}</div>
        </div>
      </div>
    </>
  );
}

export default CouncilCard;
