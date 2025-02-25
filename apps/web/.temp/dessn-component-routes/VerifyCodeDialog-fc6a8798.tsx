import React from 'react';
import { useParentState } from '../useIframeState';
import { VerifyCodeDialog } from '../../../../packages/features/bookings/components/VerifyCodeDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Open Dialog",
    },
    email: {
      type: "string",
      value: "user@example.com",
      label: "Email",
    },
    isUserSessionRequiredToVerify: {
      type: "boolean",
      value: true,
      label: "Is User Session Required To Verify",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    error: {
      type: "string",
      value: "",
      label: "Error",
    },
  });

  const setIsOpenDialog = (value: boolean) => setState("isOpenDialog", value);
  const setIsPending = (value: boolean) => setState("isPending", value);

  const verifyCodeWithSessionNotRequired = (code: string, email: string) => {
    console.log("Verifying code without session:", code, email);
  };

  const verifyCodeWithSessionRequired = (code: string, email: string) => {
    console.log("Verifying code with session:", code, email);
  };

  const resetErrors = () => {
    setState("error", "");
  };

  return (
    <VerifyCodeDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={setIsOpenDialog}
      email={state.email.value}
      isUserSessionRequiredToVerify={state.isUserSessionRequiredToVerify.value}
      verifyCodeWithSessionNotRequired={verifyCodeWithSessionNotRequired}
      verifyCodeWithSessionRequired={verifyCodeWithSessionRequired}
      resetErrors={resetErrors}
      isPending={state.isPending.value}
      setIsPending={setIsPending}
      error={state.error.value}
    />
  );
}