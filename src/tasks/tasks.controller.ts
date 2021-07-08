import { User } from './../auth/user.entity';
import { TaskStatusValidationPipe } from './pipes/tastk-status-validation-pipe';
import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    private logger = new Logger('TasksController');
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(        
        @Query(ValidationPipe) filterDto: GetTasksFilterDto,
        @GetUser() user: User): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto, user);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User
        ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto, user);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number,  @GetUser() user: User): Promise<Task> {
        return this.tasksService.getTaskById(id, user);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
       return this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id', ParseIntPipe) id: number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @GetUser() user: User): Promise<Task> {            
        return this.tasksService.updateTaskStatus(id, status, user);
    }


}
