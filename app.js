//Bài 1: Nhập a,b. Kiểm tra a có chia hết cho b hay không 
// let a = Number(prompt ('Nhập và số a'));
// let b = Number(prompt('Nhập vào số b'));
// if (a%b === 0){
//     console.log('a chia hết cho b');
// } else {
//     console.log('a không chia hết cho b');
// }

// // Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10
// let n = Number(prompt('Nhập tuổi của bạn')); 
// if (n >= 15){
//     console.log("Học sinh đủ tuổi để học lớp 10");
// } else {
//     console.log('Học sinh không đủ tuổi để học lớp 10');
// }

// Bài 3: Nhập số nguyên bất kỳ và in ra kết quả màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let n = Number(prompt('Nhập vào số nguyên bất kỳ'));
// if (Number.isInteger(n) && n<0){
//     alert(`Số bạn nhập là số nguyên nhỏ hơn 0`);
// } else if (Number.isInteger(n) && n>0){
//     alert(`Số bạn nhập là số nguyên lớn hơn 0`);
// } else {
//     alert(`Nhập lại số khác đi bạn ơi `);
// }

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = Number(prompt('Nhập vào số a bất kì'));
// let b = Number(prompt('Nhập vào số b bất kì'));
// let c = Number(prompt('Nhập vào số c bất kì'));
// if (Number.isInteger(a) && Number.isInteger(b)&& Number.isInteger(c)){
//     alert(Math.max(a,b,c));
// } else {
//     alert('Nhập lại đi bạn ơi');
// }

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let a= prompt ('Nhập số điểm kiểm tra');
// let b = prompt ('Nhập số điểm thi giữa kỳ');
// let c= prompt ('Nhập số điểm thi cuối kỳ '); 
// let tb = a * 0.1 + b * 0.2 + c * 0.7;
// if (tb < 5){
//     alert('Học lực Yếu');
// } else if (tb>=5 && tb <7){
//     alert('Học lực Trung bình');
// } else if (tb>=7 && tb <8.5){
//     alert('Học lực Khá');
// }   else if (tb>=8.5){
//     alert('Học lực Giỏi');  
// }     

// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// let n = Number(prompt ('Nhập vào doanh số bán hàng'));
// if (n < 1000000){
//     alert(`Hoa hồng nhận được là ${n * 0.05}`);
// } else if ( n>=1000000 && n<= 3000000){
//     alert (`Hoa hồng nhận được là ${n * 0.07}`);
// } else if ( n > 3000000 && n<= 5000000){
//     alert (`Hoa hồng nhận được là ${n * 0.1}`);
// } else if ( n > 5000000 && n<= 10000000){
//     alert (`Hoa hồng nhận được là ${n * 0.15}`);
// } else {
//     alert (`Hoa hồng nhận được là ${n * 0.2}`);
// }

// Bài 7: Tính số cân nặng của cơ thể,
// let w = prompt('Your weight in kg');
// let h = prompt('Your height in cm');
// let BMI = (w/Math.pow(h/100,2));
// if (BMI < 18) {
//     alert("Thiếu cân");
// } else if (BMI>=18 && BMI<25) {
//     alert("Bình thường");
// } else if(BMI>=25 && BMI<30) {
//     alert("Thừa cân");
// } else {
//     alert("Béo quá! Giảm cân đi");
// }