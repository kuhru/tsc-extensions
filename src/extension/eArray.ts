import '../helper';

Object.defineProperties(Array.prototype, {
  filterNotNull: {
    value: function <T>() {
      return (this as T[]).flatMap((i) => (!i ? [] : [i]));
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  first: {
    value: function <T, S extends T>(filterFn: Predicate<T, S> | null = null) {
      let list = this as T[];
      if (filterFn) list = list.filter(filterFn);
      if (list.length === 0) throw Error("Empty array can't have a first element")
      return list[0];
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  last: {
    value: function <T, S extends T>(filterFn: Predicate<T, S> | null = null) {
      let list = this as T[];
      if (filterFn) list = list.filter(filterFn);
      if (list.length === 0) throw Error("Empty array can't have a last element")
      return list[list.length - 1];
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  firstOrNull: {
    value: function <T, S extends T>(filterFn: Predicate<T, S> | null = null) {
      let list = this as T[];
      if (filterFn) list = list.filter(filterFn);
      return list.length > 0 ? list[0] : null;
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  lastOrNull: {
    value: function <T, S extends T>(filterFn: Predicate<T, S> | null = null) {
      let list = this as T[];
      if (filterFn) list = list.filter(filterFn);
      return list.length > 0 ? list[list.length - 1] : null;
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  max: {
    value: function <T>(sortFn: Sorter<T> | null = null) {
      const list = this as T[];
      if (sortFn) return list.sort(sortFn).lastOrNull() as T;
      return list.sort((a: any, b: any) => a.toString().localeCompare(b.toString())).lastOrNull();
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  min: {
    value: function <T>(sortFn: Sorter<T> | null = null) {
      const list = this as T[];
      if (sortFn) return list.sort(sortFn).firstOrNull() as T;
      return list.sort((a: any, b: any) => a.toString().localeCompare(b.toString())).firstOrNull();
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  any: {
    value: function <T, S extends T>(findFn: Predicate<T, S>) {
      return (this as T[]).find(findFn) !== undefined;
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  none: {
    value: function <T, S extends T>(everyFn: Predicate<T, S>) {
      return !(this as T[]).every(everyFn);
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  remDupes: {
    value: function <T>() {
      return [...new Set(this as T[])];
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
});
