import React from "react";

function DateCard({ data }) {
  const { day, date, month, color } = data;
  return (
    <div className="flex my-6">
      <div className="w-1/3 relative text-right">
        <div
          className="w-10 h-10 rounded-md absolute flex items-center justify-center text-white -right-4 z-50"
          style={{ background: `${color}` }}
        >
          {date}
        </div>
        <h3 className="pr-10 font-medium text-black">{day}</h3>
        <h3 className="pr-10 font-medium text-[#ABABAB]">{month}</h3>
      </div>
      <div className="w-2/3 divider"></div>
    </div>
  );
}

export default DateCard;
