import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { FeedModule } from "./feed/feed.module";
import { UserModule } from "./users/users.module";
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { StudentService } from './services/student/student.service';
import { StudentController } from './controller/student/student.controller';
import { StudentModule } from './student/student.module';

console.log(process.env.POSTGRES_USER);
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      password: "admin",
      username: "postgres",
      autoLoadEntities: true,
      database: "linkedin",
      synchronize: true,
      logging: true,
    }),
    FeedModule,
    UserModule,
    StudentModule,
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
