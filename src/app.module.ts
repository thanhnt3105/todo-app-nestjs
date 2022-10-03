import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [TodoModule, CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
