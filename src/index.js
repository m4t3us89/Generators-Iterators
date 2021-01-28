(async () => {
  const TIMEOUT = 1000;
  const START_COUNT = 1;

  async function* getCountIterator(count) {
    if (count == 11) return;

    yield count;
    await sleep();
    yield* getCountIterator((count += 1));
  }

  function sleep() {
    return new Promise((resolve) => setInterval(resolve, TIMEOUT));
  }

  const pags = getCountIterator(START_COUNT);
  for await (const p of pags) {
    console.log(p);
  }
})();
