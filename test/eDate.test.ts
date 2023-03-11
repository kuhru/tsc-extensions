import { assert, describe, it } from 'vitest';
import '../src/index';

describe('toISTString', () => {
  const data = {
    i1: {
      fromIST: new Date('2022-09-13T16:32:26.393+0530'),
      fromISO: new Date('2022-09-13T11:02:26.393Z'),
      to: '2022-09-13T16:32:26.393+0530',
    },
    i2: {
      fromDate: new Date('2022-09-13'),
      to: '2022-09-13T05:30:00.000+0530',
    },
  };

  it('convert IST datetime to IST string', () => {
    const here = data.i1;
    assert.deepEqual(here.fromIST.toISTString(), here.to);
  });

  it('convert ISO datetime to IST string', () => {
    const here = data.i1;
    assert.deepEqual(here.fromISO.toISTString(), here.to);
  });

  it('convert date to IST String', () => {
    const here = data.i2;
    assert.deepEqual(here.fromDate.toISTString(), here.to);
  });
});
