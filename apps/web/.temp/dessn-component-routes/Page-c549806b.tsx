import React from 'react';
import { useParentState } from '../useIframeState';
import { AppCategories } from "@calcom/prisma/enums";

// Mock CategoryPage component
const CategoryPage = ({ apps, categories, category }) => {
  return (
    <div className="category-page">
      <h1>Category: {category}</h1>
      <div className="categories">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            <h3>{cat.name}</h3>
            <p>Count: {cat.count}</p>
          </div>
        ))}
      </div>
      <div className="apps">
        {apps.map((app, index) => (
          <div key={index} className="app-item">
            {app.name}
          </div>
        ))}
      </div>
    </div>
  );
};

// Mock data that would normally come from getStaticProps
const mockProps = {
  apps: [],
  categories: Object.values(AppCategories).map((category) => ({
    name: category,
    count: 0,
  })),
  category: AppCategories.CALENDAR,
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

  return (
    <div className="preview-container">
      <CategoryPage {...mockProps} />
    </div>
  );
}