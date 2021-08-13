import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from './auth/auth.module';
import { CoinsModule } from './coins/coins.module';
import { TokensModule } from './tokens/tokens.module';
import { MagicModule } from './magic/magic.module';
import { PlatformsModule } from './platforms/platforms.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthModule,
    CoinsModule,
    TokensModule,
    MagicModule,
    // PlatformsModule,
  ],
  controllers: [],
})
export class AppModule {}
