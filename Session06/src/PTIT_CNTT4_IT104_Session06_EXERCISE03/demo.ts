abstract class Animal {
  abstract sound(): void; // Chỉ khai báo, lớp con phải ghi đè
  eat(): void {
    // Có sẵn nội dung, lớp con có thể dùng chung
    console.log("This animal is eating.");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  sound(): void {
    console.log("Meow");
  }
}

const dog = new Dog();
dog.sound(); // "Woof"
dog.eat(); // Dùng chung từ lớp cha

const cat = new Cat();
cat.sound(); // "Meow"
cat.eat(); // Dùng chung từ lớp cha

// nên dùng abstract khi lớp cha chỉ định khung của phương thức nhưng chưa biết chi tiết
// nên dùng method thường khi đã biết rõ logic và dùng chung cho các lớp con
