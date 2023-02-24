import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoEntity } from './entites/todo.entity';
import { Todostatus } from './enums/todostatus';
import { TodoService } from './todo.service';
import { addtodoDto } from './dto/addtodo.dto';
import { updatetodoDto } from './dto/update.dto';
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  gettodo(): TodoEntity[] {
    return this.todoService.gettodos();
  }
  @Post()
  addtodo(@Body() addtodo: addtodoDto): TodoEntity {
    return this.todoService.addtodos(addtodo);
  }
  @Get(':id')
  getTodoById(@Param('id') id: string): TodoEntity {
    return this.todoService.gettodobyid(id);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deletetodo(id);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string,@Body() updateTodo: updatetodoDto): TodoEntity {
    return this.todoService.updateTodo(id, updateTodo);
  }
}
