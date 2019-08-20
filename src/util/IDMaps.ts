import {IDStr} from "./Strings";

export class IDMaps {

    /**
     * Convert an array of values with ID properties into a map with the ID as key.
     */
    public static toIDMap<T extends IDRecord>(values: ReadonlyArray<T>): IDMap<T> {

        const result: IDMap<T> = {};

        for (const value of values) {
            result[value.id] = value;
        }

        return result;

    }

    public static toIdentifiers<T extends IDRecord>(values: ReadonlyArray<T>): ReadonlyArray<IDStr> {
        return values.map(current => current.id);
    }

}

/**
 * An ID map is a map of records that have an id property.
 */
export interface IDMap<T extends IDRecord> {
    [id: string]: T;
}

export interface IDRecord {
    readonly id: IDStr;
}

