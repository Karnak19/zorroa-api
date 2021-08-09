import { Test, TestingModule } from '@nestjs/testing';
import { PlatformsResolver } from './platforms.resolver';
import { PlatformsService } from './platforms.service';

describe('PlatformsResolver', () => {
  let resolver: PlatformsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatformsResolver, PlatformsService],
    }).compile();

    resolver = module.get<PlatformsResolver>(PlatformsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
