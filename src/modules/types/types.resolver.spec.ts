import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../../utils/testing/database.module';
import { TypeRepository } from './models/type.repository';
import { TypesResolver } from './types.resolver';
import { TypesService } from './types.service';

describe('TypesResolver', () => {
  let resolver: TypesResolver;
  let service: TypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, TypeOrmModule.forFeature([TypeRepository,])],
      providers: [TypesService, TypesResolver],
    }).compile();

    service = module.get<TypesService>(TypesService);
    resolver = module.get<TypesResolver>(TypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
