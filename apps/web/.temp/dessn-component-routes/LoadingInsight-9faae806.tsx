import React from 'react';
import { useParentState } from '../useIframeState';
import { LoadingInsight } from '../../../../packages/features/insights/components/LoadingInsights';

// Mock i18n handler component since we can't resolve the actual import
const MockI18nLanguageHandler = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <MockI18nLanguageHandler>
      <LoadingInsight />
    </MockI18nLanguageHandler>
  );
}