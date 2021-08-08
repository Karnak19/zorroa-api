import { Injectable, Request } from '@nestjs/common';
import { Request as ERequest } from 'express';
import { MagicService } from 'src/magic/magic.service';

@Injectable()
export class AuthService {
  constructor(private magic: MagicService) {}

  async validateToken(@Request() req: ERequest) {
    const token = this.magic.utils.parseAuthorizationHeader(
      req.headers.authorization,
    );
    return this.magic.token.validate(token);
  }

  async getToken(@Request() req: ERequest) {
    return req.headers.authorization.split(' ')[1];
  }
}
