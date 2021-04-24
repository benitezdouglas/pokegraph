import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesResolver } from './types.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRepository } from './models/type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TypeRepository])],
  providers: [TypesService, TypesResolver]
})
export class TypesModule {}
