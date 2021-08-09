import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Token as PToken } from '@prisma/client';

@ObjectType()
export class Token implements PToken {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  coinId: string;

  @Field()
  platformId: string;
}
