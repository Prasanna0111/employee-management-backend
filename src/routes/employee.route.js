import express from "express";
import {
  addEmployee,
  createEmployees,
  deleteEmployee,
  editEmployee,
  getEmployees,
} from "../controllers/employee.controller.js";

const router = express.Router();
router.post("/add/employees", createEmployees);
router.get("/employees", getEmployees);
router.post("/add/employee", addEmployee);
router.delete("/delete/:empId", deleteEmployee);
router.put("/edit/:empId", editEmployee);

export default router;
