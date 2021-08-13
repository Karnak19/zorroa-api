import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Token as PToken } from '@prisma/client';

@ObjectType()
export class Token implements PToken {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field(() => Float)
  quantity: number;

  @Field()
  coin: string;

  @Field()
  platformId: string;
}
