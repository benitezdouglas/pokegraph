import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';

import * as options from './config';

import { NODE_ENV } from '@env';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        createConnection(options)
            .then(data => {
                this.log(`☁️  Database connected`, true);
            })
            .catch(err => this.log(`   Database connect error`, false));

        return options;
    }

    private log(message: string, success: boolean): void {
        if (NODE_ENV === 'test') return;
        if (success) {
            Logger.log(message, 'TypeORM', false);
        } else {
            Logger.error(message, '', 'TypeORM', false);
        }
    }
}