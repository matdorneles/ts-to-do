import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { GetTasksController } from "./controllers/GetTasksController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";

const router = Router();

router.post('/tasks', new CreateTaskController().handle);
router.get('/tasks', new GetTasksController().handle);
router.patch('/tasks', new UpdateTaskController().handle);

export { router }