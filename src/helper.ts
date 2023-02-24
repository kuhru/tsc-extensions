export {};

declare global {
  type PredicateS<T, S extends T> = (value: T, index: number, array: T[]) => value is S;
  type PredicateUnknown<T> = (value: T, index: number, array: T[]) => unknown;
  type Predicate<T, S extends T> = PredicateUnknown<T> | PredicateS<T, S>;

  type Sorter<T> = (a: T, b: T) => number;
}
