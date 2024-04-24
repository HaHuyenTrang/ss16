"use strict";
/*
    Abstract class:

Abstract class là một lớp mà không thể tạo ra các đối tượng trực tiếp từ nó.
Abstract class thường chứa các phương thức abstract, các thuộc tính và phương thức thông thường.
Phương thức abstract là một phương thức mà chỉ có khai báo mà không có định nghĩa.
Các lớp kế thừa từ abstract class phải triển khai (định nghĩa) lại tất cả các phương thức abstract của nó.
Abstract class được sử dụng khi chúng ta muốn xác định một bộ khung chung cho các lớp con, nhưng không muốn
 tạo ra các đối tượng trực tiếp từ abstract class đó.
*/
/*
    Class:

Class là một bản thiết kế (blueprint) cho việc tạo ra các đối tượng.
Class chứa các thuộc tính và phương thức mà các đối tượng có thể sử dụng.
Các đối tượng được tạo ra từ class có thể có các giá trị riêng biệt cho thuộc tính của mình.
Class được sử dụng khi chúng ta muốn tạo ra các đối tượng cụ thể từ một thiết kế chung.
*/
class Trang {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
    }
}
let trang = new Trang("Trang", 18);
trang.getInfo();
