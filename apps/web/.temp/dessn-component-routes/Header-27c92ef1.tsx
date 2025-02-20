import React from 'react';
import { useParentState } from '../useIframeState';
import { Header } from '../../../../packages/features/bookings/Booker/components/Header';

import { BookerLayouts } from '@calcom/prisma/zod-utils';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    extraDays: {
      type: "number",
      value: 7,
      label: "Extra Days",
    },
    isMobile: {
      type: "boolean",
      value: false,
      label: "Is Mobile",
    },
    enabledLayouts: {
      type: "dropdown",
      value: "MONTH_VIEW,WEEK_VIEW,COLUMN_VIEW",
      options: ["MONTH_VIEW", "WEEK_VIEW", "COLUMN_VIEW", "MONTH_VIEW,WEEK_VIEW", "MONTH_VIEW,COLUMN_VIEW", "WEEK_VIEW,COLUMN_VIEW", "MONTH_VIEW,WEEK_VIEW,COLUMN_VIEW"],
      label: "Enabled Layouts",
    },
    nextSlots: {
      type: "number",
      value: 3,
      label: "Next Slots",
    },
    eventSlug: {
      type: "string",
      value: "my-event",
      label: "Event Slug",
    },
    isMyLink: {
      type: "boolean",
      value: true,
      label: "Is My Link",
    },
  });

  const enabledLayoutsArray = state.enabledLayouts.value.split(',').map(layout => BookerLayouts[layout as keyof typeof BookerLayouts]);

  return (
    <Header
      extraDays={state.extraDays.value}
      isMobile={state.isMobile.value}
      enabledLayouts={enabledLayoutsArray}
      nextSlots={state.nextSlots.value}
      eventSlug={state.eventSlug.value}
      isMyLink={state.isMyLink.value}
      renderOverlay={() => null}
    />
  );
}