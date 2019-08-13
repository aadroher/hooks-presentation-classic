class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.getArea = this.getArea.bind(this);
  }

  getArea() {
    return this.width * this.height;
  }
}

const r = new Rectangle(3, 4);
const getArea = r.getArea;
console.log(getArea());
// 12
