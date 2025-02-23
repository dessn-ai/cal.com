import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/_pages/setup/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "dropdown",
      value: "alby",
      options: [
        "alby",
        "apple-calendar",
        "exchange",
        "exchange2013-calendar",
        "exchange2016-calendar",
        "caldav-calendar",
        "ics-feed",
        "zapier",
        "make",
        "sendgrid",
        "stripe",
        "paypal",
        "hitpay"
      ],
      label: "App Slug"
    }
  });

  return <ImportedComponent slug={state.slug.value} />;
}