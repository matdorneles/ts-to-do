import prisma from "../prisma";

interface TaskRequest {
  id: string;
  status: string
}

class UpdateStatusService {
  async execute({ id, status }: TaskRequest) {
    const task = await prisma.tasks.update({
      where: {
        id: id
      }, data: {
        status: status
      }
    });

    return task;
  }
}

export { UpdateStatusService }
