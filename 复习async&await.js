function fn(...args) {
  return spawn_(function* () {
    //......
  });
}

function spawn_(genF) {
  return new Promise((resolve, reject) => {
    // gen为返回的迭代器首指针
    const gen = genF();

    function step(nextFn) {
      let next;
      try {
        next = nextFn();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(value => {
        step(() => gen.next(value))
      }, err => {
        step(() => gen.throw(err));
      });
    }
    step(() => gen.next(undefined));
  })
}