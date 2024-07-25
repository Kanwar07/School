import React from "react";

function ActivitiesCard({ item }) {
  return (
    <>
      <div className="text-[16px] font-bold border py-3 px-6 border-1 rounded-xl mx-2 h-fit backdrop-blur-sm m-1 w-fit">
        {item}
      </div>
    </>
  );
}

export default ActivitiesCard;
