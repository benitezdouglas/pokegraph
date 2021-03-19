import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeormService } from 'config';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeormService,
        }),
    ],
    providers: [DatabaseService, DatabaseController],
    exports: [DatabaseService, DatabaseController],
})
export class DatabaseModule {}