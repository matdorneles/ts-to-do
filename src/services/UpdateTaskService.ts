import prisma from "../prisma";

interface TaskRequest {
  id: string;
  title: string;
  body: string
}

class UpdateTaskService {
  async execute({id, title, body }: TaskRequest) {

    const task = await prisma.tasks.update({
      where: {
        id: id
      }, data: {
        title: title,
        body: body,
        updatedAt: new Date()
      }
    });

    if(!task) throw new Error("Update failed");

    return task;
  }
}

export { UpdateTaskService }