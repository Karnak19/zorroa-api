import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class CoinOverview {
  @Field()
  id: string;

  @Field()
  symbol: string;

  @Field()
  name: string;
}

@ObjectType()
export class Coin extends CoinOverview {
  @Field(() => Float)
  current_price?: number;

  @Field()
  thumb_image: string;

  @Field()
  small_image: string;

  @Field()
  large_image: string;

  @Field(() => [Price])
  prices: Price[];
}

@ObjectType()
class Price {
  @Field()
  date: number;

  @Field()
  price: number;
}
