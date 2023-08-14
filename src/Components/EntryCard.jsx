import React from "react";
import { Icon } from "@iconify/react";

function EntryCard({ data }) {
  const { title, icon, color, textColor, border } = data;
  return (
    <div className="flex my-6">
      <div className="w-1/4 lg:w-1/3 relative text-right">
        <div
          className="w-6 h-6 rounded-full absolute flex items-center justify-center text-white -right-2 z-50"
          style={{ background: `${color}`, border:`1px solid ${border? border:''}`}}
        >
          <Icon icon={icon} className="w-[15px]"/>
        </div>
        <h3 className="pr-6 font-medium text-[#ABABAB] text-[12px] lg:text-sm">11:30 AM</h3>
      </div>
      <div className="w-3/4 lg:w-2/3">
        <div className="pl-5">
          <h3 className="font-normal" style={{color:`${textColor? textColor :''}`}}>{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <img src="/Photo.png" />
            <h3 className="text-[#ABABAB] from-neutral-500 text-sm font-medium">
              Sheila O'Riley
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntryCard;
