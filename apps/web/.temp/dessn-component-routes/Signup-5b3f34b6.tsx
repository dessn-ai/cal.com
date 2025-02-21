import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Use React.lazy for dynamic import
const ImportedComponent = React.lazy(() => 
  import('../../modules/signup-view')
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error('Error loading signup module:', error);
      return {
        default: () => <div>Failed to load signup component</div>
      };
    })
);

export default function ComponentPreview() {
  try {
    const [state, setState] = useParentState({
      prepopulateFormValues: {
        type: "string",
        value: JSON.stringify({ email: "example@example.com", username: "exampleuser" }),
        label: "Prepopulate Form Values",
      },
      token: {
        type: "string",
        value: "exampleToken",
        label: "Token",
      },
      orgSlug: {
        type: "string",
        value: "exampleOrg",
        label: "Organization Slug",
      },
      isGoogleLoginEnabled: {
        type: "boolean",
        value: true,
        label: "Is Google Login Enabled",
      },
      isSAMLLoginEnabled: {
        type: "boolean",
        value: true,
        label: "Is SAML Login Enabled",
      },
      orgAutoAcceptEmail: {
        type: "string",
        value: "example@org.com",
        label: "Organization Auto Accept Email",
      },
      redirectUrl: {
        type: "string",
        value: "/example-redirect",
        label: "Redirect URL",
      },
      emailVerificationEnabled: {
        type: "boolean",
        value: true,
        label: "Email Verification Enabled",
      },
    });

    const props = {
      prepopulateFormValues: state.prepopulateFormValues.value ? JSON.parse(state.prepopulateFormValues.value) : undefined,
      token: state.token.value,
      orgSlug: state.orgSlug.value,
      isGoogleLoginEnabled: state.isGoogleLoginEnabled.value,
      isSAMLLoginEnabled: state.isSAMLLoginEnabled.value,
      orgAutoAcceptEmail: state.orgAutoAcceptEmail.value,
      redirectUrl: state.redirectUrl.value,
      emailVerificationEnabled: state.emailVerificationEnabled.value,
    };

    return (
      <div className="signup-preview-container">
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            Loading signup component...
          </div>
        }>
          <ImportedComponent {...props} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return (
      <div style={{ 
        padding: '20px', 
        margin: '20px', 
        border: '1px solid red',
        borderRadius: '4px',
        color: 'red' 
      }}>
        Error: Failed to render signup component. Please check the console for more details.
      </div>
    );
  }
}