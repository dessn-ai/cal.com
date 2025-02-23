import React from 'react';
import { useParentState } from '../useIframeState';
import { Icon, List } from "@calcom/ui";
import classNames from "@calcom/lib/classNames";

// Mock AppConnectionItem component
const AppConnectionItem = ({ 
  title, 
  description, 
  logo, 
  installed, 
  isDefault 
}) => {
  return (
    <div className="flex items-center p-4">
      {logo && <img src={logo} alt={title} className="h-8 w-8 mr-3" />}
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {installed && <span className="ml-auto text-green-500">Connected</span>}
      {isDefault && <span className="ml-2 text-sm text-gray-500">(Default)</span>}
    </div>
  );
};

// Mock video apps data
const mockVideoApps = [
  {
    name: "Zoom",
    slug: "zoom",
    logo: "https://cal.com/app-store/zoom/icon.svg",
    description: "Video Conferencing",
    userCredentialIds: [],
    type: "zoom_video",
  },
  {
    name: "Google Meet",
    slug: "google-meet",
    logo: "https://cal.com/app-store/googlemeet/icon.svg",
    description: "Video Conferencing by Google",
    userCredentialIds: ["1"],
    type: "google_video",
  }
];

// Simplified ConnectedVideoStep
const SimplifiedConnectedVideoStep = ({ nextStep }) => {
  const hasAnyInstalledVideoApps = mockVideoApps.some(
    (item) => item.userCredentialIds.length > 0
  );

  return (
    <>
      <List className="bg-default border-subtle divide-subtle mx-1 max-h-[45vh] divide-y overflow-y-scroll rounded-md border p-0 sm:mx-0">
        {mockVideoApps.map((item) => (
          <li key={item.name}>
            <AppConnectionItem
              type={item.type}
              title={item.name}
              isDefault={false}
              description={item.description}
              logo={item.logo}
              installed={item.userCredentialIds.length > 0}
            />
          </li>
        ))}
      </List>

      <button
        type="button"
        data-testid="save-video-button"
        className={classNames(
          "text-inverted border-inverted bg-inverted mt-8 flex w-full flex-row justify-center rounded-md border p-2 text-center text-sm",
          !hasAnyInstalledVideoApps ? "cursor-not-allowed opacity-20" : ""
        )}
        disabled={!hasAnyInstalledVideoApps}
        onClick={() => nextStep()}>
        Next Step
        <Icon name="arrow-right" className="ml-2 h-4 w-4 self-center" aria-hidden="true" />
      </button>
    </>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    nextStep: {
      type: "boolean",
      value: false,
      label: "Trigger Next Step",
    },
  });

  const handleNextStep = () => {
    setState('nextStep', true);
    console.log('Next step triggered');
  };

  return (
    <div className="w-full">
      <SimplifiedConnectedVideoStep nextStep={handleNextStep} />
    </div>
  );
}