import bcrypt from "bcrypt";
import { Admin } from "../models/admin.modal.js";

export const createAdminService = async (adminData) => {
  const { name, emailOrMobile, password } = adminData;

  const existingAdmin = await Admin.findOne({ emailOrMobile });
  if (existingAdmin) {
    console.log(existingAdmin, "fghj");
    const error = new Error("Admin already exists");
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await Admin.create({
    name,
    emailOrMobile,
    password: hashedPassword,
  });
};

export const loginAdminService = async (emailOrMobile, password) => {
  const existingAdmin = await Admin.findOne({ emailOrMobile });
  if (!existingAdmin) {
    const error = new Error("Admin not exists");
    error.statusCode = 401;
    throw error;
  }

  const passwordMatch = await bcrypt.compare(password, existingAdmin.password);
  if (!passwordMatch) {
    const error = new Error("Invalid Credentials");
    error.statusCode = 401;
    throw error;
  }
};
