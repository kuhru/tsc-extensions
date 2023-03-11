import { assert, describe, it } from 'vitest';
import '../src/index';

describe('capitalize', () => {
  const data = {
    i1: { from: 'hithere', to: 'Hithere' },
    i2: { from: 'hi there', to: 'Hi there' },
    i3: { from: 'hi there', to: 'Hi There' },
    i4: { from: 'hi there-why', to: 'Hi There-Why' },
  };

  it('single word', () => {
    const here = data.i1;
    assert.deepEqual(here.from.capitalize(), here.to);
  });

  it('multi word default', () => {
    const here = data.i2;
    assert.deepEqual(here.from.capitalize(), here.to);
  });

  it('multi word with " "', () => {
    const here = data.i3;
    assert.deepEqual(here.from.capitalize(' '), here.to);
  });

  it('multi word with " ", "-"', () => {
    const here = data.i4;
    assert.deepEqual(here.from.capitalize(' ', '-'), here.to);
  });
});
