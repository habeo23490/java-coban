/*
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



// biến đổi các giá trị trong mảng
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
//tổng hợp , ghép các giá trị trong mảng
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

// sort - sắp xếp
// sắp xếp giá trị theo dạng chuỗi
function compareNumber(a,b) {
    return a-b ; }
let arr5 = [1,34,5,4,7,3,5,111];
arr5.sort(compareNumber)
console.log(arr5);

let users = [
    {name: "Ha" , age : 30},
    {name: "Anh 1" , age : 33},
    {name: "Nam 22" , age : 90},
    {name: "Ba 333" , age : 40}
];
users.sort(function (use1,use2) {
    return use1.age - use2.age ;
    
})
console.log(users);

users.sort(function (use1,use2) {
//   if (use1.name > use2.name) {
//     return 1 ;
    
//   }
//   if (use1.name < use2.name) {
//     return -1 ;
//   }
//   return 0 ;
return use1.name > use2.name ? 1 : -1;
    
})
console.log(users);


*/



// Begex - Regular Expression

// new Date ()
// datetime : 
/*
các giá trị tháng thì tính 0-11
giờ tính từ 0-23
thứ trong tuần tính từ 0-6 ( 0 là chủ nhật )

bắt đầu từ 1970 - 01 -01 00:00:00 (Epoch)



khi cập nhật giá trị thời gian
phần giá trị bị dư (thiếu) tự động bù trừ vào những phần khác

*/











