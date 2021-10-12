const { buildSchema } = require("graphql");

const userData = require("../MOCK_DATA");

const schema = buildSchema(`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  } 

  type Query {
    getUsers: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
  }
`);

const root = {
  getUsers: () => {
    return userData;
  },
  addUser: ({ ...args }) => {
    const newUser = { ...args, id: userData.length + 1 };
    userData.push(newUser);
    return newUser;
  },
};

module.exports = {
  schema,
  root,
};
