import { Repository } from 'typeorm';
import { GraphQLDataSource } from 'common/datasources/graphql.datasource';

export type MockType<T> = {
    [P in keyof T]: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
    () => ({
        find: jest.fn(entity => entity),
        findOne: jest.fn(entity => entity),
        save: jest.fn(entity => entity),
        create: jest.fn(entity => entity),
    }),
);

// @ts-ignore
export const serviceMockFactory: () => MockType<any> = jest.fn(() => ({
    setAuthorization: jest.fn(service => service),
    create: jest.fn(entity => entity),
}));

export const graphqlDataSourceMockFactory: () => MockType<
    GraphQLDataSource
> = jest.fn(() => ({
    client: jest.fn(() => null),
    query: jest.fn(entity => entity),
    mutate: jest.fn(entity => entity),
    subscribe: jest.fn(entity => entity),
    createClient: jest.fn(() => {}),
    setAuthorization: jest.fn(instance => instance),
}));