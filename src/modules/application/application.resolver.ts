import { Query, Resolver } from '@nestjs/graphql';
import { ApplicationService } from './application.service';

@Resolver()
export class ApplicationResolver {
    constructor(
        private readonly applicationService: ApplicationService,
    ) {}
    @Query()
    application() {
        return this.applicationService.application();
    }
}
