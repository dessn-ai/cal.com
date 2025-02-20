import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component since we can't load the actual one
const MockOrgAttributesCreate = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Organization Attributes Create</h1>
      <div className="space-y-4">
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">Attribute Name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded"
            placeholder="Enter attribute name"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">Attribute Type</label>
          <select className="w-full p-2 border rounded">
            <option>Text</option>
            <option>Number</option>
            <option>Boolean</option>
          </select>
        </div>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Attribute
        </button>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="bg-white rounded-lg shadow">
      <MockOrgAttributesCreate />
    </div>
  );
}