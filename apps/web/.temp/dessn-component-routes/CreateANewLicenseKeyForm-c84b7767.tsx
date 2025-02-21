import React from "react";
import { useParentState } from "../useIframeState";
import { CreateANewLicenseKeyForm } from "../../../../packages/features/ee/deployment/licensekey/CreateLicenseKeyForm";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

export default function ComponentPreview() {
  const [state] = useParentState({
    mockSession: {
      type: "boolean",
      value: true,
      label: "Mock Admin Session",
    },
  });

  const mockSession: Session = {
    expires: "2024-12-31T23:59:59.999Z",
    user: {
      id: "testuser",
      name: "Test User",
      email: "test@example.com",
      role: state.mockSession.value ? "ADMIN" : "USER",
      username: "testuser",
      emailVerified: new Date().toISOString(),
    }
  };

  return (
    <div className="m-4">
      <SessionProvider session={mockSession}>
        <CreateANewLicenseKeyForm />
      </SessionProvider>
    </div>
  );
}