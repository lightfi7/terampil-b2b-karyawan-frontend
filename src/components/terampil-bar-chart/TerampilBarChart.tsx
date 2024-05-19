import { CSSProperties } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";
import { TerampilLineBarContainer } from "./styled";

const getPath = (x: number, y: number, width: number, height: number) => `M${x} ${y} H${x + width} V${y + height} H${x} L${x} ${y}`;

const CustomRectBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  const desired_width = 30;
  const calculated_x = x + ((width - desired_width) / 2)

  return <path d={getPath(calculated_x, y, desired_width, height)} stroke="none" fill={fill} />;
};

export interface TerampilBarChartProps {
  containerStyle?: CSSProperties
  data: {
    label: string
    cost: number
    benefit: number
  }[]
}

export default function TerampilBarChart(props: TerampilBarChartProps) {
  return (
    <TerampilLineBarContainer style={props.containerStyle}>
      <ResponsiveContainer 
        width={'100%'}
        height={'100%'}>
        <BarChart 
          data={props.data}>
          <XAxis dataKey={'label'} />
          <YAxis />
          <Bar 
            width={25}
            dataKey={'cost'}
            fill={'#F18F01'} />
          <Bar 
            style={{
              width: 25
            }}
            width={25}
            dataKey={'benefit'}
            fill={'#29C56A'} />
        </BarChart>
      </ResponsiveContainer>
    </TerampilLineBarContainer>
  );
}
