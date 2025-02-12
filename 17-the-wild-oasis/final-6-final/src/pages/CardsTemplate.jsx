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

const SummaryArray = [
  {
    title: "Revenue",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Account Receivable",
    amount: "$21,905,017.64",
    updateDate: "16/10/2025",
  },
  {
    title: "Expenses",
    authorizedUsers: "Esmond Lam",
    subtitle: "Net Cash Flow",
    amount: "$23,009.172",
    updateDate: "16/10/2025",
  },
  {
    title: "Net Profit",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Expense",
    amount: "$545,200",
    updateDate: "16/10/2025",
  },
];
const StyleCardContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

function Card({ summary }) {
  return (
    <StyleCardContainer>
      <Heading as="h3">{summary.title}</Heading>
      <div style={{ color: "var(--color-grey-500)" }}>{summary.subtitle}</div>
      <div style={{ display: "flex", "justify-content": "space-between" }}>
        <Heading as="h4">{summary.amount}</Heading>
        <ButtonIcon>
          <HiOutlineArrowUpLeft />
        </ButtonIcon>
      </div>
    </StyleCardContainer>
  );
}

function CardMain() {
  return (
    <>
      <div className="main-content" style={{ padding: "3rem" }}>
        <Row type="horizontal" style={{ "margin-bottom": "1rem" }}>
          <Heading as="h2">Profit & Loss</Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        {SummaryArray.map((summary) => (
          <Card summary={summary} />
        ))}
      </div>
    </>
  );
}

function CardSideBar() {
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

      <FormRow label="Year">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <FormRow label="Chart type">
        <Input type="number" id="breakfast-price" />
      </FormRow>
    </Form>
  );
}

export default function CardsTemplate() {
  return <TemplateContainer main={<CardMain />} side={<CardSideBar />} />;
}
