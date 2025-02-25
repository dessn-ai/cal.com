import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParentState } from '../useIframeState';
import { CalAiTranscribe } from '../../modules/videos/ai/ai-transcribe';

// Create mock context/values without using Jest
const mockDailyContext = {
  updateCustomTrayButtons: () => {},
  startRecording: () => Promise.resolve(),
  stopRecording: () => Promise.resolve(),
  startTranscription: () => {},
  stopTranscription: () => {},
  participants: {},
  room: { name: 'test-room' },
};

// Mock the necessary hooks using direct implementation
const DailyContext = React.createContext(mockDailyContext);

// Override the required hooks from @daily-co/daily-react
const useDaily = () => React.useContext(DailyContext);
const useDailyEvent = () => {};
const useTranscription = () => ({ 
  isTranscribing: false,
  startTranscription: () => {},
  stopTranscription: () => {},
  error: null,
});
const useRecording = () => ({ 
  isRecording: false,
  startRecording: () => Promise.resolve(),
  stopRecording: () => Promise.resolve(),
  error: null,
});

// Mock the locale hook
const useLocale = () => ({
  t: (key: string) => key,
});

// Create a wrapper component to provide the necessary context
const DailyProvider = ({ children }: { children: React.ReactNode }) => (
  <DailyContext.Provider value={mockDailyContext}>
    {children}
  </DailyContext.Provider>
);

// Mock TroubleshooterStoreProvider
const TroubleshooterStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(React.Fragment, null, children);
};

// Override the modules at runtime
(window as any).useDaily = useDaily;
(window as any).useDailyEvent = useDailyEvent;
(window as any).useTranscription = useTranscription;
(window as any).useRecording = useRecording;
(window as any).useLocale = useLocale;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    transcript: {
      type: "string",
      value: "User1: Hello\nUser2: Hi there!\nUser1: How are you?",
      label: "Transcript",
    },
  });

  // Use React.useState directly without mocking
  const [transcript] = React.useState(state.transcript.value);

  return (
    <RecoilRoot>
      <TroubleshooterStoreProvider>
        <DailyProvider>
          <CalAiTranscribe />
        </DailyProvider>
      </TroubleshooterStoreProvider>
    </RecoilRoot>
  );
}