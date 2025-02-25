import React from 'react';
import { useParentState } from '../useIframeState';
import dayjs from 'dayjs';

// Create a simplified Day component since we can't access the original package
const Day = ({
  active,
  date,
  disabled,
  away,
  emoji,
  customClassName,
  onClick
}) => {
  const dateStr = dayjs(date).format('D');
  
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`day-container ${active ? 'active' : ''} ${away ? 'away' : ''} ${customClassName?.dayContainer || ''}`}
      style={{
        padding: '8px',
        margin: '2px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        background: active ? '#e2e8f0' : 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }}
    >
      <span>{dateStr}</span>
      {emoji && <span style={{ marginLeft: '4px' }}>{emoji}</span>}
    </button>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    active: {
      type: "boolean",
      value: false,
      label: "Active",
    },
    date: {
      type: "string",
      value: dayjs().format('YYYY-MM-DD'),
      label: "Date",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    away: {
      type: "boolean",
      value: false,
      label: "Away",
    },
    emoji: {
      type: "string",
      value: "🏖️",
      label: "Emoji",
    },
    customClassName: {
      type: "string",
      value: "",
      label: "Custom Class Name",
    },
  });

  return (
    <Day
      active={state.active.value}
      date={dayjs(state.date.value)}
      disabled={state.disabled.value}
      away={state.away.value}
      emoji={state.emoji.value}
      customClassName={{
        dayContainer: state.customClassName.value,
        dayActive: state.customClassName.value,
      }}
      onClick={() => console.log("Day clicked")}
    />
  );
}