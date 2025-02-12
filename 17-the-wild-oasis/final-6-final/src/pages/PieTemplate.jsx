import ButtonIcon from "../ui/ButtonIcon";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
} from "recharts";
import TemplateContainer from "../ui/TemplateContainer";
import Heading from "../ui/Heading";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Row from "../ui/Row";
import CardList from "../ui/CardList";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";

const data01 = [
  { name: "0 day", value: 90 },
  { name: "46-90 days", value: 25 },
  { name: "121-150 days", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Bullet = ({ backgroundColor, size }) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};

const CustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="LegendList">
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>
          <div className="BulletLabel">
            <Bullet backgroundColor={entry.payload.fill} size="10px" />
            <div className="BulletLabelText">{entry.value}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CustomLabel = ({ viewBox, labelText, value }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="15"
      >
        {labelText}
      </text>
      <text
        x={cx}
        y={cy + 20}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#0088FE"
        fontSize="26"
        fontWeight="600"
      >
        {value}
      </text>
    </g>
  );
};

function PieDiagram() {
  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer style={{ display: "flex" }}>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx="40%"
            cy="50%"
            paddingAngle={3}
            innerRadius={80}
            outerRadius={100}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            width="30%"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
const PieCardList = [
  { title: "Current", amount: "$4,508,758.48" },
  { title: "Overdue", amount: "$28,413,776.12" },
];

function PieMain() {
  return (
    <>
      <div className="main-content" style={{ padding: "3rem" }}>
        <Row type="horizontal">
          <Heading as="h2">Account Receivable</Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        <PieDiagram />
        <CardList cardList={PieCardList} />
      </div>
    </>
  );
}

function PieSidebar() {
  return (
    <Form
      style={{
        backgroundColor: "var(--color-grey-0)",
        boxShadow: "black 1px 1px 1px 1px",
      }}
    >
      <FormRow label="Report Title">
        <Input type="number" id="min-nights" />
      </FormRow>

      <FormRow label="Ledger code">
        <Input type="number" id="max-nights" />
      </FormRow>

      <FormRow label="Account period">
        <Input type="number" id="max-guests" />
      </FormRow>

      <FormRow label="Cut off day">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <FormRow label="Chart type">
        <Input type="number" id="breakfast-price" />
      </FormRow>
    </Form>
  );
}

export default function PieTemplate() {
  return <TemplateContainer main={<PieMain />} side={<PieSidebar />} />;
}
