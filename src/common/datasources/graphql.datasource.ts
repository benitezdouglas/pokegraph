export abstract class GraphQLDataSource {
    protected client: any;
  
    constructor() {
      this.createClient();
    }
  
    abstract query(query: string, variables?: Record<string, unknown>, options?: Record<string, unknown>): any;
  
    abstract mutate(mutation: string, variables?: Record<string, unknown>, options?: Record<string, unknown>): any;
  
    abstract subscribe(
      subscription: string,
      variables?: Record<string, unknown>,
      options?: Record<string, unknown>,
    ): any;
  
    protected abstract createClient(): void;
  }