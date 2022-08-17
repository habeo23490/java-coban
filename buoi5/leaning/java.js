let numbers = [1 ,2,3,47,49,4,6,44,33];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers.length);
// lenghth = index lớn nhất + 1
// lenghth có thể thay đổi tùy ý 
// numbers.length = 20 ;
// console.log(numbers);
// numbers.length = 0 ;
// console.log(numbers);
// thông thường arr(mảng) lưu trữ các giá trị giống nhau
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}
for (const number of numbers) {
    console.log(number);
    
}

// kiểm tra 1 obj có phải mảng hay ko 
Array.isArray(numbers)

const newArray = numbers.concat(["ha,haiiiii"]);
console.log(newArray);
// tìm vị trí chỉ mục của 1 giá trị ở trong mảng 
console.log(numbers.indexOf(1)); // 0
//xem value có phải giá trị trong array ko;
console.log(numbers.includes(2)); 
//thêm vào cuối 
numbers.push(1,2,3);
console.log(numbers);
//thêm vào đâu(hạn chế)
numbers.unshift(-1,-2);
console.log(numbers);

//xóa ở đầu
const lastItem = numbers.pop();
console.log(lastItem);

//xóa ở cuối

//đảo ngược thứ tự
numbers.reverse();

//sao chép mảng 


//xóa 
numbers.splice(2 , 1);
console.log(numbers);
// chèn 
numbers.splice(5,0,"hahah");
console.log(numbers);
// thay thế
numbers.splice(5,1,"hà")
console.log(numbers);
