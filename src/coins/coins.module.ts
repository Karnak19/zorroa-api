import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinsResolver } from './coins.resolver';

@Module({
  providers: [CoinsResolver, CoinsService]
})
export class CoinsModule {}
