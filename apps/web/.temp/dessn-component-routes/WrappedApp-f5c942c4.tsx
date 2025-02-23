import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/App';

// Mock implementation of useLocale
const useLocale = () => ({
  t: (key: string) => key,
});

// Mock Shell component
const Shell = ({ 
  children, 
  smallHeading, 
  isPublic, 
  heading, 
  backPath, 
  withoutSeo 
}: { 
  children: React.ReactNode;
  smallHeading?: boolean;
  isPublic?: boolean;
  heading?: React.ReactNode;
  backPath?: string;
  withoutSeo?: boolean;
}) => (
  <div className="shell-container">
    {heading}
    {children}
  </div>
);

// Mock LicenseRequired component
const LicenseRequired = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Sample App",
      label: "Name",
    },
    description: {
      type: "string",
      value: "This is a sample app description",
      label: "Description",
    },
    type: {
      type: "string",
      value: "calendar_other",
      label: "Type",
    },
    isGlobal: {
      type: "boolean",
      value: false,
      label: "Is Global",
    },
    logo: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Logo URL",
    },
    slug: {
      type: "string",
      value: "sample-app",
      label: "Slug",
    },
    variant: {
      type: "string",
      value: "other",
      label: "Variant",
    },
    categories: {
      type: "string",
      value: "productivity,communication",
      label: "Categories",
    },
    author: {
      type: "string",
      value: "Sample Author",
      label: "Author",
    },
    price: {
      type: "number",
      value: 0,
      label: "Price",
    },
    email: {
      type: "string",
      value: "support@sampleapp.com",
      label: "Email",
    },
    licenseRequired: {
      type: "boolean",
      value: false,
      label: "License Required",
    },
    concurrentMeetings: {
      type: "boolean",
      value: false,
      label: "Concurrent Meetings",
    },
  });

  const ShellHeading = () => {
    const { t } = useLocale();
    return <span className="block py-2">{t("app_store")}</span>;
  };

  const props = {
    name: state.name.value,
    description: state.description.value,
    type: state.type.value,
    isGlobal: state.isGlobal.value,
    logo: state.logo.value,
    slug: state.slug.value,
    variant: state.variant.value,
    body: <div>App body content goes here</div>,
    categories: state.categories.value.split(','),
    author: state.author.value,
    price: state.price.value,
    email: state.email.value,
    licenseRequired: state.licenseRequired.value,
    concurrentMeetings: state.concurrentMeetings.value,
  };

  return (
    <Shell smallHeading isPublic heading={<ShellHeading />} backPath="/apps" withoutSeo>
      {props.licenseRequired ? (
        <LicenseRequired>
          <ImportedComponent {...props} />
        </LicenseRequired>
      ) : (
        <ImportedComponent {...props} />
      )}
    </Shell>
  );
}