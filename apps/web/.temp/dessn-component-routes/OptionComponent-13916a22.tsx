import React from 'react';
import { useParentState } from '../useIframeState';

const Option = ({ data, isSelected }) => {
  return (
    <div 
      className={`
        flex items-center justify-between px-3 py-2 cursor-pointer
        ${isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'}
        rounded-md
      `}
    >
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{data.label}</span>
        {data.subtitle && (
          <span className="text-sm text-gray-500">{data.subtitle}</span>
        )}
      </div>
      {isSelected && (
        <div className="text-blue-600">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Option Label",
      label: "Label",
    },
    subtitle: {
      type: "string",
      value: "Option Subtitle",
      label: "Subtitle",
    },
    isSelected: {
      type: "boolean",
      value: false,
      label: "Is Selected",
    },
  });

  const option = {
    label: state.label.value,
    subtitle: state.subtitle.value,
    value: "test",
  };

  return (
    <div className="p-4 max-w-md">
      <Option
        data={option}
        isSelected={state.isSelected.value}
      />
    </div>
  );
}