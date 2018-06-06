import { sleep, timeout } from './src/promise-utils';

(async() => {
  await sleep(1);
  console.log('hello');
})();

timeout(sleep(100).then(() => console.log('slept 100')), 200);
