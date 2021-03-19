
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Pokemon {
    id?: number;
    name?: string;
    height?: number;
    weight?: number;
}

export abstract class IQuery {
    abstract pokemon(): Pokemon[] | Promise<Pokemon[]>;
}
