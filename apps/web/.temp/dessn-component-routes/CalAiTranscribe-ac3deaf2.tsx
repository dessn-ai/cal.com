import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParentState } from '../useIframeState';
import { CalAiTranscribe } from '../../modules/videos/ai/ai-transcribe';

// Create a context for Daily-co
const DailyContext = React.createContext({
  useDaily: () => ({
    updateCustomTrayButtons: () => {},
    startRecording: () => Promise.resolve(),
    stopRecording: () => Promise.resolve(),
    startTranscription: () => {},
    stopTranscription: () => {},
  }),
  useDailyEvent: () => {},
  useTranscription: () => ({
    isTranscribing: false,
  }),
  useRecording: () => ({
    isRecording: false,
  }),
});

// Create a context for Locale
const LocaleContext = React.createContext({
  t: (key: string) => key,
});

// Wrapper component to provide all necessary contexts
const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <DailyContext.Provider value={DailyContext}>
        <LocaleContext.Provider value={LocaleContext}>
          {children}
        </LocaleContext.Provider>
      </DailyContext.Provider>
    </RecoilRoot>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    transcript: {
      type: "string",
      value: "User1: Hello\nUser2: Hi there!\nUser1: How are you?",
      label: "Transcript",
    },
  });

  const [transcript] = React.useState(state.transcript.value);

  return (
    <PreviewWrapper>
      <CalAiTranscribe />
    </PreviewWrapper>
  );
}