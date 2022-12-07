import { Request, Response } from "express";
import { GetTasksService } from "../services/GetTasksService";

class GetTasksController {
  async handle(req: Request, res: Response) {
    const getTasksService = new GetTasksService();

    const tasks = await getTasksService.execute();

    return res.status(200).json(tasks);
  }
}

export { GetTasksController }