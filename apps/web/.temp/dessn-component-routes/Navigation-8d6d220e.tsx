import React from 'react';
import { useParentState } from '../useIframeState';

const SimplifiedNavigation = ({ isPlatformNavigation }) => {
  const items = [
    { name: "event_types_page_title", href: "/event-types", icon: "link" },
    { name: "bookings", href: "/bookings/upcoming", icon: "calendar" },
    { name: "availability", href: "/availability", icon: "clock" },
    { name: "teams", href: "/teams", icon: "users" },
    { name: "apps", href: "/apps", icon: "grid" },
  ];

  return (
    <nav className="mt-2 flex-1 md:px-2 lg:mt-4 lg:px-0">
      {items.map((item) => (
        <div key={item.name} className="mb-2">
          <a href={item.href} className="flex items-center rounded-md px-3 py-2 text-sm font-medium">
            {item.name}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPlatformNavigation: {
      type: "boolean",
      value: false,
      label: "Is Platform Navigation",
    },
  });

  return (
    <SimplifiedNavigation isPlatformNavigation={state.isPlatformNavigation.value} />
  );
}