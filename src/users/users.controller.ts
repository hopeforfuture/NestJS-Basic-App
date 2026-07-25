import { UsersService, User } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly us: UsersService) {}

  @Get()
  getUsersData(): User[] {
    return this.us.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User | undefined {
    return this.us.getUserById(Number(id));
  }
}
