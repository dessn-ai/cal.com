import React from 'react';
import { useParentState } from '../useIframeState';
import { Pagination } from '../../../../packages/ui/components/pagination/Pagination';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentPage: {
      type: "number",
      value: 1,
      label: "Current Page",
    },
    pageSize: {
      type: "number",
      value: 10,
      label: "Page Size",
    },
    totalItems: {
      type: "number",
      value: 100,
      label: "Total Items",
    },
    pageSizeOptions: {
      type: "string",
      value: "10,25,50,100",
      label: "Page Size Options",
    },
  });

  const handlePageChange = (page: number) => {
    setState("currentPage", page);
  };

  const handlePageSizeChange = (pageSize: number) => {
    setState("pageSize", pageSize);
  };

  const handleNext = () => {
    console.log("Next page");
  };

  const handlePrevious = () => {
    console.log("Previous page");
  };

  return (
    <Pagination
      currentPage={state.currentPage.value}
      pageSize={state.pageSize.value}
      totalItems={state.totalItems.value}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
      onNext={handleNext}
      onPrevious={handlePrevious}
      pageSizeOptions={state.pageSizeOptions.value.split(',').map(Number)}
    />
  );
}