import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { RegisterInput } from './dto/register.input';
import { User } from './entities/users.entity';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async register(@Args('registerInput') registerInput: RegisterInput) {
    return this.usersService.register(
      registerInput.email,
      registerInput.password,
    );
  }
}
