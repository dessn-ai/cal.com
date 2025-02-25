import React from 'react';
import { useParentState } from '../useIframeState';
import Link from 'next/link';
import { Icon } from "@calcom/ui";
import { WEBSITE_URL, DOCS_URL, IS_CALCOM } from "@calcom/lib/constants";

// Mock translation function
const mockT = (key: string) => key;

const PageType = {
  ORG: "ORG",
  TEAM: "TEAM",
  USER: "USER",
  OTHER: "OTHER",
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: "string",
      value: "/example-path",
      label: "Pathname",
    },
    host: {
      type: "string",
      value: "example.com",
      label: "Host",
    },
    isInsights: {
      type: "boolean",
      value: false,
      label: "Is Insights Page",
    },
  });

  const links = [
    {
      title: mockT("enterprise"),
      description: "Learn more about organizations and subdomains in our enterprise plan.",
      icon: "shield" as const,
      href: `${WEBSITE_URL}/enterprise`,
    },
    {
      title: mockT("documentation"),
      description: mockT("documentation_description"),
      icon: "file-text" as const,
      href: DOCS_URL,
    },
    {
      title: mockT("blog"),
      description: mockT("blog_description"),
      icon: "book-open" as const,
      href: `${WEBSITE_URL}/blog`,
    },
  ];

  if (state.isInsights.value) {
    return (
      <div className="min-h-screen bg-white px-4" data-testid="404-page">
        <main className="mx-auto max-w-xl pb-6 pt-16 sm:pt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-black">{mockT("error_404")}</p>
            <h1 className="font-cal mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {mockT("feature_currently_disabled")}
            </h1>
          </div>
          <div className="mt-12">
            <div className="mt-8">
              <Link href={WEBSITE_URL} className="text-base font-medium text-black hover:text-gray-500">
                {mockT("or_go_back_home")}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-default min-h-screen px-4" data-testid="404-page">
      <main className="mx-auto max-w-xl pb-6 pt-16 sm:pt-24">
        <div className="text-center">
          <p className="text-emphasis text-sm font-semibold uppercase tracking-wide">{mockT("error_404")}</p>
          <h1 className="font-cal text-emphasis mt-2 text-4xl font-extrabold sm:text-5xl">
            {mockT("page_doesnt_exist")}
          </h1>
          <span className="mt-2 inline-block text-lg">{mockT("check_spelling_mistakes_or_go_back")}</span>
        </div>
        <div className="mt-12">
          <h2 className="text-subtle text-sm font-semibold uppercase tracking-wide">{mockT("popular_pages")}</h2>
          <ul role="list" className="border-subtle divide-subtle divide-y">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="px-4 py-2">
                <a href={link.href} className="relative flex items-start space-x-4 py-6 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <span className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon name={link.icon} className="text-default h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-emphasis text-base font-medium">
                      <span className="focus-within:ring-empthasis rounded-sm focus-within:ring-2 focus-within:ring-offset-2">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {link.title}
                      </span>
                    </h3>
                    <p className="text-subtle text-base">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <Icon name="chevron-right" className="text-muted h-5 w-5" aria-hidden="true" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href={WEBSITE_URL} className="hover:text-subtle text-emphasis text-base font-medium">
              {mockT("or_go_back_home")}
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}