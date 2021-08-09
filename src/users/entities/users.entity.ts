import { ObjectType, Field } from '@nestjs/graphql';
import { User as PUser } from '@prisma/client';

@ObjectType()
export class User implements Omit<PUser, 'password'> {
  @Field()
  id: string;

  @Field()
  email: string;
}
