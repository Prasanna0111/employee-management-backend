import {
  createAdminService,
  loginAdminService,
} from "../services/admin.service.js";

export const createAdmin = async (req, res, next) => {
  try {
    const { name, emailOrMobile, password } = req.body;

    if (!name || !emailOrMobile || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await createAdminService(req.body);

    res.status(201).json({ message: "Admin added successfully" });
  } catch (err) {
    next(err);
  }
};

export const loginAdmin = async (req, res, next) => {
  try {
    const { emailOrMobile, password } = req.body;
    await loginAdminService(emailOrMobile, password);
    res.status(200).json({
      success: true,
      message: "Login Successfull",
    });
  } catch (err) {
    next(err);
  }
};
