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


3. Data Type
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

3.1. Number - Số nguyên, số thực 
- const age = 25; // Số nguyên
- const price = 19.99; // Số thực
- const infinity = Infinity; // Vô hạn
- const notANumber = NaN; //Không phải là số


### Javascrip - Câu điều kiện
#### Câu điều kiện if
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



### Javascrip - Vòng lặp
#### Vòng lặp for i
Cú pháp vòng lặp for (i)
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