import express from "express";
import { createAdmin, loginAdmin } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/add", createAdmin);
router.post("/login", loginAdmin);

export default router;
