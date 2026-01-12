import express from "express";
import cors from "cors";
import adminRoutes from "./routes/admin.route.js";
import employeeRoutes from "./routes/employee.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/empmgmt/admin", adminRoutes);
app.use("/api/empmgmt/employee", employeeRoutes);

app.use(errorHandler);

export default app;
