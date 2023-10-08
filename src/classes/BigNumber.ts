export class BigNumber {
  // value[0] always store units digit
  private value: number[] = [];

  constructor(str: string) {
    str
      .split("")
      .reverse()
      .forEach((digit) => {
        this.value.push(Number(digit));
      });
  }

  isEven() {
    return this.value[0] % 2 === 0;
  }

  add(n: number) {
    let c = n;

    for (let i = 0; i < this.value.length; i++) {
      this.value[i] += c;

      if (this.value[i] > 9) {
        this.value[i] %= 10;
        c = 1;
      } else {
        return;
      }
    }

    if (c === 1) {
      this.value.push(c);
    }
  }

  subtract(n: number) {
    let c = n;

    for (let i = 0; i < this.value.length; i++) {
      this.value[i] -= c;

      if (this.value[i] < 0) {
        this.value[i] += 10;
        c = 1;
      } else {
        // remove leading zero
        if (this.value[this.value.length - 1] === 0 && this.value.length > 1) {
          this.value.pop();
        }

        return;
      }
    }
  }

  divideBy2() {
    const stack: number[] = [];

    for (let i = this.value.length - 1; i >= 0; i--) {
      const curDigit = this.value[i];

      stack.push(Math.floor(curDigit / 2));
      if (curDigit % 2 === 1 && i > 0) {
        this.value[i - 1] += 10;
      }
    }

    this.value = stack.reverse();

    // remove leading zero
    if (this.value[this.value.length - 1] === 0 && this.value.length > 1) {
      this.value.pop();
    }
  }

  toString() {
    const str = this.value.reverse().join("");
    this.value.reverse(); // "reverse" is in-place, therefore we need to reverse it back
    return str;
  }
}
