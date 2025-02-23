import { useOrgBranding } from '@calcom/features/ee/organizations/context/provider';

const CreateNewTeamPage = () => {
  let orgBranding;
  try {
    orgBranding = useOrgBranding();
  } catch (e) {
    // Provide default values if the provider is not available
    orgBranding = {
      theme: null,
      logo: null,
      brandColor: null,
      darkBrandColor: null,
      organizationName: "Default Organization",
      isLoading: false,
    };
  }

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default CreateNewTeamPage;