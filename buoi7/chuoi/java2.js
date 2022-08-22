// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => 
// ''Hello World''.
function title(str) {
    var convertToArray = str.toLowerCase().split(' ');
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  
  return result.join(' ');
}


 console.log(title("HELLO world"));
// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function title1(str) {
    var convertToArray = str.toLowerCase().split(' ');
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toLowerCase());
  });
  
  return result.join(' ');
}


 console.log(title1("HELLO world"));

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau
// , không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false.
//  Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function result(string) {
    let string1 = string.split("")
        if(string1[0].toLowerCase() === string1[string1.length-1].toLowerCase() ) {
            return true ;
        }
        else{
    return false ;}

}
console.log(result("Race car") );
console.log(result("hello world") );


// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) 
// nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). 
// Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.
