import { useParams } from "react-router-dom";

const CHART_CONFIG = [
  {
    name: "barChart",
    defaultState: {
      title: "",
    },
  },
];

function TemplateConfig() {
  const { template, component } = useParams();
}

export { TemplateConfig };
