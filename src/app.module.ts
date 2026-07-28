import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { SampleModule } from './sample/sample.module';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';

@Module({
  imports: [UsersModule, StudentModule, CustomerModule, SampleModule],
  controllers: [AppController, UserRolesController, ExceptionController],
  providers: [AppService],
})
export class AppModule {}
