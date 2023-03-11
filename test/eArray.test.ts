import { assert, describe, it } from 'vitest';
import '../src/index';

const data = {
  l1: {
    from: [1, 'a', 'a', [], 'ching', null, undefined, undefined, 32, { a: 1 }, {}],
    filterNotNull: [1, 'a', 'a', [], 'ching', 32, { a: 1 }, {}],
    remDupes: [1, 'a', [], 'ching', null, undefined, 32, { a: 1 }, {}],
  },
};

describe('filterNotNull', () => {
  it('filter the null and undefined items from the list', () => {
    const here = data.l1;
    assert.deepEqual(here.from.filterNotNull(), here.filterNotNull);
  });
});
