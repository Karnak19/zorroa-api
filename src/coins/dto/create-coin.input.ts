import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCoinInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
