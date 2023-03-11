import '../helper';

Object.defineProperties(String.prototype, {
  capitalize: {
    value: function (...handleSeperator: string[]) {
      const uppercase = ([first, ...rest]: string) => {
        return `${first.toLocaleUpperCase()}${rest.join('')}`;
      };

      let thisString = uppercase(this);
      handleSeperator.forEach((rem) => {
        thisString = thisString
          .split(rem)
          .map((it) => !!it && uppercase(it))
          .join(rem);
      });

      return thisString;
    },
    configurable: true,
    enumerable: false,
    writable: true,
  },
});
