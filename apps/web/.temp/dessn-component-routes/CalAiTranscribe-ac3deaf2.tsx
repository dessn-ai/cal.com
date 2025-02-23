import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParentState } from '../useIframeState';
import { CalAiTranscribe } from '../../modules/videos/ai/ai-transcribe';

// Mock implementations without using Jest
const mockDailyHooks = {
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
};

// Mock useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Override the imports directly
React.createContext = React.createContext || (() => ({
  Provider: ({ children }) => children,
  Consumer: ({ children }) => children,
}));

// Mock the modules at the top level
const originalReactUseState = React.useState;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    transcript: {
      type: "string",
      value: "User1: Hello\nUser2: Hi there!\nUser1: How are you?",
      label: "Transcript",
    },
  });

  // Use try-catch to handle potential module import errors
  try {
    // Override the hooks that the component might use
    (window as any).useDaily = mockDailyHooks.useDaily;
    (window as any).useDailyEvent = mockDailyHooks.useDailyEvent;
    (window as any).useTranscription = mockDailyHooks.useTranscription;
    (window as any).useRecording = mockDailyHooks.useRecording;
    (window as any).useLocale = mockUseLocale;
  } catch (error) {
    console.warn('Error setting up mocks:', error);
  }

  // Use a simple state override instead of Jest mock
  const transcriptState = originalReactUseState(state.transcript.value);

  return (
    <RecoilRoot>
      <CalAiTranscribe />
    </RecoilRoot>
  );
}