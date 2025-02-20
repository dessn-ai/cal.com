import React from 'react';

const OrgBrandingContext = React.createContext({
  orgBranding: {
    brandColor: "#292929",
    darkBrandColor: "#fafafa",
    theme: null,
    hydrated: true,
  }
});

export const useOrgBranding = () => {
  return React.useContext(OrgBrandingContext);
};

export const OrgBrandingProvider = ({ children }) => {
  return (
    <OrgBrandingContext.Provider
      value={{
        orgBranding: {
          brandColor: "#292929",
          darkBrandColor: "#fafafa",
          theme: null,
          hydrated: true,
        }
      }}
    >
      {children}
    </OrgBrandingContext.Provider>
  );
};