import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/isPlayer.js";

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 7));

let abrArray: (number | string)[] = [];
abrArray.push("hel=[]lo");

console.log(abrArray);

let person: {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
};
person = {
  name: "hafizul islam",
  age: 27,
  email: "haf",
  isStudent: false,
};

const myFun: Function = (a: string, b: string): string => {
  return `Hello ${a} ${b}`;
};
myFun("a", "b");

type stringOrNum = string | number;
type userType = {
  name: string;
  age: number;
  phone: string;
};

const sayHello: Function = (id: stringOrNum, user: userType) => {};
// function signature for future implementation
let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a * b;
};

const hafizul = new Player("Hafizul", 27, "Bangladesh");
const playerArr: Player[] = [];
const playerArr2: IsPlayer[] = [];

console.log(hafizul.play());

let rakib: IsPlayer;
rakib = new Player("Rakib", 32, "India");

playerArr.push(hafizul);
console.log(playerArr);

interface RectangleOptions {
  width: number;
  height: number;
}

function drawRectangle(options: RectangleOptions): void {
  let width = options.width;
  let height = options.height;
}
let options = {
  width: 20,
  height: 50,
  length: 30,
};
drawRectangle(options);

/**
 * Generics in typescript
 */

const addId = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "Hafizul",
  age: 27,
  country: "Bangladesh",
});

console.log(user);

enum Rtype {
  SUCCESS,
  FAILURE,
  ENDING,
  UNAUTHORIZED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: Rtype;
  data: T;
}
const response1: APIResponse<{ name: string; age: number }> = {
  status: 200,
  type: Rtype.SUCCESS,
  data: {
    name: "hafiz",
    age: 27,
  },
};

response1.data.name;
console.log("-------------\n", response1);

/**
 * -------------------end of generic---------------------
 */
