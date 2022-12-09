import prisma from "../prisma";

interface TaskRequest {
  id: string
}

class DeleteTaskService {
  async execute({ id }: TaskRequest) {
    const task = await prisma.tasks.delete({
      where: { id: id }
    });

    return task;
  }
}

export { DeleteTaskService }