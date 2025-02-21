import React from 'react';
import { useParentState } from '../useIframeState';
import { StartTimeFilters } from '../../../../packages/features/filters/components/StartTimeFilters';

import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const mockRouter = {
    replace: () => {},
  };

  const mockSearchParams = {
    get: () => null,
    has: () => false,
    toString: () => '',
  };

  return (
    <React.Fragment>
      <StartTimeFilters />
    </React.Fragment>
  );
}