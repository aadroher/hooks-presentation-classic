class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const r = new Rectangle(3, 4);
const getArea = r.getArea;
console.log(getArea());

// TypeError: Cannot read property 'width' of undefined
