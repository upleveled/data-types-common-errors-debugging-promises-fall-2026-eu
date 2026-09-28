const roles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'noRights',
};

const teamMembers = [
  {
    id: 1,
    name: 'Kevin',
    jobPosition: 'Developer',
    role: roles.editor,
    pets: [
      {
        name: 'Ronald',
        type: 'lizard',
      },
      {
        name: 'Sabine',
        type: 'cat',
      },
    ],
  },
  {
    id: 2,
    name: 'Kevin 2',
    jobPosition: 'Marketer',
    role: roles.noRights,
    pets: [],
  },
];

console.log(teamMembers.map((teamMember) => teamMember.name));

// Add a new team member (mutation version)
teamMembers.push({
  id: 3,
  name: 'Kevin 3',
  jobPosition: 'CEO',
  role: roles.noRights,
  pets: [],
});

console.log(teamMembers.map((teamMember) => teamMember.name));

// Add a new team member (non-mutation version)
const newTeamMembers = [
  ...teamMembers,
  {
    id: 4,
    name: 'Kevin 4',
    jobPosition: 'CTO',
    role: roles.admin,
    pets: [],
  },
];

console.log(newTeamMembers.map((teamMember) => teamMember.name));

// Update the name of the second team member (mutation version)
teamMembers[1].name = 'Karl';

console.log(teamMembers.map((teamMember) => teamMember.name));

// Update the name of the second team member (mutation version using find)
const teamMember2 = teamMembers.find((teamMember) => {
  return teamMember.id === 2;
});
teamMember2.name = 'Karl';

// Update the name of the second team member (non-mutation version)
const newTeamMembers2 = teamMembers.map((teamMember) => {
  // Make a copy of the single team member, because if don't,
  // it will update the object in the `teamMember` array
  const newTeamMember = {
    ...teamMember,
  };

  if (newTeamMember.name === 'Karl') {
    newTeamMember.name = 'Karl 2';
  }

  return newTeamMember;
});

console.log(newTeamMembers2.map((teamMember) => teamMember.name));

console.log(teamMembers.map((teamMember) => teamMember.name));
