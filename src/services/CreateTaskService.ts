import prisma from "../prisma";

interface TaskRequest {
    title: string;
    body: string
}

class CreateTaskService {
    async execute({ title, body }: TaskRequest) {
    //    const task = await prisma.task.create({
    //     data: {
    //         title: title,
    //         body: body
    //     }
    //    });
        const task = { title, body }

       return task;
    }
}

export { CreateTaskService }