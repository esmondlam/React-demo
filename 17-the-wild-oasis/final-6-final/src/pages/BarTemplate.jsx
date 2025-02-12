import ButtonIcon from "../ui/ButtonIcon";
import * as React from "react";
import { useState } from "react";
import { useNavigate, Outlet, useOutletContext } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  BarChart,
  Bar,
  // CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
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
import styled from "styled-components";

const data = [
  {
    month: "Nov 15, 2019",
    Arm1: { val: 4000, desc: "descktop..." },
    Arm2: { val: 2400, desc: "b desc" },
    Arm3: { val: 2400, desc: "c desc" },
  },
  {
    month: "Dec 01, 2019",
    Arm1: { val: 3000, desc: "descktop..." },
    Arm2: { val: 1398, desc: "b desc" },
    Arm3: { val: 2210, desc: "c desc" },
  },
  {
    month: "Dec 15, 2019",
    Arm1: { val: 2000, desc: "descktop..." },
    Arm2: { val: 9800, desc: "b desc" },
    Arm3: { val: 2290, desc: "c desc" },
  },
  {
    month: "Jan 01, 2020",
    Arm1: { val: 2780, desc: "descktop..." },
    Arm2: { val: 3900, desc: "b desc" },
    Arm3: { val: 2000, desc: "c desc" },
  },
  {
    month: "Jan 15, 2020",
    Arm1: { val: 1890, desc: "descktop..." },
    Arm2: { val: 4800, desc: "b desc" },
    Arm3: { val: 2180, desc: "c desc" },
  },
  {
    month: "Feb 01, 2020",
    Arm1: { val: 4000, desc: "descktop..." },
    Arm2: { val: 2400, desc: "b desc" },
    Arm3: { val: 2400, desc: "c desc" },
  },
];

function BarDiagram() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={600}
          height={400}
          data={data}
          stackOffset="expand"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/barchart/chart")}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip cursor={false} />
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
          />
          <Bar
            dataKey="Arm3.val"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
            id="carea"
            name="Arm3"
            // onMouseOver={() => alert()}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
const BarCardList = [
  { id: 1, title: "Total Opening", amount: "$4,508,758.48" },
  { id: 2, title: "Total In", amount: "$28,413,776.12" },
  { id: 3, title: "Total Out", amount: "$34,694,984.48" },
  { id: 4, title: "Total Closing", amount: "$28,413,776.12" },
];

const MainContentContainer = styled.div`
  padding: 3rem;

  & > * {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

function BarMain({ reportTitle }) {
  const navigate = useNavigate();
  return (
    <>
      <MainContentContainer className="main-content">
        <Row type="horizontal">
          <Heading as="h2" onClick={() => navigate("/barchart/title")}>
            {reportTitle === "" ? "---" : reportTitle}
          </Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        <BarDiagram />
        <CardList cardList={BarCardList} />
      </MainContentContainer>
    </>
  );
}

function BarReportTitle() {
  const { reportTitle, handleReportTitle } = useOutletContext();

  return (
    <Form>
      <FormRow label="Report Title">
        <Input
          type="text"
          id="min-nights"
          onChange={handleReportTitle}
          value={reportTitle}
        />
      </FormRow>
    </Form>
  );
}

function BarSidebar() {
  const {
    ledgerCode,
    accountPeriod,
    accountYear,
    chartType,
    handleLedgerCode,
    handleAccountPeriod,
    handleAccountYear,
    handleChartType,
  } = useOutletContext();
  return (
    <Form>
      <FormRow label="Ledger code">
        <Input type="text" onChange={handleLedgerCode} value={ledgerCode} />
      </FormRow>

      <FormRow label="Account period">
        <Input
          type="text"
          onChange={handleAccountPeriod}
          value={accountPeriod}
        />
      </FormRow>

      <FormRow label="Year">
        <Input type="text" onChange={handleAccountYear} value={accountYear} />
      </FormRow>
      <FormRow label="Chart type">
        <Input type="text" onChange={handleChartType} value={chartType} />
      </FormRow>
    </Form>
  );
}

function BarTemplate() {
  const [reportTitle, setReportTitle] = useState("");
  const [ledgerCode, setLedgerCode] = useState("");
  const [accountPeriod, setAccountPeriod] = useState("");
  const [accountYear, setAccountYear] = useState("");
  const [chartType, setChartType] = useState("");

  const handleReportTitle = (e) => setReportTitle(e.target.value);
  const handleLedgerCode = (e) => setLedgerCode(e.target.value);
  const handleAccountPeriod = (e) => setAccountPeriod(e.target.value);
  const handleAccountYear = (e) => setAccountYear(e.target.value);
  const handleChartType = (e) => setChartType(e.target.value);

  return (
    <>
      <TemplateContainer
        main={<BarMain reportTitle={reportTitle} />}
        side={
          <Outlet
            context={{
              reportTitle,
              ledgerCode,
              accountPeriod,
              accountYear,
              chartType,
              handleReportTitle,
              handleLedgerCode,
              handleAccountPeriod,
              handleAccountYear,
              handleChartType,
            }}
          />
        }
      />
    </>
  );
}

export { BarReportTitle, BarSidebar, BarTemplate };
