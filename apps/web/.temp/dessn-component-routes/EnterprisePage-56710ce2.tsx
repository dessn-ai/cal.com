import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/EnterprisePage';

import { useLocale } from "@calcom/lib/hooks/useLocale";

export default function ComponentPreview() {
  const { t } = useLocale();

  const [state, setState] = useParentState({
    heading: {
      type: "string",
      value: "Enterprise",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Enterprise Description",
      label: "Subtitle",
    },
    withoutSeo: {
      type: "boolean",
      value: true,
      label: "Without SEO",
    },
  });

  return (
    <ImportedComponent />
  );
}