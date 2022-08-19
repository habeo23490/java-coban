/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
 function capitalize(str) {}

 /**
  * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
  *
  * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
  *
  * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
  *
  * @param {string} str Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
  */
 function title(str) {}
 
 /**
  * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @returns {number} Số ký tự nguyên âm có trong chuỗi
  */
 function countVowel(str) {}
 
 /**
  * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
  *
  * @return {string} Màu ngẫu nhiên
  */
 function randomColor() {}
 
 /**
  * Đảo ngược thứ tự các từ trong chuỗi
  *
  * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi đảo ngược
  */
 function reverseWords(str) {}
 
 /**
  * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
  *
  * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
  * @param {string} str Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi URL
  */
 function parameterize(str) {}











 // datetime

 /**
 * Trả về chuỗi đại diện cho ngày hôm nay theo định dạng VN
 *
 * Ví dụ: 01/10/2022 (lưu ý, ngày tháng đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi ngày tháng
 */
function currentDate() {}

/**
 * Trả về chuỗi đại diện cho thời gian hiện tại
 *
 * Ví dụ: 10:30:59 (lưu ý, giờ, phút, giây đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi thời gian
 */
function currentTime() {}

/**
 * Tìm thứ trong tuần tương ứng với ngày hiện tại
 *
 * Ví dụ: T2, T3, ..., CN
 *
 * @returns {string} Thứ tương ứng
 */
function todayWeekday() {}

/**
 * Tìm ngày cuối cùng của tháng
 *
 * @param {Date} date - Ngày bất kỳ
 *
 * @returns {Date} Ngày cuối tháng
 */
function getLastDayOfMonth(date) {}

/**
 * Tính số ngày đến tết dương lịch năm sau
 *
 * @returns {number} Số ngày cho đến tết dương lịch năm sau
 */
function getDaysToNextYear() {}

/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {}

/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
function todayBirthday(users) {}