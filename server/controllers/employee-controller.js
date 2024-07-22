const Employee = require('../models/Employee');

const getAllEmployees = async () => {
  return await Employee.find();
};

const createEmployee = async (args) => {
  const employee = new Employee({ ...args, currentStatus: true });
  return await employee.save();
};

module.exports = {
  getAllEmployees,
  createEmployee,
};
