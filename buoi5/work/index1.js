let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
console.log(arr);

// In ra độ dài (số lượng phần tử) của arr
console.log(arr.length);

// In ra phần tử thứ 3 trong mảng
console.log(arr[2]);

// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);

// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length-1]);


// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[-1]);

// Sử dụng vòng lặp in ra từng giá trị trong arr
for (const key of arr) {
    
    console.log(key);
}

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
//    length = 0;
// for (let index = 0; index < arr.length; index++) {
//     const element =  length + arr[index];
//     length++;
//    console.log(element);
// }

 for(let index = 0; index < arr.length; index++) {
    const element = arr[index];

   console.log(index, element);
}

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
for(let index = arr.length-1; index >0 ; index--) {
    const element =  arr[index];

   console.log(index,element);
}

// Thêm "Ba"  cuối mảng sử dụng phương thức push()
arr.push("Ba")
console.log(arr);


// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
arr.splice(6,0,"Thảo");
console.log(arr);



// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
arr.unshift("Béo Ú");
console.log(arr);


// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
const delete1 = arr.pop();
console.log(delete1);



// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
const delete2 = arr.shift();
console.log(delete2);


// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả


 const twoValue = arr.slice(0,2);
console.log(twoValue);


// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()

const twoValue1 = arr.slice(0,arr.length);
console.log(twoValue1);


// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
const twoValue2 = arr.slice(arr.length-3,arr.length);
console.log(twoValue2);



// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
console.log(arr);
arr.splice(1,2);
console.log(arr);

// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()
arr.splice(1,0,"Nhi","Hùng" );
console.log(arr);


// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()
  const onelength =  arr.indexOf("Ba");
  console.log(onelength);



// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả
const onelength1 =  arr.indexOf("Thảo");
  console.log(onelength1);


// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả
const search = arr.includes("Mai Anh");
console.log(search);



// Sử dụng alert() in arr, chú ý kết quả
// alert(arr);

// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console
arr.join(`-`);
console.log(arr);

// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
arr.reverse()
console.log(arr);

// Đổi chỗ 2 phần tử đầu và cuối mảng
// let temp = arr[0] // lưu giá trị đầu tiên
// arr[0] = arr.[arr.length-1];
// arr.[arr.length-1] = temp ;

// Xóa toàn bộ phần tử trong mảng
arr.length = 0;
console.log(arr);


/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */


function sum(numbers) {
    let sumArr = 0 ;
    for (let index = 0; index < numbers.length; index++) {
        sumArr += numbers[index];

        
    }
    return sumArr ;


}
console.log(sum([1,2,3,4,5]));

/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {
    
    let sumArr = 0 ;
    for (let index = 0; index < numbers.length; index++) {
        sumArr += numbers[index];

        
    }
    return sumArr/numbers.length ;


}
console.log(avg([1,2,3,5,5]));




//1 hàm đc truyền vào 1 hàm khác dưới dạng đối số
//eg 


// let arr1 = [1,2,3,4];
// function square (n) {
//     console.log(n*2);
// }
// forEach(
// );


//hầu hết các phương thức đều truyền cho callback 3 giá trị value , index , array
// trừ các phương thức sort , reduce .
// chuỗi và date time


