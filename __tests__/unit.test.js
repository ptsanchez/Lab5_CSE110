// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber unit tests
test('isPhoneNumber valid number 1', () => {
  expect(isPhoneNumber("800-588-2300")).toBe(true);
});

test('isPhoneNumber valid number 2', () => {
  expect(isPhoneNumber("(111) 111-1111")).toBe(true);
});

test('isPhoneNumber invalid number 1', () => {
  expect(isPhoneNumber("123-456-789")).toBe(false);
});

test('isPhoneNumber invalid number 2', () => {
  expect(isPhoneNumber("888 888 8888")).toBe(false);
});

//isEmail unit tests
test('isEmail valid email 1', () =>{
  expect(isEmail("patrics27@outlook.com")).toBe(true);
});

test('isEmail valid email 2', () =>{
  expect(isEmail("burneremail@gmail.com")).toBe(true);
});

test('isEmail invalid email 1', () =>{
  expect(isEmail("patrics27@outlook.")).toBe(false);
});

test('isEmail invalid email 2', () =>{
  expect(isEmail("patrics27@")).toBe(false);
});

//isStrongPassword unit tests
test('isStrongPassword valid strong password 1', () => {
  expect(isStrongPassword("ThisisStrong_")).toBe(true);
});

test('isStrongPassword valid strong password 2', () => {
  expect(isStrongPassword("MyPassword")).toBe(true);
});

test('isStrongPassword invalid strong password 1', () => {
  expect(isStrongPassword("1password")).toBe(false);
});

test('isStrongPassword invalid strong password 2', () => {
  expect(isStrongPassword("12345")).toBe(false);
});

//isDate unit tests
test('isDate valid date 1', () => {
  expect(isDate("5/4/2024")).toBe(true);
})

test('isDate valid date 2', () => {
  expect(isDate("06/27/2004")).toBe(true);
})

test('isDate invalid date 1', () => {
  expect(isDate("5/4/24")).toBe(false);
})

test('isDate invalid date 2', () => {
  expect(isDate("06 27 2004")).toBe(false);
})

//isHexColor unit tests
test('isHexColor valid hex color 1', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
})

test('isHexColor valid hex color 2', () => {
  expect(isHexColor("#000000")).toBe(true);
})

test('isHexColor invalid hex color 1', () => {
  expect(isHexColor("white")).toBe(false);
})

test('isHexColor invalid hex color 2', () => {
  expect(isHexColor("#FF")).toBe(false);
})