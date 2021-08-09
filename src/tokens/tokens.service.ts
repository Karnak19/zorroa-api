import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTokenInput } from './dto/create-token.input';
import { UpdateTokenInput } from './dto/update-token.input';

const TEMPORARY_USER_ID = '1';

@Injectable()
export class TokensService {
  constructor(private prisma: PrismaService) {}
  create(createTokenInput: CreateTokenInput) {
    const { coinId, platformId, ...rest } = createTokenInput;
    return this.prisma.token.create({
      data: {
        ...rest,
        coin: { connect: { id: coinId } },
        platform: { connect: { id: platformId } },
        user: { connect: { id: TEMPORARY_USER_ID } },
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.token.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.token.findUnique({ where: { id } });
  }

  update(id: string, updateTokenInput: UpdateTokenInput) {
    return this.prisma.token.update({
      data: {
        ...updateTokenInput,
      },
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.token.delete({ where: { id } });
  }
}
