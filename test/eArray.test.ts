import { assert, describe, it } from 'vitest';
import '../src/index';

const data = {
  l1: {
    from: [1, 'a', 'a', [], 'ching', null, undefined, undefined, 32, { a: 1 }, {}],
    filterNotNull: [1, 'a', 'a', [], 'ching', 32, { a: 1 }, {}],
    remDupes: [1, 'a', 'a', [], 'ching', null, undefined, undefined, 32, { a: 1 }, {}],
  },
};

describe('filterNotNull', () => {
  it('null / undefined', () => {
    assert.deepEqual(
      data.l1.from.filterNotNull(),
      data.l1.filterNotNull,
      'filter the null and undefined items from the list'
    );
  });
});
