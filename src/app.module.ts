import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from './auth/auth.module';
import { CoinsModule } from './coins/coins.module';
import { TokensModule } from './tokens/tokens.module';
import { PlatformsModule } from './platforms/platforms.module';
import { MagicModule } from './magic/magic.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    AuthModule,
    CoinsModule,
    TokensModule,
    // PlatformsModule,
    MagicModule,
  ],
  controllers: [],
})
export class AppModule {}
