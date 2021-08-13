import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class UpdateTokenInput implements Prisma.TokenUpdateInput {
  quantity?: number;
  coin?: string;
  userId?: string;
}
