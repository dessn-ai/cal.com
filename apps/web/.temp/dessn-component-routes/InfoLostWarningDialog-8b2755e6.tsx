import React from 'react';
import { useParentState } from '../useIframeState';
import { InfoLostWarningDialog } from '../../../../packages/app-store/routing-forms/components/InfoLostWarningDialog';

// Mock providers and hooks
const MockNextNavigation = ({ children }: { children: React.ReactNode }) => {
  const mockRouter = {
    replace: (path: string) => console.log('Navigation to:', path),
  };
  
  // @ts-ignore - This is a mock
  React.useRouter = () => mockRouter;
  return <>{children}</>;
};

const MockLocaleProvider = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore - This is a mock
  React.useLocale = () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'leave_without_saving': 'Leave without saving',
        'leave_without_saving_description': 'Are you sure you want to leave? Any unsaved changes will be lost.',
        'go_back_and_save': 'Go back & save',
      };
      return translations[key] || key;
    },
  });
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenInfoLostDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
    goToRoute: {
      type: "string",
      value: "/dashboard",
      label: "Go To Route",
    },
  });

  const setIsOpenInfoLostDialog = (value: boolean) => {
    setState('isOpenInfoLostDialog', value);
  };

  return (
    <MockNextNavigation>
      <MockLocaleProvider>
        <InfoLostWarningDialog
          isOpenInfoLostDialog={state.isOpenInfoLostDialog.value}
          setIsOpenInfoLostDialog={setIsOpenInfoLostDialog}
          goToRoute={state.goToRoute.value}
        />
      </MockLocaleProvider>
    </MockNextNavigation>
  );
}