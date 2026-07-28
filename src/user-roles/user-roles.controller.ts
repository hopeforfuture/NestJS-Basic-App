import { Role } from './../guards/roles/roles.enum';
import { Roles } from './../guards/roles/roles.decorator';
import { RolesGuard } from './../guards/roles/roles.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return {
      message: 'only admin can access',
    };
  }

  @Get('user-data')
  getUserData() {
    return {
      message: 'anyone can access',
    };
  }
}
