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
import { HiOutlineArrowUpLeft } from "react-icons/hi2";
import TodayActivity from "../features/check-in-out/TodayActivity";

const SummaryArray = [
  {
    title: "January",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Account Receivable",
    amount: "$21,905,017.64",
    updateDate: "16/10/2025",
  },
  {
    title: "February",
    authorizedUsers: "Esmond Lam",
    subtitle: "Net Cash Flow",
    amount: "$23,009.172",
    updateDate: "16/10/2025",
  },
  {
    title: "March",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Expense",
    amount: "$545,200",
    updateDate: "16/10/2025",
  },
  {
    title: "April",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Account Receivable",
    amount: "$21,905,017.64",
    updateDate: "16/10/2025",
  },
  {
    title: "May",
    authorizedUsers: "Esmond Lam",
    subtitle: "Net Cash Flow",
    amount: "$23,009.172",
    updateDate: "16/10/2025",
  },
  {
    title: "June",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Expense",
    amount: "$545,200",
    updateDate: "16/10/2025",
  },
];
const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

function TodayItem({ summary }) {
  return (
    <Row
      type="horizontal"
      style={{
        "border-bottom": "1px solid var(--color-grey-100)",
        "margin-bottom": "1rem",
      }}
    >
      <div>{summary.title}</div>
      <div>{summary.amount}</div>
    </Row>
  );
}

function ExpenseList() {
  return (
    <StyledToday>
      <TodayList>
        {SummaryArray.map((summary) => (
          <TodayItem summary={summary} />
        ))}
      </TodayList>
    </StyledToday>
  );
}

function ListMain() {
  return (
    <>
      <div className="main-content" style={{ padding: "3rem" }}>
        <Row type="horizontal" style={{ "margin-bottom": "1rem" }}>
          <Heading as="h2">Expenses</Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        <Heading as="h4" style={{ "margin-bottom": "1rem" }}>
          $545,200
        </Heading>
        <ExpenseList />
      </div>
    </>
  );
}

function ListSidebar() {
  return (
    <Form>
      <FormRow label="Report Title">
        <Input type="number" id="min-nights" />
      </FormRow>

      <FormRow label="Ledger code">
        <Input type="number" id="max-nights" />
      </FormRow>

      <FormRow label="Account period">
        <Input type="number" id="max-guests" />
      </FormRow>

      <FormRow label="Time period">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <FormRow label="Tab Page">
        <Input type="number" id="breakfast-price" />
      </FormRow>
    </Form>
  );
}

export default function ListTemplate() {
  return <TemplateContainer main={<ListMain />} side={<ListSidebar />} />;
}
