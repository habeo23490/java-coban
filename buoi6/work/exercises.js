/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
function min(arr) {

    /*Hàm tìm vị trí số nhỏ nhất trong mảng JavaScript*/


    //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
    let minArr =  arr[0];  
    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
    for (let i = 0; i < arr.length; ++i) {
        if (minArr > arr[i]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
           minArr = arr[i];
        }
    }

 console.log("min = ",minArr);
}
min([2,3,4,5,5,2,1,3]);
    




/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
    let maxArr = arr[0] ;
for(let i = 0 ; i < arr.length ; i++){
    if (maxArr < arr[i]) {
        maxArr = arr[i];
        
    }

}
return console.log("max = ",maxArr);

    
}
max([2,3,4,5,5,2,1,3]);

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {}

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {}

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
    const result = [];
    for(const number of arr1) {
        if(arr2.includes(number)) {
            result.push(number)
        }
    }
    return result ;
}
console.log(intersection([1,2,5],[2,9,7]));

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
    const result = [];
    for(const number of arr1) {
        if(!arr2.includes(number)) {
            result.push(number)
        }
    }

    for(const number of arr2) {
        if(!arr1.includes(number)) {
            result.push(number)
        }
    }
    return result ;
}
console.log(difference([1,2,5],[2,9,7]));

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
    const temp = [];
    for(let number of arr) 
    if(!temp.includes(number))
    temp.push(number);

arr.length = 0 ;
for(let number of temp) arr.push(number);

}

const myArr = [1,1,2,2,3,3,4,4]
removeDuplicate(myArr)

console.log(myArr);



/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {}

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr1) {
    const temp = [];
    for(let numberss of arr1) {
      arr1.sort(() => Math.random() - 0.5)

    }
    return arr1;
}
console.log(shuffle([1,4,2,4,3]));
