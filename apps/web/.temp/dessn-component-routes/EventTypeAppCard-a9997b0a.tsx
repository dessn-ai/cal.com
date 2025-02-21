import React from 'react';
import { useParentState } from '../useIframeState';
import EventTypeAppContext from '@calcom/app-store/EventTypeAppContext';

// Mock AppCard component
const AppCard = ({ children, app, switchChecked, switchOnClick }) => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-medium">{app.name}</h3>
          <p className="text-sm text-gray-500">{app.description}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={switchChecked}
            onChange={(e) => switchOnClick(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      {children}
    </div>
  );
};

// Mock EventTypeAppCard component
const EventTypeAppCard = ({ app, eventType, disabled }) => {
  const { getAppData, setAppData } = React.useContext(EventTypeAppContext);
  const [enabled, setEnabled] = React.useState(false);

  return (
    <AppCard
      app={app}
      switchChecked={enabled}
      switchOnClick={(checked) => setEnabled(checked)}
    >
      {enabled && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Currency</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      )}
    </AppCard>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type",
        teamId: null,
        length: 30,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Sample App",
        description: "This is a sample app",
        installed: true,
        categories: ["calendar"],
        logo: "https://example.com/logo.png",
        publisher: "Sample Publisher",
        url: "https://example.com",
        variant: "OTHER",
        type: "sample_app_type"
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const mockAppContext = {
    getAppData: () => "mockSiteId",
    setAppData: () => {},
    disabled: state.disabled.value
  };

  return (
    <div className="p-4">
      <EventTypeAppContext.Provider value={mockAppContext}>
        <EventTypeAppCard 
          eventType={state.eventType.value}
          app={state.app.value}
          disabled={state.disabled.value}
        />
      </EventTypeAppContext.Provider>
    </div>
  );
}