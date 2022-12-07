import prisma from "../prisma";

class GetTasksService {
  async execute() {
    const tasks = await prisma.task.findMany();

    if(tasks === undefined || tasks.length == 0) throw new Error("There are no tasks to show");

    return tasks;
  }
}

export { GetTasksService }