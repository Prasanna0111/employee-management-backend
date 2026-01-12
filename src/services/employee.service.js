import { Employee } from "../models/employee.modal.js";

export const addEmplyoeesService = async (employees) => {
  if (!employees.length) {
    const error = new Error("No Data found to add");
    error.statusCode = 400;
    throw error;
  }
  return await Employee.insertMany(employees);
};

export const getEmployeesService = async () => {
  return await Employee.find();
};

export const addEmployeeService = async (employee) => {
  console.log(employee, "employeeeee");
  const existingEmp = await Employee.findOne({ id: employee.id });
  if (existingEmp) {
    const error = new Error("Employee already exists");
    error.statusCode = 400;
    throw error;
  }
  return await Employee.create(employee);
};

export const deleteEmployeeService = async (empId) => {
  const employee = await Employee.findOne({ id: empId });
  if (!employee) {
    const error = new Error("Employee not exists");
    error.statusCode = 400;
    throw error;
  }
  return await Employee.deleteOne({ id: empId });
};

export const editEmployeeService = async (empId, payload) => {
  const result = await Employee.updateOne(
    { id: empId },
    { $set: payload },
    { runValidators: true }
  );

  if (result.matchedCount === 0) {
    const error = new Error("Employee not found");
    error.statusCode = 404;
    throw error;
  }

  return result;
};
