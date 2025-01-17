import { Router, Request, Response } from "express";
import {body, query} from "express-validator";
import * as GroupController from "../Controllers/GroupController"

const GroupRouter = Router();

GroupRouter.post('/group/create/:userId',GroupController.createGroup)
GroupRouter.patch('/group/patch/:userId',GroupController.goGroup)

export {GroupRouter};