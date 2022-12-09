import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { id, title, body } = req.body;

    const updateTaskService = new UpdateTaskService()

    const task = await updateTaskService.execute({ id, title, body });

    return res.status(200).json(task);
  }
}

export { UpdateTaskController }