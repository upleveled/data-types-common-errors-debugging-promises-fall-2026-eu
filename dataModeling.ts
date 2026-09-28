// team list, with each team member having:
// - name
// - job position
// - role (editor, admin, no rights)
// - pets (each pet has name and type)

const roles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'noRights',
};

type TeamMember = {
  id: number;
  name: string;
  jobPosition: string;
  role: string;
  pets: {
    name: string;
    type: string;
  }[];
};

// array of objects
const teamMembers: TeamMember[] = [
  // object
  {
    id: 1, // number (or string for uuid eg. 0762283a-0896-4a20-9d92-b86eb1708243)
    name: 'Kevin', // string
    jobPosition: 'Developer', // string
    role: roles.editor, // string
    // array of objects
    pets: [
      {
        name: 'Ronald', // string
        type: 'lizard', // string
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

console.log(typeof teamMembers); // object! very confusing
console.log(Array.isArray(teamMembers)); // check for array with this
// ?. (optional chaining operator) prevents errors such as:
// TypeError: Cannot read properties of undefined (reading 'jobPosition')
console.log(typeof teamMembers[10]?.jobPosition);
