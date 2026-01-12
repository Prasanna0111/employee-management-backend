import {
  addEmployeeService,
  addEmplyoeesService,
  deleteEmployeeService,
  editEmployeeService,
  getEmployeesService,
} from "../services/employee.service.js";

export const createEmployees = async (req, res, next) => {
  try {
    await addEmplyoeesService(req.body.employees);
    res.status(201).json({
      success: true,
      message: "Employees added successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await getEmployeesService();
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      totalEmployees: employees.length,
      activeEmployees: employees.filter((emp) => emp.isActive === true).length,
      inActiveEmployees: employees.filter((emp) => emp.isActive === false)
        .length,
      employees,
    });
  } catch (err) {
    next(err);
  }
};

export const addEmployee = async (req, res, next) => {
  console.log(req.body, "in");
  try {
    const { id, image, name, gender, dob, state, isActive } = req.body;
    console.log(req.body, "out");
    if (
      !id ||
      !image ||
      !name ||
      !gender ||
      !dob ||
      !state ||
      isActive === undefined
    ) {
      res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    await addEmployeeService(req.body);
    res.status(201).json({
      success: true,
      message: "Employee added successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    console.log(req.params);
    const { empId } = req.params;
    console.log(empId, "empid");
    await deleteEmployeeService(empId);
    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const editEmployee = async (req, res, next) => {
  try {
    const { empId } = req.params;
    await editEmployeeService(empId, req.body);
    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
    });
  } catch (err) {
    next(err);
  }
};
