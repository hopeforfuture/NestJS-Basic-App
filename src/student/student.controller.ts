import { StudentService, type Student } from './student.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('api/v1/students')
export class StudentController {
  constructor(private readonly stdService: StudentService) {}

  @Get()
  getAll(): Student[] {
    return this.stdService.getAllStudents();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Student {
    return this.stdService.getStudentById(Number(id));
  }

  @Post()
  create(@Body() body: Student): Student {
    return this.stdService.createStudent(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Student): Student {
    return this.stdService.updateStudent(Number(id), body);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() body: Partial<Student>): Student {
    return this.stdService.patchStudent(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Object {
    return this.stdService.deleteStudent(Number(id));
  }
}
