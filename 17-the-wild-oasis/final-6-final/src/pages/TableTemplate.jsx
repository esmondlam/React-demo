import ButtonIcon from "../ui/ButtonIcon";
import * as React from "react";
import TemplateContainer from "../ui/TemplateContainer";
import Heading from "../ui/Heading";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Row from "../ui/Row";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Table from "../ui/Table";

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

function TableMain() {
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
        <Table columns="10rem 18rem 18rem">
          <Table.Header>
            <div>Dept</div>
            <div>Expenses</div>
            <div>Budgets</div>
          </Table.Header>

          <Table.Body
            // data={cabins}
            // data={filteredCabins}
            data={SummaryArray}
            render={(summary) => <SummaryRow summary={summary} />}
          />
        </Table>
      </div>
    </>
  );
}

function SummaryRow({ summary }) {
  return (
    <Table.Row>
      <div>{summary.title}</div>
      <div>{summary.amount}</div>
      <div>{summary.amount}</div>
    </Table.Row>
  );
}

function TableSidebar() {
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

export default function TableTemplate() {
  return <TemplateContainer main={<TableMain />} side={<TableSidebar />} />;
}
