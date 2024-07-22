const { mergeResolvers } = require('@graphql-tools/merge');
const communityResolver = require('./resolvers/community-resolvers');
const employeeResolver = require('./resolvers/employee-resolvers');

const resolvers = mergeResolvers([communityResolver, employeeResolver]);

module.exports = resolvers;
