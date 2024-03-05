import { assert } from 'chai';

describe('Login test', () => {
  let string = 'hello';

  it('check if string is a string', () => {
    assert.isString(string);
  });

  it('check if string equals hello', () => {
    assert(string === 'hello');
  });
});
