import React from 'react';
import { EventTypeAppCard } from '../../../../packages/app-store/_components/EventTypeAppCardInterface';

export default function ComponentPreview() {
  // Mock data without any state management
  const mockApp = {
    name: "Sample App",
    slug: "sample-app",
  };

  const mockEventType = {
    title: "Sample Event Type",
    description: "This is a sample event type",
    id: 1,
    length: 30,
    URL: "sample-event-type",
  };

  // Simple mock functions
  function mockGetAppData() {
    return null;
  }

  function mockSetAppData() {
    return;
  }

  return (
    <EventTypeAppCard
      app={mockApp}
      eventType={mockEventType}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      LockedIcon={false}
      eventTypeFormMetadata={{}}
      disabled={false}
    />
  );
}