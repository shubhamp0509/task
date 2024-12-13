import { Router } from "express";
import { getUsers } from "./userController";

const router = Router();

router.get("/users", getUsers);

export default router;
