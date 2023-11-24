import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-[1280px] h-[600px] m-auto bg-[#395fd3] rounded-[30px]">
        <svg width={1280} height={600} viewBox="0 0 100 100">
          <text
            fontSize={40}
            color="black"
            stroke="black"
            x={50}
            y={50}
            textAnchor="middle"
            dominantBaseline="central"
            className="font-pre-bold"
          >
            Front End
          </text>
        </svg>
      </div>
    </>
  );
};

export default Header;
