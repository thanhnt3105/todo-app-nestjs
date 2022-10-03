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
    return database.find((todo) => todo.id === +id);
  }

  create(task: TodoEntity) {
    const idArr = database.map((db) => db._id);
    const max = Math.max(...idArr);
    task.id = max + 1;
    task.status = 1;
    task.createdDate = new Date();
    task.updatedDate = new Date();
    database.push(task);
    writeFileToDatabase(database);
    return database;
  }

  remove(id: string) {
    const newdb = database.slice(id);
    console.log('newdb', newdb);
    writeFileToDatabase(newdb);
  }
}
