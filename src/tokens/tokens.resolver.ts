import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TokensService } from './tokens.service';
import { Token } from './entities/token.entity';
import { CreateTokenInput } from './dto/create-token.input';
import { UpdateTokenInput } from './dto/update-token.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/gqlCurrentUser.decorator';
import { User } from '@prisma/client';

@Resolver(() => Token)
export class TokensResolver {
  constructor(private readonly tokensService: TokensService) {}

  @Mutation(() => Token)
  createToken(@Args('createTokenInput') createTokenInput: CreateTokenInput) {
    return this.tokensService.create(createTokenInput);
  }

  @Query(() => [Token], { name: 'tokens' })
  @UseGuards(GqlAuthGuard)
  findAll(@CurrentUser() user: User) {
    return this.tokensService.findAll(user.id);
  }

  @Query(() => Token, { name: 'token' })
  findOne(@Args('id') id: string) {
    return this.tokensService.findOne(id);
  }

  @Mutation(() => Token)
  updateToken(@Args('updateTokenInput') updateTokenInput: UpdateTokenInput) {
    return this.tokensService.update(updateTokenInput.id, updateTokenInput);
  }

  @Mutation(() => Token)
  removeToken(@Args('id', { type: () => Int }) id: string) {
    return this.tokensService.remove(id);
  }
}
