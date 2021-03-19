import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlService } from 'config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from 'config/typeorm';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlService,
    }),
    TypeOrmModule.forRootAsync({
        useClass: TypeormService,
    }),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
