/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return "a b c bang nhau";
  }
}
console.log(maxOfThree(2, 2, 1));
console.log(maxOfThree(1, 1, 1));

/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {number} Mùa tương ứng với tháng (Winter | Spring | Summer | Fall)
 */
function findSeason(month) {
  let wrather;
  if (month == 12 || month == 1 || month == 2) {
    wrather = "Winter";
  } else if (month == 3 || month == 4 || month == 5) {
    wrather = "Spring";
  } else if (month == 6 || month == 7 || month == 8) {
    wrather = "Summer";
  } else if (month == 9 || month == 10 || month == 11) {
    wrather = "Fall";
  } else {
    return NaN;
  }
  return "Tháng" + " " + month + " " + wrather;
}



console.log(findSeason(12));
console.log(findSeason(5));
console.log(findSeason(7));
console.log(findSeason(11));
console.log(findSeason(21));


/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
  return (
    (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)
  );
}
console.log(isLeafYear(2020));
console.log(isLeafYear(2100));
console.log(isLeafYear(2000));

/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(month, year) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    return "Năm" + " "+ year + " " + "Tháng" + month + " " + " có 31 ngày ";
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    return "Năm" + " " + year + " " + "Tháng" + month + " " + " có 30 ngày ";
  } else if (month == 2) {
    if (isLeafYear(year) == true) {
      return "Năm" + " " + year + " " + "Tháng 2 có 29 ngày ";
    } else {
      return "Năm" + " " + year + " " + "Tháng 2 có 28 ngày ";
    }
  }
}
console.log(findDayOfMonth(2, 2000));
console.log(findDayOfMonth(2, 2100));
console.log(findDayOfMonth(1, 2113));

/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
 */
// function calcGrade(point) {
//    return point < 4 ? "F" :
//    (point > 4 && point <5.5) ? "D" :
//    (point > 5.5 && point < 7) ? "C" :
//     (point > 7 && point < 8.5) ? "B" :
//     (point > 8.5 && point < 10) ? "A" ;
// }
function calcGrade(point) {
  if (point < 4) {
    return "Điểm F";
  } else if (point > 4 && point < 5.5) {
    return "Điểm D";
  } else if (point > 5.5 && point < 7) {
    return "Điểm C";
  } else if (point > 7 && point <= 8.5) {
    return "Điểm B";
  } else if (point > 8.5 && point <= 10) {
    return "Điểm A";
  } else {
    return NaN;
  }
}
console.log(calcGrade(11));
console.log(calcGrade(3.5));
console.log(calcGrade(6.5));
console.log(calcGrade(7.5));
console.log(calcGrade(9.5));


/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */
let intact = 10_000;
let firstKm = 11_000;
let secondKm = 9_500;
function calcTaxiFee(km) {
  if (0 < km && 30 >= km) {
    return intact + firstKm * km + " " + " VNĐ ";
  } else {
    return intact + secondKm * km + " " + " VNĐ";
  }
  // số km ko có sô âm nên eles
}
console.log(calcTaxiFee(40));
console.log(calcTaxiFee(10));

/**
 * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} b Tham số b
 * @param {number} c Tham số c
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {
  let test = -b / (2 * a);
  let test1 = b ** 2 - 4 * a * c;

  if (a==0 && b == 0 && c == 0) {
    return Infinity ;
    
  }

  else if (test1 < 0) {
    return null;
  } else if (test1 == 0) {
    return test;
  } else if (test1 > 0) {
    return (
      "nghiệm 1 là " +
      " " +
      (test + (test1 ** 0.5 * 1) / 2) +
      " " +
      "nghiệm 2 là " +
      " " +
      (test - (test1 ** 0.5 * 1) / 2)
    );
  } 
  // thieu khi a = 0 ;
  
}

console.log(solveEquation(0,0, 0));
console.log(solveEquation(1, 1, 1));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(3, 4, 1));



