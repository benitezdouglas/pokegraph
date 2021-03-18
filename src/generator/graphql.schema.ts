
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Application {
    name?: string;
    version?: string;
}

export abstract class IQuery {
    abstract application(): Application | Promise<Application>;
}
