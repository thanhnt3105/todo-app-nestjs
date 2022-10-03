import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
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
  // constructor(private readonly todoEntity: TodoEntity) {}

  findAll() {
    return database;
  }

  findById(id: string) {
    return database.find((todo) => todo.id === +id);
  }

  create(task: TodoDTO) {
    database.push(task);
    writeFileToDatabase(database);
    return database;
  }

  // remove(id: string) {
  //   database.slice(id);
  //   writeFileToDatabase(database);
  //   return database;
  // }
}
