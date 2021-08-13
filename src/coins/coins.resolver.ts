import { Resolver, Query, Args } from '@nestjs/graphql';
import { CoinsService } from './coins.service';
import { Coin, CoinOverview } from './entities/coin.entity';

@Resolver(() => Coin)
export class CoinsResolver {
  constructor(private readonly coinsService: CoinsService) {}

  @Query(() => [CoinOverview], { name: 'coins' })
  findAll() {
    return this.coinsService.findAll();
  }

  @Query(() => Coin, { name: 'coin' })
  findOne(@Args('id') id: string) {
    return this.coinsService.findOne(id);
  }
}
