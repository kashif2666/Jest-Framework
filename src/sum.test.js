import sum from "./sum";

test("testing for sum function", () => {
  let a = 10;
  let b = 20;
  let output = 30;
  expect(sum(a, b)).toBe(output);
});

test("testing for sum function 2", () => {
  let a = 100;
  let b = 250;
  let output = 350;
  expect(sum(a, b)).toBe(output);
});

test("testing for sum function 3", () => {
  let a = 100;
  let b = 200;
  let output = 300;
  expect(sum(a, b)).toBe(output);
});
