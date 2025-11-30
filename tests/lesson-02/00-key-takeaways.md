# Lessons Learned - Auto Testing

## Lesson 2:
Ngày học: 21/11/2025:

### Version control system 
- Là hệ thống quản lý phiên bản khác nhau
- Có 3 loại chính:
    - Local: lưu ở máy cá nhân
    - Centralize: lưu ở một máy chủ tập trung
    - Distributed: lưu ở nhiều máy khác nhau
- Hiện nay phổ biết nhất vẫn là Distributed Version Control System. Trong khoá học này, chúng ta học về Git - một distributed version control system.

### Git
- Git là DVCS phố biến nhất thế giới
- Git và GitHub là hai khái niệm khác nhau:
1. Git
- Là 1 phần mềm
- Cài trên máy của bạn
- Là 1 command line tool
- Là công cụ quản lý phiên bản, đưa file vào Git repository
- Có các tính năng của Version Control System

2. GitHub
- Là 1 dịch vụ web
- Host trên website
- Là công cụ có giao diện
- Là nơi để upload Git repository lên
- Có các tính năng của Version Control System và 1 số tính năng khác (GitHub Actions, GitHub Co-pilot)

#### Git - three states
1. Working Directory: Các file mới hoặc file thay đổi
- “test1.spec.ts”
- “.gitignore”
- “package.json”

2. Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- “git add test1.spec.ts” 
- “git add .” - add hết tất cả các file

3. Repository: Các commit (phiên bản)
- git commit -m “feat: add test 1”

**Tổng kết Git**

Làm 1 lần duy nhất
- Khởi tạo repo local: “git init”
- Tạo repo GitHub và liên kết tới repo local: “git remote and origin <url>” 

Làm mỗi khi có thay đổi
- Thêm file vào staging: “git add .”
- Commit file: “git commit -m “<message>””
- push code: “git push origin main” 


### Javascrip basic
1. Chương trình đầu tiên "Hello world!"
- console.log("nội dung");
- console.log('nội dung');

2. Comment: là 1 cách vô hiệu hoá tạm thời một đoạn code
- // 

- /*
console.log("nội dung"); 
*/

3. Biến và hằng
- Khai báo biến:
<từ khoá> <tên biến> = <giá trị>
- Từ khoá: var/let

**Ex1**: 
1. var centerName = "Better Bytes Acedemy";
2. let isLovePlaywright = true; //false
3. console.log(centerName);

- Var và let khác nhau như thế nào? Khi nào dùng var, khi nào dùng let?
    - Về cú pháp:
        - Let ra đời sau, là cú pháp hiện đại và an toàn
        - var ra đời trước, cú pháp cũ, ít sử dụng

    - An toàn hơn:
        - var cho phép khai báo lại, let thì không
        - var có phạm vi global, còn let thì phạm vi block
    - Chỉ dùng let khi chắc chặn cần gán lại giá trị

- Khai báo hằng:
<từ khoá> <tên hằng> = <giá trị>
- Từ khoá: const 


4. Data Type
- Trong Javascript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
    - Kiểu nguyên thuỷ (primitive types)
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
        - BigInt

    - Kiểu tham chiếu (reference types)
        - Object

4.1. Number - Số nguyên, số thực 
- const age = 25; // Số nguyên
- const price = 19.99; // Số thực
- const infinity = Infinity; // Vô hạn
- const notANumber = NaN; //Không phải là số

4.2. String - Chuỗi ký tự

const name = "John"; //Dùng nháy kép
const message = 'Hello'; //Dùng nháy đơn
const template = `Age: 10`; //Dùng "backtick" 

4.3. Data type - boolean
- Giá trị logic
const isActive = true; 
const isComplete = false;

**Làm sao để biết 1 biến có kiểu dữ liệu gì?**
typeof <variable> 
Output: number ||string || boolean

5. Toán tử so sánh
- So sánh bằng: == và ===
- So sánh không bằng: !
- So sánh lớn hơn, nhỏ hơn: >, <, <=, >= 
- khác: !==

5.1. So sánh hai bằng == (Loose Equality)
- So sánh giá trị sau khi chuyển đổi kiểu (type coercion)
**Ex**
5 == "5" // true (chuyển string thành number)
5 == "6" // false (chuyển string thành number)
true == 1 // true (true chuyển thành 1)
false == 0 // true (false chuyển thành 0)

5.3. So sánh ba bằng === (Strict Equality)
- So sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu
**Ex**
5 === "5" // false (khác kiểu)
true === 1 //false (khác kiểu)
false === 0 //false (khác kiểu)
5 === 5 // true (cùng kiểu, cùng giá trị)

6. Toán tử logic
- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean
    - && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
    - || (OR): trả về đúng nếu 1 trong 2 vế của mệnh đề đúng


7. Toán tử một ngôi
- Là 1 toán tử chỉ cần một toán hạng để thực hiện
**Ex**
let x = 5;
x++; 
++x;
x--;
--x;
- Hai loại:
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
        - ++x;
        - --x;
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
        - x++;
        - x--;
**Ex**
let a = 10
b = ++a; // tăng 1 lên 11 rồi trả về b có giá trị là 11

let c = 10; 
d = c++ // trả về giá trị 10 cho d rồi mới tăng => d có giá trị là 10

8. Toán tử toán học: +, -, *, /
**Ex**
const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber; //result = 15

**Lưu ý**
- Khi chia cho 0, sẽ ra kết quả infinity (vô cực)


9. Câu điều kiện
- Câu điều kiện dùng để kiểm tra 1 đoạn logic trước khi chạy
- Nếu điều kiện đúng thì mới chạy
- Có các loại câu điều kiện:
    - if
    - if ...else
    - if...else if...else
    - switch...case

9.1. Câu điều kiện if
**Cú pháp**: 
if (<điều kiện>){
    // code
}

**Ex1**: 
const hour = 16;
if (hour < 12){
    console.log("Chao buoi sang");
}

**Ex2**: 
let hour = 8
if (hour >=6 && hour <= 11){
    console.log("Good morning);
}

**Ex3**: Kết hợp nhiều điều kiện - nested condition

let hour = 8
if (hour >=6){
    if (hour <=11) {
        console.log("Good morning");
    }
}


10. Vòng lặp
- Vòng lặp dùng để lặp lại 1 đoạn logic
- Có thể lặp 1 số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng
- Trong JavaScript, có các loại vòng lặp:
    - for (i)
    - for (of)
    - for (each)
    - for (in)
    - while
    - do...while

**Vòng lặp for i**

Cú pháp vòng lặp for (i): 

for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){
    // code
}

Trong đó:
- Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu
- Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
- Cập nhật: Chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm

**Ex1**: 
for (let i = 0; i < 5; i++){
    console.log("Xin chào!)
}

**Ex2**: Tinh tong tu 1 den 10
for (let i = 0; i < = 10; i++){
    sum += i
}
console.log(sum);