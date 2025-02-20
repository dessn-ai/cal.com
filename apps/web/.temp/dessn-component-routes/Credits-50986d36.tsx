import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/credits/Credits';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    companyName: {
      type: "string",
      value: "Cal.com",
      label: "Company Name",
    },
    version: {
      type: "string",
      value: "1.0.0",
      label: "Version",
    },
    isSelfHosted: {
      type: "boolean",
      value: false,
      label: "Is Self Hosted",
    },
    isCalcom: {
      type: "boolean",
      value: true,
      label: "Is Cal.com",
    },
    vercelCommitHash: {
      type: "string",
      value: "abc1234",
      label: "Vercel Commit Hash",
    },
  });

  // Mock the environment variables and constants
  React.useEffect(() => {
    global.CALCOM_VERSION = state.version.value;
    global.COMPANY_NAME = state.companyName.value;
    global.IS_SELF_HOSTED = state.isSelfHosted.value;
    global.IS_CALCOM = state.isCalcom.value;
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA = state.vercelCommitHash.value;
  }, [state]);

  return <ImportedComponent />;
}