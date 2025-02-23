import React from 'react';
import { useParentState } from '../useIframeState';
import { WizardLayout } from '@calcom/ui';
import { TeamEventTypeForm } from "@calcom/features/ee/teams/components/TeamEventTypeForm";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Mock Components and Hooks
const MockTeamEventType = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      length: 15,
    }
  });

  const mockTeam = {
    slug: "mock-team",
  };

  return (
    <TeamEventTypeForm
      teamSlug={mockTeam.slug}
      teamId={1}
      isTeamAdminOrOwner={true}
      urlPrefix="http://localhost:3000"
      isPending={false}
      form={form}
      isManagedEventType={false}
      handleSubmit={(values) => {
        console.log("Form submitted:", values);
      }}
      SubmitButton={() => (
        <button type="submit" className="w-full justify-center">
          Finish
        </button>
      )}
    />
  );
};

const MockLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = {
    push: (path: string) => console.log("Navigation to:", path),
  };

  return (
    <WizardLayout
      currentStep={3}
      maxSteps={3}
      isOptionalCallback={() => {
        router.push('/settings/teams/1/profile');
      }}>
      {children}
    </WizardLayout>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="mx-auto max-w-4xl">
      <MockLayoutWrapper>
        <MockTeamEventType />
      </MockLayoutWrapper>
    </div>
  );
}