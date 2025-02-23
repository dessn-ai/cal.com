import React from 'react';
import { useParentState } from '../useIframeState';
import { AppCategories } from "@calcom/prisma/enums";

// Mock version of the categories page
const MockCategoriesPage = ({ params, searchParams }) => {
  const category = params?.category || AppCategories.CALENDAR;
  const categoryDisplay = typeof category === 'string' ? category : String(category);

  return (
    <div className="max-w-screen-lg">
      <div className="mb-8">
        <h1 className="font-cal text-emphasis mb-1 text-3xl">
          {categoryDisplay} Apps
        </h1>
        <p className="text-default text-sm">
          These are the {categoryDisplay.toLowerCase()} apps available to you
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Mock app cards */}
        <div className="border rounded-md p-4">
          <h3 className="font-medium">Sample App 1</h3>
          <p className="text-sm text-gray-500">A sample {categoryDisplay.toLowerCase()} app</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-medium">Sample App 2</h3>
          <p className="text-sm text-gray-500">Another sample {categoryDisplay.toLowerCase()} app</p>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ category: AppCategories.CALENDAR }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <div className="p-6 bg-white">
        <MockCategoriesPage params={params} searchParams={searchParams} />
      </div>
    );
  } catch (error) {
    console.error('Error parsing params:', error);
    return (
      <div className="p-6 bg-white">
        <MockCategoriesPage 
          params={{ category: AppCategories.CALENDAR }} 
          searchParams={{}} 
        />
      </div>
    );
  }
}