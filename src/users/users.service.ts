import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      rejectOnNotFound: true,
    });
  }

  async register(email: string, password: string) {
    return this.prisma.user.create({
      data: {
        email,
        password: await argon2.hash(password),
      },
    });
  }
}
