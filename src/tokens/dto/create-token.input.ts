import { InputType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateTokenInput
  implements Omit<Prisma.TokenCreateInput, 'user' | 'coin'>
{
  @Field(() => Int)
  quantity: number;

  @Field()
  coinId: string;

  @Field(() => String, { nullable: true })
  platformId?: string;
}
