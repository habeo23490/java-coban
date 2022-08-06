// * Tính chu vi hình chữ nhật
//  *
//  * @param {number} length Chiều dài hình chữ nhật
//  * @param {number} breadth Chiều rộng hình chữ nhật
//  *
//  * @return {number} Chu vi hình chữ nhật
//  */
// function findPerimeterOfRectangle(length, breadth) {}

function findPerimeterOfRectangle(length, breadth) {
    let result = (length + breadth) * 2; ;
    return result;
}
console.log(findPerimeterOfRectangle(4, 5));

// * Tính diện tích hình chữ nhật
//  *
//  * @param {number} length Chiều dài hình chữ nhật
//  * @param {number} breadth Chiều rộng hình chữ nhật
//  *
//  * @return {number} Diện tích hình chữ nhật
//  */
// function findAreaOfRectangle(length, breadth) {}
function findAreaOfRectangle(length, breadth) {
 let result = length * breadth; ;
    return result;
}
console.log(findAreaOfRectangle(4, 5));

// Tìm đường kính hình tròn
//  *
//  * @param {number} r Bán hình hình tròn
//  *
//  * @return {number} Đường kính hình tròn
//  */
// function findDiameterOfCircle(r) {}
function findDiameterOfCircle(r) {
    let result = r * 2 ;
    return result ;
}
console.log(findDiameterOfCircle(5));

// Tìm chu vi hình tròn
//  *
//  * Quy ước PI = 3.14
//  *
//  * @param {number} r Bán hình hình tròn
//  *
//  * @return {number} Chu vi hình tròn
//  */
// function findCircumferenceOfCircle(r) {}

function findCircumferenceOfCircle(r) {
    let result = r * 2 * 3.14 ;
    return result;
}
console.log(findCircumferenceOfCircle(5));

// * Tìm diện tích hình tròn
//  *
//  * Quy ước PI = 3.14
//  *
//  * Bình phương sử dụng toán tử ** hoặc Math.pow()
//  *
//  * @param {number} r Bán kính hình tròn
//  *
//  * @return {number} Diện tích hình tròn
//  */
// function findAreaOfCircle(r) {}

function findAreaOfCircle(r) {
     let result = (r * 3.14)**2;
     return result;
}
console.log(findAreaOfCircle(2));

// * Tính diện tích hình tam giác theo công thức Heron
//  *
//  * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
//  *
//  * @param {number} a Chiều dài cạnh a
//  * @param {number} b Chiều dài cạnh b
//  * @param {number} c Chiều dài cạnh c
//  *
//  * @return {number} Diện tích hình tam giác
//  */
// function findAreaOfTriangle(a, b, c) {}

function findAreaOfTriangle(a, b, c) {
    let perimeter1_2 = (a + b + c) / 2;
    let formula1 = perimeter1_2 * (perimeter1_2 - a) * (perimeter1_2 - b) * (perimeter1_2 - c) ;
    let result = formula1 ** 0.5;
    return result ;

}
console.log(findAreaOfTriangle(7, 10, 13));

//  Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
//  *
//  * Tham khảo công thức chuyển đổi trên google
//  *
//  * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
//  *
//  * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
//  */
// function celsiusToFahrenheit(temp) {}

 function celsiusToFahrenheit(temp) {
    let Fahrenheit = (temp * 1.8) + 32;
    return Fahrenheit;
 }
let all = celsiusToFahrenheit(2) + " " + "độ F";
console.log(all);









