import React from 'react';
import { useParentState } from '../useIframeState';
import { ShellMainAppDir } from '../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    centered: {
      type: "boolean",
      value: false,
      label: "Centered",
    },
    title: {
      type: "string",
      value: "Sample Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Sample Description",
      label: "Description",
    },
    heading: {
      type: "string",
      value: "Sample Heading",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Sample Subtitle",
      label: "Subtitle",
    },
    headerClassName: {
      type: "string",
      value: "custom-header-class",
      label: "Header Class Name",
    },
    large: {
      type: "boolean",
      value: false,
      label: "Large",
    },
    flexChildrenContainer: {
      type: "boolean",
      value: false,
      label: "Flex Children Container",
    },
    isPublic: {
      type: "boolean",
      value: false,
      label: "Is Public",
    },
    withoutMain: {
      type: "boolean",
      value: false,
      label: "Without Main",
    },
    withoutSeo: {
      type: "boolean",
      value: false,
      label: "Without SEO",
    },
    smallHeading: {
      type: "boolean",
      value: false,
      label: "Small Heading",
    },
    isPlatformUser: {
      type: "boolean",
      value: false,
      label: "Is Platform User",
    },
    backPath: {
      type: "string",
      value: "/",
      label: "Back Path",
    },
  });

  return (
    <ShellMainAppDir
      centered={state.centered.value}
      title={state.title.value}
      description={state.description.value}
      heading={state.heading.value}
      subtitle={state.subtitle.value}
      headerClassName={state.headerClassName.value}
      large={state.large.value}
      flexChildrenContainer={state.flexChildrenContainer.value}
      isPublic={state.isPublic.value}
      withoutMain={state.withoutMain.value}
      withoutSeo={state.withoutSeo.value}
      smallHeading={state.smallHeading.value}
      isPlatformUser={state.isPlatformUser.value}
      backPath={state.backPath.value}
    >
      <div>Sample content for ShellMainAppDir</div>
    </ShellMainAppDir>
  );
}