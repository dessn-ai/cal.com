import React from 'react';
import { useParentState } from '../useIframeState';
import { DailyVideoDownloadRecordingEmail } from '../../../../packages/emails/src/templates/DailyVideoDownloadRecordingEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "string",
      value: "en",
      label: "Language",
    },
    downloadLink: {
      type: "string",
      value: "https://example.com/download",
      label: "Download Link",
    },
    title: {
      type: "string",
      value: "Meeting Recording",
      label: "Title",
    },
    date: {
      type: "string",
      value: new Date().toLocaleDateString(),
      label: "Date",
    },
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
  });

  const mockLanguage = (key: string, options?: Record<string, string>) => {
    return key + (options ? ` ${JSON.stringify(options)}` : '');
  };

  return (
    <DailyVideoDownloadRecordingEmail
      language={mockLanguage}
      downloadLink={state.downloadLink.value}
      title={state.title.value}
      date={state.date.value}
      name={state.name.value}
    />
  );
}