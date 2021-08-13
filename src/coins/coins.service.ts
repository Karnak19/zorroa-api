import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { Coin } from './entities/coin.entity';
@Injectable()
export class CoinsService {
  private readonly url = 'https://api.coingecko.com/api/v3/coins';
  constructor(private httpService: HttpService) {}
  findAll() {
    return this.httpService.get(`${this.url}/list`).pipe(map((r) => r.data));
  }

  findOne(id: string): Observable<Coin> {
    return this.httpService.get(`${this.url}/${id}`).pipe(
      map(({ data }) => ({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        current_price: data.market_data.current_price.usd,
        thumb_image: data.image.thumb,
        small_image: data.image.small,
        large_image: data.image.large,
      })),
    );
  }
}
