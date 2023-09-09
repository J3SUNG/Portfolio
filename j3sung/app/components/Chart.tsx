"use client";
import { PieChart } from "react-minimal-pie-chart";

interface propsType {
  ability: number;
  type: number;
}

const Chart = (props: propsType) => {
  let { ability, type } = props;
  let backColor = [
    "",
    "#6C9EFF",
    "#FFB466",
    "#FFEA52",
    "#CB76FF",
    "#71FF87",
    "#51F1FF ",
    "#FF8989",
  ];
  return (
    <div className="-rotate-90 ">
      <PieChart
        data={[
          {
            value: ability * 10,
            color: backColor[1],
            name: "name1",
          },
        ]}
        className="w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] m-[10px] sm:m-[20px] mt-[10px] sm:mt-[40px]"
        reveal={ability * 10} //퍼센트 치수
        lineWidth={14} //도넛 두께
        background="#f3f3f3"
        lengthAngle={360}
        rounded
        // animate
        // animationDuration={1000}
        labelPosition={0}
      />
    </div>
  );
};

export default Chart;
