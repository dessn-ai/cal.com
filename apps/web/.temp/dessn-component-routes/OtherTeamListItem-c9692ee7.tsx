import React from 'react';
import { useParentState } from '../useIframeState';
import { Avatar, Button, ButtonGroup, ConfirmationDialogContent, Dialog, DialogTrigger, Dropdown, DropdownItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, showToast, Tooltip } from '@calcom/ui';
import { getPlaceholderAvatar } from "@calcom/lib/defaultAvatarImage";

// Create a mock component that doesn't use the branding hook
const MockOtherTeamListItem = (props: any) => {
  const { team, isPending, hideDropdown, setHideDropdown, onActionSelect } = props;
  
  if (!team) return null;

  const teamInfo = (
    <div className="item-center flex px-5 py-5">
      <Avatar
        size="md"
        imageSrc={getPlaceholderAvatar(team.logoUrl, team.name)}
        alt="Team Logo"
        className="inline-flex justify-center"
      />
      <div className="ms-3 inline-block truncate">
        <span className="text-default text-sm font-bold">{team.name}</span>
        <span className="text-muted block text-xs">
          {team.slug
            ? `${process.env.NEXT_PUBLIC_WEBSITE_URL}/team/${team.slug}`
            : "Unpublished team"}
        </span>
      </div>
    </div>
  );

  return (
    <li>
      <div className="hover:bg-muted group flex items-center justify-between transition">
        {teamInfo}
        <div className="px-5 py-5">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <ButtonGroup combined>
              {team.slug && (
                <Tooltip content="Copy link">
                  <Button
                    color="secondary"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/team/${team.slug}`
                      );
                      showToast("Link copied", "success");
                    }}
                    variant="icon"
                    StartIcon="link"
                  />
                </Tooltip>
              )}
              <Dropdown>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="radix-state-open:rounded-r-md"
                    type="button"
                    color="secondary"
                    variant="icon"
                    StartIcon="ellipsis"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent hidden={hideDropdown}>
                  <DropdownMenuItem>
                    <DropdownItem
                      type="button"
                      href={`/settings/teams/other/${team.id}/profile`}
                      StartIcon="pencil">
                      Edit team
                    </DropdownItem>
                  </DropdownMenuItem>

                  {team.slug && (
                    <DropdownMenuItem>
                      <DropdownItem
                        type="button"
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/team/other/${team.slug}`}
                        StartIcon="external-link">
                        Preview team
                      </DropdownItem>
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem>
                    <Dialog open={hideDropdown} onOpenChange={setHideDropdown}>
                      <DialogTrigger asChild>
                        <DropdownItem
                          color="destructive"
                          type="button"
                          StartIcon="trash"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}>
                          Disband team
                        </DropdownItem>
                      </DialogTrigger>
                      <ConfirmationDialogContent
                        variety="danger"
                        title="Disband team"
                        confirmBtnText="Confirm disband team"
                        isPending={isPending}
                        onConfirm={() => {
                          onActionSelect("disband");
                        }}>
                        Are you sure you want to disband this team?
                      </ConfirmationDialogContent>
                    </Dialog>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </Dropdown>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Team",
        slug: "sample-team",
        logoUrl: "https://example.com/logo.png"
      }),
      label: "Team"
    },
    key: {
      type: "number",
      value: 1,
      label: "Key"
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending"
    },
    hideDropdown: {
      type: "boolean",
      value: false,
      label: "Hide Dropdown"
    }
  });

  const onActionSelect = (text: string) => {
    console.log("Action selected:", text);
  };

  const setHideDropdown = (value: boolean) => {
    setState("hideDropdown", value);
  };

  return (
    <MockOtherTeamListItem
      team={JSON.parse(state.team.value)}
      key={state.key.value}
      onActionSelect={onActionSelect}
      isPending={state.isPending.value}
      hideDropdown={state.hideDropdown.value}
      setHideDropdown={setHideDropdown}
    />
  );
}