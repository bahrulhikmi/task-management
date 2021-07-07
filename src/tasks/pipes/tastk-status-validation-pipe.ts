import { TaskStatus } from './../task-status.enum';
import { BadRequestException, PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {
    transform(value: any) {
        value = value.toUpperCase();

        if (!Object.values(TaskStatus).includes(value)) {
            throw new BadRequestException(`${value} is an invalid status.`)
        }

        return value;
    }
}