import ButtonIcon from "../ui/ButtonIcon";
import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
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

const TEMPLATES_CONFIG = [
  {
    name: "barchart",
    templateComponent: BarMain,
    defaultState: {
      title: "",
      ledgerCode: "",
      accountPeriod: "",
      accountYear: "",
      chartType: "",
      cards: [
        {
          id: 1,
          label: "",
          query: "",
        },
      ],
    },
    formComponent: [
      { name: "reportTitle", component: BarReportTitle },
      { name: "chart", component: BarSidebar },
      { name: "card1", component: BarCard },
      { name: "card2", component: BarCard },
      { name: "card3", component: BarCard },
      { name: "card4", component: BarCard },
    ],
  },
];

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

function BarReportTitle({ formValues, handleFormValues }) {
  return (
    <Form>
      <FormRow label="Report Title">
        <Input
          name="title"
          type="text"
          onChange={handleFormValues}
          value={formValues.title}
        />
      </FormRow>
    </Form>
  );
}

function BarSidebar({ formValues, handleFormValues }) {
  return (
    <Form>
      <FormRow label="Ledger code">
        <Input
          name="ledgerCode"
          type="text"
          onChange={handleFormValues}
          value={formValues.ledgerCode}
        />
      </FormRow>

      <FormRow label="Account period">
        <Input
          name="accountPeriod"
          type="text"
          onChange={handleFormValues}
          value={formValues.accountPeriod}
        />
      </FormRow>

      <FormRow label="Year">
        <Input
          name="accountYear"
          type="text"
          onChange={handleFormValues}
          value={formValues.accountYear}
        />
      </FormRow>
      <FormRow label="Chart type">
        <Input
          name="chartType"
          type="text"
          onChange={handleFormValues}
          value={formValues.chartType}
        />
      </FormRow>
    </Form>
  );
}

function BarCard({ formValues, focusElem, setFormValues }) {
  const cardListIndex = focusElem.match(/(\d+)/)[0] - 1;
  const cardList = formValues.cards;
  const selectedCard = cardList[cardListIndex];

  const handleInput = (e) => {
    const newCardList = cardList.map((card, index) => {
      if (index === cardListIndex) {
        card[e.currentTarget.name] = e.currentTarget.value;
      }
      return card;
    });
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      cards: [...newCardList],
    }));
  };

  return (
    <Form>
      <FormRow label="Label">
        <Input
          name="label"
          type="text"
          onChange={handleInput}
          value={selectedCard.label}
        />
      </FormRow>
      <FormRow label="Card Query">
        <Input
          name="query"
          type="text"
          onChange={handleInput}
          value={selectedCard.query}
        />
      </FormRow>
    </Form>
  );
}

const MainContentContainer = styled.div`
  padding: 3rem;

  & .hover-animation {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.01);
      background-color: var(--color-indigo-100);
      border-radius: var(--border-radius-lg);
    }
  }

  & .focus {
    background-color: var(--color-indigo-100);
    border-radius: var(--border-radius-lg);
  }
`;

function BarMain({ reportTitle, cardList, setFormValues, focusElem, onFocus }) {
  const navigate = useNavigate();

  const navigateTitle = (e) => {
    onFocus(e);
    navigate("/templates/barchart/reportTitle");
  };

  const navigateDiagram = (e) => {
    onFocus(e);
    navigate("/templates/barchart/chart");
  };

  const navigateCard = (e) => {
    onFocus(e);
    const cardRoute = e.currentTarget.dataset.route;
    navigate(`/templates/barchart/${cardRoute}`);
  };

  return (
    <>
      <MainContentContainer className="main-content">
        <Row type="horizontal">
          <Heading
            as="h2"
            data-route="title"
            className={`${
              focusElem === "title" ? "focus" : ""
            } hover-animation`}
            style={{ padding: "0.2em" }}
            onClick={navigateTitle}
          >
            {reportTitle === "" ? "---" : reportTitle}
          </Heading>
          <ButtonIcon>
            <HiOutlineMagnifyingGlass />
          </ButtonIcon>
        </Row>
        <div
          data-route="chart"
          className={`${focusElem === "chart" ? "focus" : ""} hover-animation`}
          onClick={navigateDiagram}
        >
          <BarDiagram />
        </div>
        <CardList
          navigateCard={navigateCard}
          focusElem={focusElem}
          cardList={cardList}
          setFormValues={setFormValues}
        />
      </MainContentContainer>
    </>
  );
}

function TemplateConfig() {
  const { templateType, formType } = useParams();
  const [focusElem, setFocusElem] = useState("");

  const onFocus = (e) => {
    setFocusElem(e.currentTarget.dataset.route);
  };

  const templateConfig = TEMPLATES_CONFIG.find(
    (item) => item.name === templateType,
  );
  const formComponent = templateConfig.formComponent.find(
    (item) => item.name === formType,
  );

  const [formValues, setFormValues] = useState(templateConfig.defaultState);

  const handleFormValues = (e) => {
    const newFormValue = e.currentTarget.value;
    const elementName = e.currentTarget.name;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [elementName]: newFormValue,
    }));
    console.log(formValues);
  };

  return (
    <TemplateContainer
      main={
        <templateConfig.templateComponent
          reportTitle={formValues.title}
          cardList={formValues.cards}
          setFormValues={setFormValues}
          focusElem={focusElem}
          onFocus={onFocus}
        />
      }
      side={
        formType ? (
          <formComponent.component
            formValues={formValues}
            handleFormValues={handleFormValues}
            setFormValues={setFormValues}
            focusElem={focusElem}
          />
        ) : (
          <></>
        )
      }
    />
  );
}

export { TemplateConfig };
