import React from 'react';
import { useParentState } from '../useIframeState';
import { CalAiTranscribe } from '../../modules/videos/ai/ai-transcribe';


// Mock the necessary hooks and functions
const mockUseDaily = () => ({
  updateCustomTrayButtons: () => {},
  startRecording: () => Promise.resolve(),
  stopRecording: () => Promise.resolve(),
  startTranscription: () => {},
  stopTranscription: () => {},
});

const mockUseTranscription = () => ({
  isTranscribing: false,
});

const mockUseRecording = () => ({
  isRecording: false,
});

const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Mock the hooks
jest.mock('@daily-co/daily-react', () => ({
  useDaily: mockUseDaily,
  useDailyEvent: () => {},
  useTranscription: mockUseTranscription,
  useRecording: mockUseRecording,
}));

jest.mock('@calcom/lib/hooks/useLocale', () => ({
  useLocale: mockUseLocale,
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    transcript: {
      type: "string",
      value: "User1: Hello\nUser2: Hi there!\nUser1: How are you?",
      label: "Transcript",
    },
  });

  // Override the useState to use our mocked transcript
  React.useState = jest.fn().mockReturnValue([state.transcript.value, () => {}]);

  return <CalAiTranscribe />;
}