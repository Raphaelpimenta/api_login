import { Router } from "express";
import { UserController } from "./controllers/UserControler";

export const routes = Router()

const UserControl = new UserController()

routes.post('/user', UserControl.createUser)
routes.get('/user', UserControl.getAllUsers)