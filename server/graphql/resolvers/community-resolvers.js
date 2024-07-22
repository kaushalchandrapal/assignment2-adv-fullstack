const Community = require('../../models/EmployeeCommmunity');

const communityResolver = {
  Query: {
    getCommunities: async () => {
      return await Community.find();
    },
  },
  Mutation: {
    addCommunity: async (_, { employeeName, departmentName, clubName, numberOfMembers }) => {
      const newCommunity = new Community({
        employeeName,
        departmentName,
        clubName,
        numberOfMembers,
      });
      return await newCommunity.save();
    },
  },
};

module.exports = communityResolver;
