import ButtonIcon from "../ui/ButtonIcon";
import * as React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  BarChart,
  Bar,
  // CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area
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

const data = [
  {
    month: "Nov 15, 2019",
    Arm1: { val: 4000, desc: "descktop..." },
    Arm2: { val: 2400, desc: "b desc" },
    Arm3: { val: 2400, desc: "c desc" }
  },
  {
    month: "Dec 01, 2019",
    Arm1: { val: 3000, desc: "descktop..." },
    Arm2: { val: 1398, desc: "b desc" },
    Arm3: { val: 2210, desc: "c desc" }
  },
  {
    month: "Dec 15, 2019",
    Arm1: { val: 2000, desc: "descktop..." },
    Arm2: { val: 9800, desc: "b desc" },
    Arm3: { val: 2290, desc: "c desc" }
  },
  {
    month: "Jan 01, 2020",
    Arm1: { val: 2780, desc: "descktop..." },
    Arm2: { val: 3900, desc: "b desc" },
    Arm3: { val: 2000, desc: "c desc" }
  },
  {
    month: "Jan 15, 2020",
    Arm1: { val: 1890, desc: "descktop..." },
    Arm2: { val: 4800, desc: "b desc" },
    Arm3: { val: 2180, desc: "c desc" }
  },
  {
    month: "Feb 01, 2020",
    Arm1: { val: 4000, desc: "descktop..." },
    Arm2: { val: 2400, desc: "b desc" },
    Arm3: { val: 2400, desc: "c desc" }
  }
];

function BarDiagram() {
 return (
   <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={600}
          height={400}
          data={data}
          stackOffset="expand"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="month" />
          <YAxis  />
          <Tooltip
            
            cursor={false}
          />
          <Bar
            
            dataKey="Arm1.val"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            id="aarea"
            name="Arm1"
          />
          <Bar
            
            dataKey="Arm2.val"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            id="barea"
            name="Arm2"
            cursor={"pointer"}
            onClick={(data, i) => alert('Arm2 clicked ' + i)}
          />
          <Bar
           cursor={"pointer"}
           dataKey="Arm3.val"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
            id="carea"
            name="Arm3"
            onClick={(data, i) => alert('Arm3 clicked ' + i)}
            // onMouseOver={() => alert()}
          />
        </BarChart>
       
      </ResponsiveContainer>
   </div>
 ); 
}
const BarCardList = [
  { title: "Total Opening", amount: "$4,508,758.48" },
  { title: "Total In", amount: "$28,413,776.12" },
  { title: "Total Out", amount: "$34,694,984.48" },
  { title: "Total Closing", amount: "$28,413,776.12" },
];

function BarMain() {
  return (
    <>
      <div style={{ padding: "3rem" }}>
        <Row type="horizontal">
          <Heading as="h2">Net Cash Flow</Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        <BarDiagram />
        <CardList cardList={BarCardList} />
      </div>
    </>
  );
}

function BarSidebar() {
  return (
    <Form style={{ backgroundColor: "var(--color-grey-0)" }}>
      <FormRow label="Report Title">
        <Input type="number" id="min-nights" />
      </FormRow>

      <FormRow label="Ledger code">
        <Input type="number" id="max-nights" />
      </FormRow>

      <FormRow label="Account period">
        <Input type="number" id="max-guests" />
      </FormRow>

      <FormRow label="Year">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <FormRow label="Chart type">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <div style={{display:"flex", gap:"2rem", "justify-content":"end", "margin-top": "1rem"}}>
        <Button size="medium" variation="secondary">Preview</Button>
        <Button size="medium">Save</Button>
      </div>
    </Form>
  );
}

export default function BarTemplate() {
  return (
    <TemplateContainer main={<BarMain />} side={<BarSidebar />}/>
  );
}
