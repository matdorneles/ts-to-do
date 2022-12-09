import { DeleteTaskService } from "../services/DeleteTaskService";
import { Request, Response } from "express";

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    console.log(id);

    const deleteTaskService = new DeleteTaskService();
    const task = await deleteTaskService.execute({ id });

    return res.status(200).json(task);
  }
}

export { DeleteTaskController }
