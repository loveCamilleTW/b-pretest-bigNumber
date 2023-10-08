import { BigNumber } from "../classes/BigNumber";

export function formula(input: string) {
  if (isNaN(Number(input))) return "NaN";
  if (!input) return "";

  if (input === "1") return "1";
  if (input === "3") return "0";

  const num = new BigNumber(input);

  if (num.isEven()) {
    num.divideBy2();
    num.add(2);
    return num.toString();
  } else {
    num.divideBy2();
    num.subtract(1);
    return `-${num.toString()}`;
  }
}
