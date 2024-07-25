import React from "react";

function FacultyCard({ name, designation, qualification, experience, image }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-[#ffffff] mb-10">
        <div>
          <img src={image} alt="faculty" />
        </div>
        <div className="flex flex-row items-center">
          <h1 className="text-[24px] mr-4">{name}</h1>
          <h1 className="text-[16px]">
            {"("}
            {designation}
            {")"}
          </h1>
        </div>
        <p>{qualification}</p>
        <p>{experience}</p>
      </div>
    </>
  );
}

export default FacultyCard;
