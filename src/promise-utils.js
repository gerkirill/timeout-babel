module.exports.sleep = sleep;
module.exports.timeout = timeout;

function timeout(p, t) {
  const failure = new Promise( (resolve, reject) => {
    setTimeout(() => reject(new Error('Timed out')), t)
  });
  return Promise.race([failure, p]);
}

function sleep(interval) {
  return new Promise(resolve => setTimeout(
      () => {
        resolve();
      },
      interval
  ));
}
