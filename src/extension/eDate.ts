import '../helper';

Object.defineProperties(Date.prototype, {
  toISTString: {
    value: function () {
      const dt = this as Date;

      const date = dt.toLocaleDateString('en-za').split('/').join('-');
      const time = dt.toLocaleTimeString('en-za');
      const milli = dt.getMilliseconds().toString().padStart(3, '0');

      return `${date}T${time}.${milli}+0530`;
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
});
