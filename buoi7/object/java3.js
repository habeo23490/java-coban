// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
//  Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
const listStudents = { 
 key1 : {name: "Huy", age: 20},
 key2 : {name: "Ha", age: 30},
 key3 :{name: "Tung", age: 40},
 key4 :{name: "Nam", age: 70},
 }
 let n1 = listStudents.key1.age;
 let n2 = listStudents.key2.age;
 let n3 = listStudents.key3.age;
 let n4 = listStudents.key4.age;
 
 const obj = [n1 , n2 , n3 ,n4];
console.log(obj.length);
 
function sum(obj) {
    
let sum1 = 0 ;

 for( let x in obj){
sum1 += obj[x] ; 
 }
 return sum1/ obj.length;
}
console.log(sum(obj));

// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. 
// Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.



// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
//  Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).



// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. 
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.

function name(listStudents) {
    for(let key in listStudents.name){
        if(key.toLowerCase == "h"){
return key
        }
    }
    return false

}
console.log(name(listStudents));
