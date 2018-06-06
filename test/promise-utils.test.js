const assert = require('assert');
import { sleep, timeout } from '../src/promise-utils';
// const utils = require('../src/promise-utils');
// const { sleep, timeout } = utils;

describe('timeout', function() {
  it('should time out when t < 100', async() => {
      try {
        await timeout(sleep(100), 20);
        assert.fail('no timeout occured');
      } catch(e) {
        assert.equal(e, 'timed out');
      }
  });

  it('should not time out when t > 100', async() => {
      const result = await timeout(sleep(100), 200).then(() => 'done');
      assert.equal(result, 'done');
  });
});