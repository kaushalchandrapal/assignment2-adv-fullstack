const { getAllEmployees, createEmployee } = require('../../controllers/employee-controller');

const resolvers = {
  Query: {
    employees: async () => await getAllEmployees(),
  },
  Mutation: {
    createEmployee: async (_, args) => await createEmployee(args),
  },
};

module.exports = resolvers;
