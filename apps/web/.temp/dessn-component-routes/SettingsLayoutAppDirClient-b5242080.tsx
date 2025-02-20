import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/SettingsLayoutAppDirClient';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

// Create a mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  return <>{children}</>;
};

// Create a mock query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {}
    }
  }
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    currentOrg: {
      type: "string",
      value: "null",
      label: "Current Organization",
    },
    otherTeams: {
      type: "string",
      value: "null",
      label: "Other Teams",
    },
    containerClassName: {
      type: "string",
      value: "",
      label: "Container Class Name",
    },
  });

  // Mock organization branding data
  const mockOrgBrand = {
    orgBrand: {
      id: 1,
      name: "Test Organization",
      slug: "test-org",
      logoUrl: null,
      fullDomain: "test-org.cal.com",
      domainSuffix: "cal.com",
      role: "ADMIN",
      theme: null,
      brandColor: "#292929",
      darkBrandColor: "#fafafa",
      metadata: {}
    }
  };

  // Mock the window.crypto API if needed
  if (typeof window !== 'undefined' && !window.crypto) {
    Object.defineProperty(window, 'crypto', {
      value: {
        getRandomValues: (buffer: Uint8Array) => {
          for (let i = 0; i < buffer.length; i++) {
            buffer[i] = Math.floor(Math.random() * 256);
          }
          return buffer;
        }
      }
    });
  }

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <MockTRPCProvider>
          <SessionProvider>
            <OrgBrandingProvider value={mockOrgBrand}>
              <ImportedComponent
                children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
                currentOrg={state.currentOrg.value === "null" ? null : JSON.parse(state.currentOrg.value)}
                otherTeams={state.otherTeams.value === "null" ? null : JSON.parse(state.otherTeams.value)}
                containerClassName={state.containerClassName.value}
              />
            </OrgBrandingProvider>
          </SessionProvider>
        </MockTRPCProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}