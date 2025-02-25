import React from 'react';
import { useParentState } from '../useIframeState';

// Mock Badge component since we don't have access to @calcom/ui
const Badge = ({ children, variant }: { children: React.ReactNode; variant: string }) => (
  <span style={{
    backgroundColor: variant === 'success' ? '#dcfce7' : '#e5e7eb',
    color: variant === 'success' ? '#166534' : '#374151',
    padding: '2px 8px',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    marginLeft: '8px'
  }}>
    {children}
  </span>
);

function pluralize(opts: { num: number; plural: string; singular: string }) {
  if (opts.num === 0) {
    return opts.singular;
  }
  return opts.singular;
}

const SubHeadingTitleWithConnections = (props: { title: React.ReactNode; numConnections?: number }) => {
  const num = props.numConnections;
  return (
    <>
      <span>{props.title}</span>
      {num ? (
        <Badge variant="success">
          {num}{" "}
          {pluralize({
            num,
            singular: "connection",
            plural: "connections",
          })}
        </Badge>
      ) : null}
    </>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Integration Title",
      label: "Title",
    },
    numConnections: {
      type: "number",
      value: 3,
      label: "Number of Connections",
    },
  });

  return (
    <SubHeadingTitleWithConnections
      title={state.title.value}
      numConnections={state.numConnections.value}
    />
  );
}