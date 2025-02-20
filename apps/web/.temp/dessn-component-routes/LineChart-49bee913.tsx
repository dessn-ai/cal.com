import React from 'react';
import { useParentState } from '../useIframeState';
import { LineChart } from '../../../../packages/features/insights/components/LineChart';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "string",
      value: JSON.stringify([
        { date: "2023-01-01", value: 100 },
        { date: "2023-02-01", value: 200 },
        { date: "2023-03-01", value: 300 },
      ]),
      label: "Data",
    },
    categories: {
      type: "string",
      value: JSON.stringify(["value"]),
      label: "Categories",
    },
    index: {
      type: "string",
      value: "date",
      label: "Index",
    },
    colors: {
      type: "dropdown",
      value: "blue",
      options: ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"],
      label: "Colors",
    },
    showXAxis: {
      type: "boolean",
      value: true,
      label: "Show X Axis",
    },
    showYAxis: {
      type: "boolean",
      value: true,
      label: "Show Y Axis",
    },
    showAnimation: {
      type: "boolean",
      value: true,
      label: "Show Animation",
    },
    showTooltip: {
      type: "boolean",
      value: true,
      label: "Show Tooltip",
    },
    showLegend: {
      type: "boolean",
      value: true,
      label: "Show Legend",
    },
  });

  return (
    <LineChart
      data={JSON.parse(state.data.value)}
      categories={JSON.parse(state.categories.value)}
      index={state.index.value}
      colors={[state.colors.value]}
      showXAxis={state.showXAxis.value}
      showYAxis={state.showYAxis.value}
      showAnimation={state.showAnimation.value}
      showTooltip={state.showTooltip.value}
      showLegend={state.showLegend.value}
    />
  );
}