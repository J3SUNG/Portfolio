"use client";
import { PieChart } from "react-minimal-pie-chart";

const Chart = ({ ability }: number) => {
  let backColor = [
    "#89a8ff",
    "#89a8ff",
    "#89a8ff",
    "#89a8ff",
    "#89a8ff",
    "#89a8ff",
    "#89a8ff",
    "#89a8ff ",
    "#89a8ff ",
    "#89a8ff ",
    "#89a8ff ",
  ];
  return (
    <PieChart
      data={[
        {
          value: ability * 10,
          color: backColor[ability],
          name: "name1",
        },
      ]}
      className="w-[200px] h-[200px] m-[10px] mt-[60px]"
      reveal={ability * 10} //퍼센트 치수
      lineWidth={16} //도넛 두께
      background="#f3f3f3"
      lengthAngle={360}
      rounded
      animate
      labelPosition={0}
    />
  );
};

export default Chart;
