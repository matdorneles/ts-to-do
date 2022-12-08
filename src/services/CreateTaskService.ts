import prisma from "../prisma";

interface TaskRequest {
    title: string;
    body: string
}

class CreateTaskService {
    async execute({ title, body }: TaskRequest) {
       const task = await prisma.tasks.create({
        data: {
            title: title,
            body: body
        }
       });

       return task;
    }
}

export { CreateTaskService }