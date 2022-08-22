
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function globular(n) {
    return (4 * 3.14 * (n**3))/3 
}
console.log(globular(3));
// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function sum(x,y) {
    let sum1 = 0; 
    for(let i = x ; i < y ; i++ ) {
        sum1 += i ;
        
    }
    return sum1 - x ;
    
}
console.log(sum(2,5));
console.log(sum(3,8));

// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.



// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function snt(n){
   
     // Biến cờ hiệu
     let x = true;
 
     // Nếu n bé hơn 2 tức là không phải số nguyên tố
     if (n < 2){
         x = false;
     }
     else if (n == 2){
         x = true;
     }
     else if (n % 2 == 0){
       x = false;
     }
     else{
         // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
         for (let i = 3; i < Math.sqrt(n); i+=2)
         {
             if (n % i == 0){
                 x = false;
                 break;
             }
         }
     }
  
     // Kiểm tra biến flag
     if (x == true){
         return true;
     }
     else{
         return false;
     }
}
console.log(snt(1));
console.log(snt(2));
console.log(snt(3));
console.log(snt(4));
console.log(snt(5));
// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.




