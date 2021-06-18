import { stat } from 'fs';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const { title, description } = createTaskDto;

    //     const task: Task = {
    //         id: uuid.v1(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };

    //     this.tasks.push(task);
    //     return task;
    // }

    // getTaskById(id: string): Task {
    //     const foundTask = this.tasks.find(x => x.id === id);

    //     if (!foundTask) {
    //         throw new NotFoundException(`Task with Id ${id} not found.`);
    //     }

    //     return foundTask;
    // }

    // deleteTaskById(id: string) {
    //     const task = this.getTaskById(id);
    //     this.tasks.splice(this.tasks.findIndex(x => x.id === task.id), 1);
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;

    //     return task;
    // }


    // getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;

    //     let tasks = this.getAllTasks();

    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }

    //     if (search) {
    //         tasks = tasks.filter(task => task.title.includes(search)
    //             || task.description.includes(search))
    //     }

    //     return tasks;
    // }
}
