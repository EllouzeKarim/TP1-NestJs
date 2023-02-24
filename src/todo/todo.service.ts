import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TodoEntity } from './entites/todo.entity';
import { addtodoDto } from './dto/addtodo.dto';
import { Todostatus } from './enums/todostatus';
import { v4 as uuidv4 } from 'uuid';
import { updatetodoDto } from './dto/update.dto';

@Injectable()
export class TodoService {
  todos: TodoEntity[] = [];
  @Inject('UUID') uuid: () => number;
  gettodos(): TodoEntity[] {
    return this.todos;
  }
  addtodos(newTodo: addtodoDto): TodoEntity {
    const { name, description } = newTodo;
    let newTodoEntity = new TodoEntity();
    newTodoEntity.id = uuidv4();
    newTodoEntity = { ...newTodoEntity, ...newTodo };
    this.todos.push(newTodoEntity);
    return newTodoEntity;
  }
  gettodobyid(id: string): TodoEntity {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) return todo;
    else {
      throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
    }
  }
  deletetodo(id: string): string {
    const todo = this.gettodobyid(id);
    if (todo) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    } else {
      throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
    }
    return 'Il reste  ' + this.todos.length + 'todo(s).';
  }
  updateTodo(id: string, updateTodo: updatetodoDto): TodoEntity {
    const todoupdate = this.gettodobyid(id);
    todoupdate.name = updateTodo.name ?? todoupdate.name;
    todoupdate.description = updateTodo.description ?? todoupdate.description;
    todoupdate.status = updateTodo.status ?? todoupdate.status;
    return todoupdate;
  }
}
