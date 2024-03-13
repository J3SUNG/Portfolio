"use client";
import { PieChart } from "react-minimal-pie-chart";

interface propsType {
  ability: number;
  type: number;
}

const Chart = (props: propsType) => {
  let { ability, type } = props;
  let backColor = [
    ["#B8CFFF", "#B8CFFF", "#B8CFFF", "#FFB84D", "#FFB84D", "#FFB9B3", "#FFB9B3"],
    ["#9CBDFF", "#9CBDFF", "#9CBDFF", "#FFAC30", "#FFAC30", "#FF9F96", "#FF9F96"],
    ["#6C9EFF", "#6C9EFF", "#6C9EFF", "#FF9900", "#FF9900", "#FF7367", "#FF7367"],
  ];
  return (
    <div className="-rotate-90">
      <PieChart
        data={[
          {
            value: ability * 20,
            color: backColor[ability - 2][type - 1],
            name: "name1",
          },
        ]}
        className={`w-[120px] h-[120px] m-[11px] ${
          ability === 3 ? "opacity-100" : ability === 2 ? "opacity-90" : "opacity-80"
        }`}
        reveal={ability * 20} //퍼센트 치수
        lineWidth={14} //도넛 두께
        background="#f3f3f3"
        lengthAngle={360}
        rounded
        animate
        animationDuration={1000}
        labelPosition={0}
      />
    </div>
  );
};

export default Chart;
