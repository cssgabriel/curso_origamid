export interface CountList {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, payment) => {
    acc[payment] ? (acc[payment] += 1) : (acc[payment] = 1);
    return acc;
  }, {});
}
