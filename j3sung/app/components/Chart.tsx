"use client";
import { PieChart } from "react-minimal-pie-chart";

interface propsType {
  ability: number;
}

const Chart = (props: propsType) => {
  let { ability } = props;
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
      className="w-[150px] h-[150px] m-[20px] mt-[60px]"
      reveal={ability * 10} //퍼센트 치수
      lineWidth={14} //도넛 두께
      background="#f3f3f3"
      lengthAngle={360}
      rounded
      animate
      animationDuration={1000}
      labelPosition={0}
    />
  );
};

export default Chart;
