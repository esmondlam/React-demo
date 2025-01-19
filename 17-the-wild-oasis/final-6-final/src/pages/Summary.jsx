import Button from "../ui/Button";
import SummaryCard from "../features/summary/SummaryCard";
import Heading from "../ui/Heading";
import { HiClipboard, HiClipboardDocument, HiOutlineClipboard, HiOutlinePencil, HiOutlinePlusSmall, HiOutlineTrash } from "react-icons/hi2";
import PieTemplate from "./PieTemplate";



const SummaryArray = [
  {
    title: "Account Receivable Report",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Account Receivable",
    amount: "$21,905,017.64",
    updateDate: "16/10/2025",
  },
  {
    title: "Cash Flow Report",
    authorizedUsers: "Esmond Lam",
    subtitle: "Net Cash Flow",
    amount: "$23,009.172",
    updateDate: "16/10/2025",
  },
  {
    title: "Account Receivable Report",
    authorizedUsers: "Esmond Lam",
    subtitle: "Total Expense",
    amount: "$545,200",
    updateDate: "16/10/2025",
  },
]

function Summary() {
  return (
    <>
      <Heading as="h1">Summary</Heading>
      <Button size="medium" variation="primary">
        <HiOutlinePlusSmall />
        <span style={{ "margin-left": 10 }}>New Report</span>
      </Button>
      {SummaryArray.map((summary) => <SummaryCard summary={summary} />)}
    </>
  );

}

export default Summary;