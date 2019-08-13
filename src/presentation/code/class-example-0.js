class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const a = new Rectangle(3, 4);
const b = new Rectangle(3, 5);
console.log(a.getArea());
// 12
console.log(b.getArea());
// 15
