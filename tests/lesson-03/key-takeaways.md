# Lessons Learned - Auto Testing

## Lesson 3:
Ngày học: 25/11/2025:

**Git**
- Undo actions
- Branching model

**JavaScript basic**
- Logical operator
- Object and array
- Function

1. Git: Undo things
- Commit message
    - git commit --amend -m"message": đổi message 

- File staging -> working directory
    - git restore --staged <file_name>
    - git restore --staged .

- File repository -> working directory (un-commit)
    - git reset HEAD ~1: bỏ commit trước đó
    - git reset HEAD ~N: reset N commit

**Lưu ý**
- Commit đầu tiên không thể bị reset
- Nếu muốn reset -> xoá thư mục .git đi rồi init lại

### Git - pull code
1. Git: pull code - Lấy code từ server về
git pull origin main

### Git - Branching
- Git sử dụng nhánh (branch) để tạo ra các phiên bản riêng của code, tránh ảnh hưởng tới bản gốc.
- Một số câu lệnh với nhánh: 
    - Xem danh sách nhánh: git branch

    - Tạo nhánh mới: git branch <tên_branch> 
        Ex: git branch feat/feature-B

    - Chuyển sang nhánh mới: git checkout <tên_branch> 
        Ex: git checkout feat/feature-B 

    - Vừa tạo, vừa chuyển sang nhánh mới: git checkout -b <tên_branch>
        Ex: git checkout -b feat/feature-C

    - Xoá branch: git branch -D <tên_branch> 
        Ex: git branch -D feat/feature-C

**Lưu ý**
- Luôn pull code về trước khi tạo nhánh mới



### Git ignore file
- Git k theo dõi file này
- Cú pháp:
    - Bỏ qua folder: <folder-name>/
        Ex: mat_khau/

    - Bỏ qua file: <file_name>
        Ex: .env

### JavaScript
1. Convention
- snake_case: tạm thời chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class

2. Cách sử dụng console.log
- Formatted console.log
    - console.log ('Toi la Nga');
    - console.log("Toi la Phong");
    - console.log(`${variable_name})
    - let name = "Nga";
    - console.log(`Toi la ${name}');
    - console.log("Toi ten la" + name + "")

### Object 
- Là 1 trong những kiểu dữ liệu quan trọng nhất trong JS, dùng để lưu trữ dữ liệu dạng key-value
const/let <ten_object> = {
    key1: value1,
    key2: value2
}

Trong đó:
- <key>: giống quy tắc đặt tên biến
- <value>: có kiểu giống biến hoặc 1 object khác 

- Object dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
- Khai báo: 
Ví dụ:
○ let user = {“name”: “Alex”, “age”: 10,“email”: “alex@gmail.com”}
○ const product = {
“name”: “Laptop”,
“price”: 500,
“isWindow”: true,
“manufacturer”: {
“name”: “Acer”,
“year”: 2024
}

- Sử dụng:
console.log("name = " + user.name);
console.log("manufacturer name = " + product.manufacturer.name);
console.log(“price = “, product[“price”]);

- Gán lại:
user.age = 28
product[“manufacturer”][“year”] = 2025

## Logical operator 
&& : cả 2 vế của mệnh đề đều đúng
|| : một trong 2 vế đúng
!  : đảo ngược lại giá trị của mệnh đề

## Array: Mảng
Tạo mảng
○ Khai báo
○ Sử dụng
● Truy xuất mảng
○ Độ dài mảng: length
○ Lấy phần tử theo index:
[0], [1], [2]

## Function
- Function = hàm, là 1 đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể
Khai báo:
function <nameFunction> (){
    //code
}
Ví dụ 1:
function sayHelloWorld(){
    console.log("Hello world);
}
sayHelloWorld();

Ví dụ 2:
fuction countBeforeHello(){
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
    sayHelloWorld();
}

countBeforeHello();


### Parameter
fuction countBeforeHello(n){
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    sayHelloWorld();
}

countBeforeHello(10);

