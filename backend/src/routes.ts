import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { GetTasksController } from "./controllers/GetTasksController";
import { UpdateStatusController } from "./controllers/UpdateStatusController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";

const router = Router();

router.post('/tasks', new CreateTaskController().handle);
router.get('/tasks', new GetTasksController().handle);
router.patch('/tasks', new UpdateTaskController().handle);
router.patch('/tasks/status', new UpdateStatusController().handle);
router.delete('/tasks', new DeleteTaskController().handle);

export { router }