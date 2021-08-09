import { Injectable } from '@nestjs/common';
import { CreateCoinInput } from './dto/create-coin.input';
import { UpdateCoinInput } from './dto/update-coin.input';

@Injectable()
export class CoinsService {
  create(createCoinInput: CreateCoinInput) {
    return 'This action adds a new coin';
  }

  findAll() {
    return `This action returns all coins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coin`;
  }

  update(id: number, updateCoinInput: UpdateCoinInput) {
    return `This action updates a #${id} coin`;
  }

  remove(id: number) {
    return `This action removes a #${id} coin`;
  }
}
