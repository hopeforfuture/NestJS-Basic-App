import { Injectable, NotFoundException } from '@nestjs/common';

export interface Student {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class StudentService {
  private students: Student[] = [
    {
      id: 1,
      name: 'Manojit Nandi',
      age: 38,
    },
    {
      id: 2,
      name: 'Raghavendra S',
      age: 42,
    },
    {
      id: 3,
      name: 'Rajkumar',
      age: 38,
    },
  ];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('No data found');
    return student;
  }

  //POST
  createStudent(data: Omit<Student, 'id'>): Student {
    const newStudent = {
      id: Date.now(),
      ...data,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  //PUT
  updateStudent(id: number, data: Omit<Student, 'id'>): Student {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('No data found');
    const updateData = { id, ...data };
    this.students[index] = updateData;
    return updateData;
  }

  //PATCH
  patchStudent(id: number, data: Partial<Student>): Student {
    const student = this.getStudentById(id);
    if (!student) throw new NotFoundException('No data found');
    Object.assign(student, data);
    return student;
  }

  //DELETE
  deleteStudent(id: number): Object {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('No data found');
    const deleted = this.students.splice(index, 1);
    return {
      msg: 'Student deleted',
      student: deleted[0],
    };
  }
}
