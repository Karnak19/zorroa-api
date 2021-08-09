import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensResolver } from './tokens.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [TokensResolver, TokensService],
  imports: [PrismaModule],
})
export class TokensModule {}
