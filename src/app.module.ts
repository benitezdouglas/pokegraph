import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
