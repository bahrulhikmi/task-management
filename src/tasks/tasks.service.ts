import { TaskRepository } from './task.repository';
import { stat } from 'fs';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) { }



    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async getTaskById(id: number): Promise<Task> {
        const foundTask = await this.taskRepository.findOne(id);

        if (!foundTask) {
            throw new NotFoundException(`Task with Id ${id} not found.`);
        }

        return foundTask;
    }

    async deleteTaskById(id: number): Promise<void> {
        const result = await this.taskRepository.delete(id);  
        
        if(result.affected === 0)
        {
            throw new NotFoundException(`Task with Id ${id} not found.`);
        }
    }

    async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        task.save()
        return task;
    }


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
