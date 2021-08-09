import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOneByEmail(email);

    await argon2.verify(user.password, password);

    const { password: _pass, ...rest } = user;
    return rest;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    return { access_token: this.jwtService.sign(payload) };
  }
}
