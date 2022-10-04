import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { TodoEntity } from './entity/todo.entity';
import { TodoDTO } from './todo.dto/todo.dto';

function readFileFromDatabase() {
  return JSON.parse(
    fs.readFileSync(process.cwd() + '/src/database/data.json', 'utf8'),
  );
}

function writeFileToDatabase(data) {
  fs.writeFileSync(
    process.cwd() + '/src/database/data.json',
    JSON.stringify(data),
    'utf8',
  );
}

const database = readFileFromDatabase();

@Injectable()
export class TodoService {
  findAll() {
    return database;
  }

  findById(id: string) {
    const task = database.find((todo: any) => todo.id === +id);
    console.log('task', task);
    if (task) {
      return task;
    } else return 'null';
  }

  create(taskRequest: TodoDTO) {
    const idArr = database.map((db: any) => db.id);
    const max = Math.max(...idArr);
    const task = new TodoEntity();
    task.setId = max + 1;
    task.setTaskName = taskRequest.taskName;
    task.setStatus = 1;
    task.setCreatedDate = new Date();
    task.setUpdatedDate = new Date();
    database.push(task);
    writeFileToDatabase(database);
    return database;
  }

  // updateName(id: string, taskNameUpdate: string) {
  //   // const idArr = database.map((db) => db._id); //set of ID
  //   const task: TodoEntity = database.find((t) => t.id === +id);
  //   task.setTaskName = taskNameUpdate;
  //   console.log('database', database);
  //   // const updateUser =
  //   // idArr.find()
  //   return null;
  // }

  // updateStatus(id: string) {
  //   return 'something';
  // }

  remove(id: string) {
    const task = database.find((todo: any) => todo.id === +id);
    if (task) {
      const idArr = database.map((todo): any => todo.id);
      const index = idArr.indexOf(task.id);
      database.splice(index, 1);
      writeFileToDatabase(database);
    } else {
      return 'Nothing to delele';
    }
    return 'OK';
  }
}
