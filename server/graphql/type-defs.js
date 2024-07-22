const { mergeTypeDefs } = require('@graphql-tools/merge');
const communityTypeDef = require('./type-defs/community-type-defs');
const employeeTypeDef = require('./type-defs/employee-type-defs');

const typeDefs = mergeTypeDefs([communityTypeDef, employeeTypeDef]);

module.exports = typeDefs;
