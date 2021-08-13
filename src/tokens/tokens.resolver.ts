import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MagicUser } from 'passport-magic';

import { TokensService } from './tokens.service';
import { Token } from './entities/token.entity';
import { CreateTokenInput } from './dto/create-token.input';
// import { UpdateTokenInput } from './dto/update-token.input';
import { CurrentUser } from 'src/auth/gqlCurrentUser.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Token)
export class TokensResolver {
  constructor(private readonly tokensService: TokensService) {}

  @Mutation(() => Token)
  createToken(
    @Args('createTokenInput') createTokenInput: CreateTokenInput,
    @CurrentUser() { issuer }: MagicUser,
  ) {
    return this.tokensService.create(createTokenInput, issuer);
  }

  @Query(() => [Token], { name: 'tokens' })
  findAll(@CurrentUser() { issuer }: MagicUser) {
    return this.tokensService.findAll(issuer);
  }

  @Query(() => Token, { name: 'token' })
  findOne(@Args('id') id: string) {
    return this.tokensService.findOne(id);
  }

  // @Mutation(() => Token)
  // updateToken(@Args('updateTokenInput') updateTokenInput: UpdateTokenInput) {
  //   return this.tokensService.update(updateTokenInput.id, updateTokenInput);
  // }

  @Mutation(() => Token)
  removeToken(@Args('id', { type: () => String }) id: string) {
    return this.tokensService.remove(id);
  }
}
