import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CoinsService } from './coins.service';
import { CoinsResolver } from './coins.resolver';

@Module({
  imports: [HttpModule],
  providers: [CoinsResolver, CoinsService],
})
export class CoinsModule {}
