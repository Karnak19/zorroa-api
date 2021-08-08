import { Module } from '@nestjs/common';
import { MagicModule } from 'src/magic/magic.module';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  exports: [AuthService],
  imports: [MagicModule],
})
export class AuthModule {}
