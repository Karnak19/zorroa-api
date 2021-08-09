import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoinsModule } from './coins/coins.module';
import { TokensModule } from './tokens/tokens.module';
import { PlatformsModule } from './platforms/platforms.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    AuthModule,
    // CoinsModule,
    TokensModule,
    // PlatformsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
