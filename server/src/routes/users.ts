import express from "express";
import usersContoller from "../controllers/users";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, usersContoller.createUser);
router.put("/", jwtCheck, usersContoller.updateUser);

export default router;
