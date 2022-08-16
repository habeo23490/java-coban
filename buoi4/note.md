cấu trúc 
let oje = {
    // thuộc tính
    key1 = ..
    ...
    // phương thức
    key1(): {...} ;
    key2(): {...} ;
    ker3: [value1,value2,....] ;
    ...
}
có 2 cách lấy giá trị 
oje.key   // dot notation
oje["key1"] // bracket notation
// tên thuộc tính không bị giới hạn đặt tên
//cho phép chứa bất kỳ kí tự gì
// lưu trữ dưới dạng chuỗi
// vẫn tuân thủ quy ước camelCase khi đặt tên thuộc tính
// ưu tiên sử dụng cú pháp dot notation khi truy cập giá trị
//bracket notation ; sử dungj trong trường hợp có 1 biến chứa key cần lấy
for ( let key in guessList) {
    oje[key];
   }
   // vòng lặp duyệt qua từng thuộc tính object

   // this : đối tượng thực hiện hành vi
   // this : đối tượng ở trước đầu .
   // this = oje 
   oje.name  // value
   this.name //value

   let oje1 = oje
   oje1.name // 




