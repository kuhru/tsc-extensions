import '../helper';

Object.defineProperties(Object.prototype, {
  tKeys: {
    value: function <T extends any>(obj: T) {
      return Object.keys(obj as any) as (keyof T)[];
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
  tEntries: {
    value: function <T extends any>(obj: T) {
      return Object.entries(obj as any) as [keyof T, T[keyof T]][];
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
});
