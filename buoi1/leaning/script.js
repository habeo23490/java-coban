let myName = "Ha";
let age = 40;
let job = "student";

const myBrithday = "7/12/2000";
const goodBoy = true;
console.log(myName, age, job, myBrithday, goodBoy);

let number = 123; //sử dụng các ký tự số để biểu diễn giá trị
let float = 123.456; // 123.456 sử dungj ký tư . để biểu diễn số thực
let saperator = 100_000_000; //100_000_000 sử dụng _ để phân tách đơn vị

let firstName = "Ha";
let lastName = "Nguễn";
//In ra các kí tư đặc biệt
let message = "Hello , I`M  Ha";
console.log(message);
let allName = message + ", " + "my age is " + " " + age;
console.log(allName);

//kiểu logic
let isOn = true;
let isTall = false;

let myLove;

// Object là kiểu phức hợp , cho phép lưu trữ nhiều giá trị trong 1 biến duy nhất
// mỗi 1 giá trị đc gán/ ánh xạ 1 ký cụ thể
const Ha = {
  firstname: "Ha",
  lastName: "Nguyen",
};
const Hoa = {
  firstname: "Hoa",
  lastName: "Nguyen",
};
const Hai = {
  firstname: "Hai",
  lastName: "Nguyen",
};
// mảng cho phép lưu trữ 1 danh sách các giá trị (array)
// let students = [ha,hai,hoa];

//hàm là cách thức tổ chức mã
//cho phép đóng gói các đoạn mã và tái sử dụng nhiều lần , nhiều nơi ,..
// function : keyword khai báo hàm
//functionName :tên hàm
//(who) tham số hàm - đầu vài cho hàm
//{ } function body - thân hàm , chứa các đoạn mã

function hello(who) {
  // cú pháp khai báo
  console.log("heloo," + who);
}
// gán giá trị hàm
const gretting = function (who) {
  console.log("heloo," + who);
};

//để sử dụng đoạn mã đc đóng gói trong hàm
// tên hàm()
hello("HA");
hello("HAo");
hello("HAi");

const sum = function (a, b) {
  const result = a + b;
  return result;
};
const sumof3 = sum(3, 6);
console.log(sumof3);
console.log(sum(4, 2));

// const sub = function (a, b) {
//   const result = a - b;
//   return result;
// };

// const mul = function (a, b) {
//   const result = a * b;
//   return result;
// };

// const div = function (a, b) {
//   const result = a / b;
//   return result;
// };

let currentYear = 2020;

function findYearOld(yearOfBỉth) {
  const result = currentYear - yearOfBỉth;
  return result;
}
console.log(findYearOld(2000));

// chuyển đổi các kiểu khác về kiểu "string"
String(123);
//
