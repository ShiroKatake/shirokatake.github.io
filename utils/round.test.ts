import { round } from './round';

describe("App", () => {
  it('should round floats to correct decimal places', () => {
    const cases = [
      { x: 10, expect: 10, decimalPlace: 2 },
      { x: 1.7777, expect: 1.78, decimalPlace: 2 },
      { x: 1.005, expect: 1, decimalPlace: 0 },
      { x: 1.012930890923842398492305, expect: 1.0129308909, decimalPlace: 12 },
      { x: 1.76348759873249879532479534534975238945e-12, expect: 0, decimalPlace: 1 }
    ];

    cases.forEach((testCase) => {
      var result = round(testCase.x, testCase.decimalPlace);
      expect(result).toBe(testCase.expect);
    });
  });
});