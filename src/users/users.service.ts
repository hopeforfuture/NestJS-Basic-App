import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private allUsers: User[] = [
    {
      id: 1,
      name: 'Manojit Nandi',
      email: 'manojit87@gmail.com',
    },
    {
      id: 2,
      name: 'Devdeep Nandi',
      email: 'devdeep@gmail.com',
    },
    {
      id: 3,
      name: 'Sourav Nandi',
      email: 'sncn86@gmail.com',
    },
  ];

  getAllUsers(): User[] {
    return this.allUsers;
  }

  getUserById(id: number): User | undefined {
    let user = this.allUsers.find((user) => user.id === id);
    return user;
  }
}
