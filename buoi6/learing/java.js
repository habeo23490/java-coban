
let arr =[1,2,4,5];

function isEven(n) {
    return n%2 == 0 ;
    
}
// vòng lặp
let result; // 1 số hoặc undidile
for(const number of arr) {
    if(isEven(number)){
        result = number ;

        break ;
    }
}
console.log(result);
const n = arr.find(isEven)
console.log(n);


// tìm tất cả 


let numbers = [] ;
for(const number of arr) {
    if(isEven(number)){
        numbers.push(number) ;

    }
}
console.log(numbers);

const numberss = arr.filter(isEven)
console.log(numberss);

let maps = [];
for(const number of arr){
 maps.push(number**2)
}
console.log(maps);

const r = arr.map(function (n){
    return n**2 ;
});
console.log(r);

// Hàm reduce() thực hiện tính toán (tổng hợp) giá trị của mảng, nó nhận vào tham số là một hàm
// callback và một giá trị khởi tạo (tùy chọn)
// vòng lặp
function add(a,b) {
    return a + b ;
    
}
let sum = 0 ; // biến tích lũy đầu vào bằng 0
for(const number of arr) {
    sum = add(sum,number)
}
console.log(sum);


//

let total = arr.reduce(add,0)
console.log(total);

