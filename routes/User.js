import express from "express";

import { userRegistration } from "../controllers/UserController";

const userRouter = express.Router();

// POST /API/ADDUSER -> SEND ALL THE DETAILS IN THE FORM, REQUEST.BODY - OLD ROUTE
//changed to /api/user/register
router.post("/api/user/register", userRegistration);

export default userRouter;
