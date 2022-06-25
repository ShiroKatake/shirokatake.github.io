export const round = (x: number, decimalPlace: number = 0) => {
  decimalPlace = decimalPlace > 10 ? 10 : decimalPlace; //Capped to rounding to 10 decimal places
  return +(Math.round(Number(x.toFixed(10) + "e+" + decimalPlace)) + "e-" + decimalPlace);
}
