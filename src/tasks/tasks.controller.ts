import { TaskStatusValidationPipe } from './pipes/tastk-status-validation-pipe';
import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {

    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getTasksWithFilter(filterDto);
    //     }

    //     return this.tasksService.getAllTasks();
    // }

    @UsePipes(ValidationPipe)
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
       return this.tasksService.deleteTaskById(id);
    }

    // @Patch('/:id/status')
    // updateTaskStatus(@Param('id') id: string,
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus) {

    //     return this.tasksService.updateTaskStatus(id, status);
    // }


}
