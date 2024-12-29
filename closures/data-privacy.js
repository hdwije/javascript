function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const myCounter = counter();

myCounter.increment();

console.log(myCounter.getCount()); // 1
