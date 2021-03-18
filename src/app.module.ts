import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlService } from 'config';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlService,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
