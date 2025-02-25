import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventRecurringWebWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  recurringEvent: z.object({
    dtstart: z.string().optional(),
    interval: z.number().min(1).default(1),
    count: z.number().min(1).default(1),
    freq: z.enum(['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY']).default('WEEKLY'),
    until: z.string().optional(),
  }).nullable().default(null),
  requiresConfirmation: z.boolean().default(false),
  metadata: z.any().optional(),
  afterEventBuffer: z.number().default(0),
  beforeEventBuffer: z.number().default(0),
  slotInterval: z.number().default(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'dropdown',
      value: 'ONE_ON_ONE',
      options: ['ONE_ON_ONE', 'GROUP', 'COLLECTIVE'],
      label: 'Event Type',
    },
    customClassNames: {
      type: 'string',
      value: '{}',
      label: 'Custom Class Names',
    },
  });

  const eventType = {
    id: 1,
    slug: 'test-event',
    title: 'Test Event',
    length: 60,
    recurringEvent: {
      interval: 1,
      count: 1,
      freq: 'WEEKLY',
    },
    type: state.eventType.value,
    requiresConfirmation: false,
    metadata: {},
    afterEventBuffer: 0,
    beforeEventBuffer: 0,
    slotInterval: 1,
  };

  const customClassNames = JSON.parse(state.customClassNames.value);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recurringEvent: eventType.recurringEvent,
      requiresConfirmation: eventType.requiresConfirmation,
      metadata: eventType.metadata,
      afterEventBuffer: eventType.afterEventBuffer,
      beforeEventBuffer: eventType.beforeEventBuffer,
      slotInterval: eventType.slotInterval,
    }
  });

  return (
    <FormProvider {...form}>
      <ImportedComponent
        eventType={eventType}
        customClassNames={customClassNames}
      />
    </FormProvider>
  );
}