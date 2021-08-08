import { Magic } from '@magic-sdk/admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MagicService extends Magic {
  constructor() {
    super(process.env.MAGIC_SECRET);
  }
}
