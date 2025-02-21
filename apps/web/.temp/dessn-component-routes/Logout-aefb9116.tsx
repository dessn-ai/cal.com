import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/logout-view';

import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    query: {
      type: "string",
      value: JSON.stringify({ survey: "false", passReset: "false", emailChange: "false" }),
      label: "Query",
    },
  });

  const parsedQuery = JSON.parse(state.query.value);

  const MockRouter = {
    push: () => {},
    query: parsedQuery,
  };

  return (
    <SessionProvider session={null}>
      <ImportedComponent query={parsedQuery} />
    </SessionProvider>
  );
}