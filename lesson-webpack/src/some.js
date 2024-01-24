function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

class SomeMath {
  avg(...numbers) {
    return sum(...numbers) / numbers.length;
  }
  merge(a, b) {
    return {
      ...a,
      ...b
    }
  }
}

export default new SomeMath();
