import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CoinsService } from './coins.service';
import { Coin } from './entities/coin.entity';
import { CreateCoinInput } from './dto/create-coin.input';
import { UpdateCoinInput } from './dto/update-coin.input';

@Resolver(() => Coin)
export class CoinsResolver {
  constructor(private readonly coinsService: CoinsService) {}

  @Mutation(() => Coin)
  createCoin(@Args('createCoinInput') createCoinInput: CreateCoinInput) {
    return this.coinsService.create(createCoinInput);
  }

  @Query(() => [Coin], { name: 'coins' })
  findAll() {
    return this.coinsService.findAll();
  }

  @Query(() => Coin, { name: 'coin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.coinsService.findOne(id);
  }

  @Mutation(() => Coin)
  updateCoin(@Args('updateCoinInput') updateCoinInput: UpdateCoinInput) {
    return this.coinsService.update(updateCoinInput.id, updateCoinInput);
  }

  @Mutation(() => Coin)
  removeCoin(@Args('id', { type: () => Int }) id: number) {
    return this.coinsService.remove(id);
  }
}
