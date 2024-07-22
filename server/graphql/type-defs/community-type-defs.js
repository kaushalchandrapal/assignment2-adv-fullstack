// src/typeDefs/communityTypeDef.js
const { gql } = require('apollo-server-express');

const communityTypeDef = gql`
  type Community {
    id: ID!
    employeeName: String!
    departmentName: String!
    clubName: String!
    numberOfMembers: Int!
  }

  type Query {
    getCommunities: [Community]
  }

  type Mutation {
    addCommunity(
      employeeName: String!
      departmentName: String!
      clubName: String!
      numberOfMembers: Int!
    ): Community
  }
`;

module.exports = communityTypeDef;
