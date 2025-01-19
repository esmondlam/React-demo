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
import styled from "styled-components";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";

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
]

function DisplayTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>entry</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={((entry)) => <TableRow entry={entry}/>}
        />
      </Table>
    </Menus>
  )
}

function TableRow({ entry }) {

  const {
    expense,
    budget
  } = entry;

  return (
    <Table.Row>
      <Img src={image} />
      <entry>{name}</entry>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={entry} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

function BarMain() {
  return (
    <>
      <div style={{ padding: "3rem" }}>
        <Row type="horizontal" style={{"margin-bottom": "1rem"}}>
          <Heading as="h2">Expenses</Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        <Heading as="h4" style={{"margin-bottom": "1rem"}}>$545,200</Heading>
        <DisplayTable />
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

      <FormRow label="Time period">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <FormRow label="Tab Page">
        <Input type="number" id="breakfast-price" />
      </FormRow>
      <div style={{display:"flex", gap:"2rem", "justify-content":"end", "margin-top": "1rem"}}>
        <Button size="medium" variation="secondary">Preview</Button>
        <Button size="medium">Save</Button>
      </div>
    </Form>
  );
}

export default function TableTemplate() {
  return (
    <TemplateContainer main={<BarMain />} side={<BarSidebar />}/>
  );
}
