import React from 'react';

const SettingsHeader = ({ 
  children, 
  title, 
  description 
}: { 
  children?: React.ReactNode; 
  title?: string; 
  description?: string 
}) => (
  <div className="settings-header">
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

const AdminOrgTable = () => (
  <div className="admin-org-table">
    Admin Organization Table Content
  </div>
);

export default function ComponentPreview() {
  return (
    <div className="component-preview">
      <SettingsHeader 
        title="Organizations"
        description="Manage your organization settings"
      >
        <AdminOrgTable />
      </SettingsHeader>
    </div>
  );
}