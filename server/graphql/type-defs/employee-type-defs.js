const { gql } = require('apollo-server-express');

const empolyeeTypeDefs = gql`
  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    currentStatus: Boolean!
  }

  type Query {
    employees: [Employee]
  }

  type Mutation {
    createEmployee(
      firstName: String!
      lastName: String!
      age: Int!
      dateOfJoining: String!
      title: String!
      department: String!
      employeeType: String!
    ): Employee
  }
`;

module.exports = empolyeeTypeDefs;
