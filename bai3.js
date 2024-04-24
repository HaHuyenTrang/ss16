"use strict";
/*
    Trong TypeScript, abstract method (phương thức trừu tượng)
     và method (phương thức) cũng có sự khác biệt tương tự như trong lập trình hướng đối tượng.

Abstract method trong TypeScript được khai báo trong lớp trừu tượng (abstract class) hoặc interface.
 Nó chỉ định tên của phương thức và kiểu dữ liệu của các tham số và kiểu dữ liệu trả về (nếu có),
  mà các lớp con hoặc lớp triển khai interface cần phải triển khai. Abstract method không có định
  nghĩa cụ thể và phải được triển khai trong lớp con hoặc lớp triển khai interface.
*/
class animal {
    sleep() {
        console.log("ngủ");
    }
}
class D extends animal {
    makeSound() {
        console.log("gau!");
    }
}
class C extends animal {
    makeSound() {
        console.log("meo!");
    }
}
const d = new D();
d.makeSound();
d.sleep();
const c = new C();
c.makeSound();
c.sleep();
