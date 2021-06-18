import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from './../task.model';
export class GetTasksFilterDto {
    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}