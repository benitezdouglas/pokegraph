import { GqlOptionsFactory, GqlModuleOptions } from "@nestjs/graphql";
import { join } from "path";
import { Injectable } from "@nestjs/common";

import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
    async createGqlOptions(): Promise<GqlModuleOptions> {
        return {
            typePaths: ['./**/*.graphql'],
            introspection: true,
            definitions: {
                path: join(__dirname, '../../generator/graphql.ts'),
                outputAs: 'class',
            },
            context: async ({ req, res, connection }) => {
                const { authorizationToken, currentPerson } = req;

                if (connection) {
                    const {
                        token,
                        currentPerson,
                        pubSub,
                    } = connection.context;
                    return {
                        token,
                        currentPerson,
                        pubSub,
                    };
                }

                return {
                    req,
                    res,
                    pubsub,
                    token: authorizationToken,
                    currentPerson,
                };
            },
        }
    }
}