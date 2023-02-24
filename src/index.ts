import './extension/eArray';
import './extension/eDate';
import './extension/eObject';
import './helper';

declare global {
  interface ObjectConstructor {
    tKeys<T extends any>(obj: T): (keyof T)[];
    tEntries<T extends any>(obj: T): [keyof T, T[keyof T]][];
  }

  interface Date {
    toISTString(): string;
  }

  interface Array<T> {
    filterNotNull(): NonNullable<T>[];
    firstOrNull<S extends T>(filterFn?: Predicate<T, S> | null): T | null;
    lastOrNull<S extends T>(filterFn?: Predicate<T, S> | null): T | null;
    max(sortFn?: Sorter<T> | null): T | null;
    min(sortFn?: Sorter<T> | null): T | null;
    any<S extends T>(findFn: Predicate<T, S>): boolean;
    none<S extends T>(everyFn: Predicate<T, S>): boolean;
    remDupes(): T[];
  }

  interface ReadonlyArray<T> extends Array<T> {}

  // GENERAL USE

  type OmitThis<TType, Omitable extends TType> = TType extends Omitable ? never : TType;
  type LooseAutocomplete<S extends any, T extends S & PropertyKey> = T | Omit<S, T>;

  type MapOf<T extends PropertyKey, S extends any> = { [K in T]: S };
  type MapOfNullable<T extends PropertyKey, S extends any> = { [K in T]?: S };
}
