const value = "sad";
let value2 = 21312321;

let num: number = 12312312412412;
let num1: number = 0;
let num2: number = 1.2312312412412;
let num3: number = NaN;
let num4: number = Infinity;

let string: string = "";
let string1: string = "asdasd";
let string2: string = "asdasd";
let srring3: string = "`";

let bool1: boolean = true;
let bool2: boolean = false;

//
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[][] = [[213], [213, 213321]];
let arr3: Array<number> = [1, 2, 3];

//
let obj1: { name: string; age: number } = { name: "asd", age: 12 };

interface userType {
  name: string;
  gender: boolean;
  age?: number;
  text?: string[];
}

let obj2: userType = { name: "June", gender: true, age: 21 };

let an: any = 123213;

function fun1(value1: number, value2: number): number {
  return value1 + value2;
}

const func2 = (value1: number, value2: number): number => {
  return value1 + value2;
};
