import React from 'react';
import { useParentState } from '../useIframeState';
import { DailyVideoDownloadTranscriptEmail } from '../../../../packages/emails/src/templates/DailyVideoDownloadTranscriptEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "string",
      value: "en",
      label: "Language",
    },
    transcriptDownloadLinks: {
      type: "string",
      value: "https://example.com/transcript1.pdf,https://example.com/transcript2.pdf",
      label: "Transcript Download Links (comma-separated)",
    },
    title: {
      type: "string",
      value: "Meeting Transcript",
      label: "Title",
    },
    date: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Date",
    },
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
  });

  const mockLanguage = (key: string, params?: Record<string, string>) => {
    const translations: Record<string, string> = {
      "download_transcript_email_subject": `Download transcript for ${params?.title} on ${params?.date}`,
      "download_your_transcripts": "Download Your Transcripts",
      "hi_user_name": `Hi ${params?.name}`,
      "you_can_download_transcript_from_attachments": "You can download the transcript from the attachments.",
      "happy_scheduling": "Happy scheduling",
      "the_calcom_team": "The Cal.com team",
    };
    return translations[key] || key;
  };

  return (
    <DailyVideoDownloadTranscriptEmail
      language={mockLanguage}
      transcriptDownloadLinks={state.transcriptDownloadLinks.value.split(',')}
      title={state.title.value}
      date={state.date.value}
      name={state.name.value}
    />
  );
}