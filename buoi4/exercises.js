// Danh sách sinh viên và quốc gia tương ứng
// Tên sinh viên là key còn quốc gia là value
const guessList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina",
};

/**
 * Kiểm tra xem `name` có trong `guessList` hay không
 *
 * - Nếu có thì trả về chuỗi theo mẫu: `Hi! I'm [name], and I'm from [country]!`
 * - Nếu không có thì trả về chuỗi theo mẫu: `Hi! I'm guess.`
 *
 * @param {string} name Tên bất kỳ
 *
 * @return {string} Câu chào
 */
function greeting(name) {
    for(let key in guessList ) {
        
    
   if(key === name) {
    return "hi , i m " + key + " " + guessList[name]  ;
   }
  
}
return "Hi! I'm guess" 
}

console.log(greeting("Wendy"));
console.log(greeting("Norman"));
console.log(greeting("Sam"));
console.log(greeting("Randy"));
console.log(greeting("Ha"));

// Danh sách thành viên trong 1 gia đình
// Tên là key, tuổi là value
const myFamily = {
    Fred: 34,
    Susan: 32,
    Emily: 8,
    Tom: 5,
};

/**
 * Tính xem sau `n` năm nữa thì các thành viên trong gia đình bao nhiêu tuổi
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} obj Danh sách thành viên trong gia đình
 * @param {number} n Số năm bất kỳ
 *
 * @return {{[key: string]: number}} Danh sách thành viên và số tuổi tương ứng sau `n` năm
 */
function afterNYears(obj, n) {
    const obj1 = {};
    for(let age in obj) {
        // obj1[[age]] = obj[age] + n ;
        Object.assign(obj1, {[age]: obj[age] + n} );
    }
    return obj1 ;
   
}
console.log(afterNYears(myFamily, 2));


/**
 * Đảo ngược key thành value, value thành key của một object bất kỳ
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{key: string}: any} obj Object bất kỳ
 *
 * @return {[key: string]: string} Object mới sau khi đảo ngược
 */
function invert(obj22) {
    let obj2 = {} ;
    for( let result in obj22 ){
       Object.assign(obj2 , {[obj22[result]] : result }) ;
    }
    return obj2 ;

}
obj22 = {
    Fred: "HA",
    Susan: "HA1",
    Emily: "HA2",
    Tom: "HA3",
}
console.log(invert(obj22));

// Danh sách items
// Key là tên, value là giá trị tương ứng
const items = {
    tv: 300,
    ipad: 1000,
};

/**
 * Tính tổng giá trị (value) các items trong object đầu vào
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {number} Tổng giá trị các items
 */
function totalAmount(items) {
    let x = 0 ;
    for( let sum in items) {
       x += items[sum];
    }
    return x ;
}
console.log(totalAmount(items));


/**
 * Lọc và trả về danh sách các items có giá trị cao (value >= 1000) trong danh sách đầu vào
 *
 * Lưu ý: Object ban đầu không được phép thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {{[key: string]: number}} Danh sách các items có giá trị cao
 */
function expensiveItems(itemss) {
    let object2 = {} ;
    for(let key in items) {
        if(items[key] >= 1000) {
            return Object.assign(object2 , {[key] : itemss[key]}) ;
        }
    }
    return NaN ;
}
itemss = {
    tv: 300,
    ipad: 1000,
    ipad: 1010,
    ipad: 1100,

}
console.log(expensiveItems(itemss));
