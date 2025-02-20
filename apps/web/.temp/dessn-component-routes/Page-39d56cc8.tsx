import * as React from 'react';

export default function ComponentPreview() {
  const [profileType, setProfileType] = React.useState('user');
  const [isEmbed, setIsEmbed] = React.useState(true);

  const mockUserProps = {
    name: "John Doe",
    username: "johndoe",
    bio: "A safe bio",
    isEmbed: isEmbed
  };

  const mockTeamProps = {
    name: "Team Name",
    slug: "team-slug",
    isEmbed: isEmbed
  };

  const props = profileType === "user" ? mockUserProps : mockTeamProps;

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4 space-y-4">
        <div>
          <label className="block mb-2">View Type:</label>
          <select 
            value={profileType}
            onChange={(e) => setProfileType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="user">User Profile</option>
            <option value="team">Team Profile</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={isEmbed}
              onChange={(e) => setIsEmbed(e.target.checked)}
              className="mr-2"
            />
            Is Embed View
          </label>
        </div>
      </div>

      <div className="border rounded-lg p-4 mt-4">
        <h2 className="text-xl font-bold mb-4">
          {profileType === 'user' ? 'User Profile' : 'Team Profile'}
        </h2>
        
        {profileType === 'user' ? (
          <div className="space-y-2">
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Username:</strong> {props.username}</p>
            <p><strong>Bio:</strong> {props.bio}</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p><strong>Team Name:</strong> {props.name}</p>
            <p><strong>Team Slug:</strong> {props.slug}</p>
          </div>
        )}
        
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <p><strong>View Mode:</strong> {isEmbed ? 'Embed View' : 'Normal View'}</p>
        </div>
      </div>
    </div>
  );
}