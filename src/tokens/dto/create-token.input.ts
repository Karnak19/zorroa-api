import { InputType, Field, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateTokenInput
  implements Omit<Prisma.TokenCreateInput, 'userId'>
{
  @Field(() => Float)
  quantity: number;

  @Field()
  coin: string;

  @Field(() => String, { nullable: true })
  platformId?: string;
}
