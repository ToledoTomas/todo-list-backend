import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'pass123',
      username: 'postgres',
      database: 'todo_list',
      entities: [Task],
      synchronize: true,
      logging: true,
    }),
    TasksModule,
    LoginModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
