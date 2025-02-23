"use client";

import type { SessionContextValue } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc";
import type { Ensure } from "@calcom/types/utils";
import { showToast } from "@calcom/ui";
import { Alert, Button, Form, Label, TextField, ToggleGroup } from "@calcom/ui";

import { UserPermissionRole } from "../../../../prisma/enums";

export const CreateANewLicenseKeyForm = () => {
  const { data: session, status } = useSession();
  
  // Add loading state handling
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Safe check for session and user data
  if (!session?.user?.role) {
    return null;
  }

  if (session.user.role !== "ADMIN") {
    return null;
  }

  return <CreateANewLicenseKeyFormChild session={{ data: session, status }} />;
};

// ... rest of the component remains the same ...