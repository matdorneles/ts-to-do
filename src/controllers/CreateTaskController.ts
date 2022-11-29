import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService"

class CreateTaskController {
    async handle(req: Request, res: Response) {
        const { title, body } = req.body;

        const createTask = new CreateTaskService();
        const task = createTask.execute({ title, body });

        return res.status(201).json(task);
    }
}

export { CreateTaskController }