import { UpdateStatusService } from "../services/UpdateStatusService";
import { Request, Response } from "express";

class UpdateStatusController {
  async handle(req: Request, res: Response) {
    const { id, status } = req.body;

    const updateStatusService = new UpdateStatusService();
    const tasks = await updateStatusService.execute({ id, status });

    return res.status(200).json(tasks);
  }
}

export { UpdateStatusController }
