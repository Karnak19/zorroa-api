import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import axios from 'axios';

import { Coin } from './entities/coin.entity';
@Injectable()
export class CoinsService {
  private readonly url = 'https://api.coingecko.com/api/v3/coins';
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService.get(`${this.url}/list`).pipe(map((r) => r.data));
  }

  async findOne(id: string): Promise<Coin> {
    const now = new Date();

    const oneWeekAgo = new Date(now.getTime() - 60 * 60 * 24 * 7 * 1000);

    const [coin, prices] = await Promise.all([
      axios.get(`${this.url}/${id}`).then(({ data }) => ({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        current_price: data.market_data.current_price.usd,
        thumb_image: data.image.thumb,
        small_image: data.image.small,
        large_image: data.image.large,
      })),
      axios
        .get<{ prices: Array<Array<number>> }>(
          `${this.url}/${id}/market_chart/range?vs_currency=usd&from=${
            oneWeekAgo.getTime() / 1000
          }&to=${now.getTime() / 1000}`,
        )
        .then(({ data }) => {
          return data.prices.map(([date, price]) => ({ date, price }));
        }),
    ]);

    return { ...coin, prices };
  }
}
