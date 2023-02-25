// src/extension/eArray.ts
Object.defineProperties(Array.prototype, {
  filterNotNull: {
    value: function() {
      return this.flatMap((i) => !i ? [] : [i]);
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  firstOrNull: {
    value: function(filterFn = null) {
      let list = this;
      if (filterFn)
        list = list.filter(filterFn);
      return list.length > 0 ? list[0] : null;
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  lastOrNull: {
    value: function(filterFn = null) {
      let list = this;
      if (filterFn)
        list = list.filter(filterFn);
      return list.length > 0 ? list[list.length - 1] : null;
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  max: {
    value: function(sortFn = null) {
      const list = this;
      if (sortFn)
        return list.sort(sortFn).lastOrNull();
      return list.sort((a, b) => a.toString().localeCompare(b.toString())).lastOrNull();
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  min: {
    value: function(sortFn = null) {
      const list = this;
      if (sortFn)
        return list.sort(sortFn).firstOrNull();
      return list.sort((a, b) => a.toString().localeCompare(b.toString())).firstOrNull();
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  any: {
    value: function(findFn) {
      return this.find(findFn) !== void 0;
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  none: {
    value: function(everyFn) {
      return !this.every(everyFn);
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  remDupes: {
    value: function() {
      return [...new Set(this)];
    },
    configurable: true,
    enumerable: false,
    writable: true
  }
});

// src/extension/eDate.ts
Object.defineProperties(Date.prototype, {
  toISTString: {
    value: function() {
      const dt = this;
      const date = dt.toLocaleDateString("en-za").split("/").join("-");
      const time = dt.toLocaleTimeString("en-za");
      const milli = dt.getMilliseconds().toString().padStart(3, "0");
      return `${date}T${time}.${milli}+0530`;
    },
    configurable: true,
    enumerable: false,
    writable: true
  }
});

// src/extension/eObject.ts
Object.defineProperties(Object.prototype, {
  tKeys: {
    value: function(obj) {
      return Object.keys(obj);
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  tEntries: {
    value: function(obj) {
      return Object.entries(obj);
    },
    configurable: true,
    enumerable: false,
    writable: true
  }
});
