import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/SingleForm';
import { useForm, FormProvider } from 'react-hook-form';
import { OrgBrandingProvider } from "@calcom/features/ee/organizations/context/provider";

// Mock I18n context and provider
const I18nContext = createContext({
  i18n: {
    language: 'en',
    languages: ['en'],
    defaultNS: 'common',
    defaultLanguage: 'en'
  },
  t: (key: string) => key,
});

const MockI18nProvider = ({ children }) => {
  return (
    <I18nContext.Provider
      value={{
        i18n: {
          language: 'en',
          languages: ['en'],
          defaultNS: 'common',
          defaultLanguage: 'en'
        },
        t: (key: string) => key,
      }}>
      {children}
    </I18nContext.Provider>
  );
};

// Mock InsightsProvider context and component
const InsightsContext = createContext({
  filter: {
    dateRange: { startDate: null, endDate: null },
    teamId: null,
    userId: null,
    memberId: null,
    isAll: true,
  },
  setFilter: () => {},
  loading: false,
});

const MockInsightsProvider = ({ children }) => {
  return (
    <InsightsContext.Provider
      value={{
        filter: {
          dateRange: { startDate: null, endDate: null },
          teamId: null,
          userId: null,
          memberId: null,
          isAll: true,
        },
        setFilter: () => {},
        loading: false,
      }}>
      {children}
    </InsightsContext.Provider>
  );
};

// Mock Shell context and provider
const ShellContext = createContext({
  shouldShowRequestAccessModal: false,
  setShouldShowRequestAccessModal: () => {},
});

const MockShellProvider = ({ children }) => {
  return (
    <ShellContext.Provider
      value={{
        shouldShowRequestAccessModal: false,
        setShouldShowRequestAccessModal: () => {},
      }}>
      {children}
    </ShellContext.Provider>
  );
};

// Mock EmbedDialog context and provider
const EmbedDialogContext = createContext({
  embed: {
    previewState: "closed",
    embedUrl: "",
    embedType: "",
    isEmbedDialog: false,
    theme: "auto",
    setEmbedUrl: () => {},
    setEmbedType: () => {},
    setIsEmbedDialog: () => {},
    setPreviewState: () => {},
    setTheme: () => {},
  }
});

const MockEmbedDialogProvider = ({ children }) => {
  return (
    <EmbedDialogContext.Provider
      value={{
        embed: {
          previewState: "closed",
          embedUrl: "",
          embedType: "",
          isEmbedDialog: false,
          theme: "auto",
          setEmbedUrl: () => {},
          setEmbedType: () => {},
          setIsEmbedDialog: () => {},
          setPreviewState: () => {},
          setTheme: () => {},
        }
      }}>
      {children}
    </EmbedDialogContext.Provider>
  );
};

// Mock TRPC Provider
const TRPCContext = createContext({});
const MockTRPCProvider = ({ children }) => {
  return <TRPCContext.Provider value={{}}>{children}</TRPCContext.Provider>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Form",
        description: "This is a sample form",
        teamId: 1,
        routes: [],
        fields: [],
        settings: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { responses: 0 },
        team: { slug: "team-slug", name: "Team Name" },
        connectedForms: [],
        routers: [],
        teamMembers: []
      },
      label: "Form"
    },
    showAllData: {
      type: "boolean",
      value: true,
      label: "Show All Data"
    },
    renderFooter: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Render Footer"
    }
  });

  const methods = useForm({
    defaultValues: state.form.value
  });

  const renderFooter = state.renderFooter.value === "custom" 
    ? (onClose: () => void) => <div>Custom Footer <button onClick={onClose}>Close</button></div>
    : undefined;

  // Mock data for enrichedWithUserProfileForm
  const enrichedWithUserProfileForm = {
    ...state.form.value,
    user: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      avatarUrl: "",
      defaultScheduleId: null
    },
    team: state.form.value.team,
    nonOrgUsername: "testuser",
    nonOrgTeamslug: "test-team",
    userOrigin: "http://localhost:3000",
    teamOrigin: "http://localhost:3000"
  };

  // Mock Page component
  const MockPage = ({ form, hookForm, appUrl }) => {
    return <div>Form Content</div>;
  };

  // Organization branding data
  const orgBrandingData = {
    orgBrand: {
      id: 1,
      name: "Test Org",
      slug: "test-org",
      logoUrl: null,
      fullDomain: "test-org.cal.com",
      domainSuffix: "cal.com",
      role: "ADMIN",
      theme: null,
      brandColor: "",
      darkBrandColor: "",
      metadata: {}
    }
  };

  return (
    <MockI18nProvider>
      <MockTRPCProvider>
        <MockInsightsProvider>
          <OrgBrandingProvider value={orgBrandingData}>
            <MockShellProvider>
              <MockEmbedDialogProvider>
                <FormProvider {...methods}>
                  <ImportedComponent
                    form={state.form.value}
                    showAllData={state.showAllData.value}
                    renderFooter={renderFooter}
                    enrichedWithUserProfileForm={enrichedWithUserProfileForm}
                    appUrl="/routing-forms"
                    Page={MockPage}
                  />
                </FormProvider>
              </MockEmbedDialogProvider>
            </MockShellProvider>
          </OrgBrandingProvider>
        </MockInsightsProvider>
      </MockTRPCProvider>
    </MockI18nProvider>
  );
}