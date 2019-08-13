const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

const a = new Rectangle(3, 4);
const b = new Rectangle(3, 5);
console.log(a.getArea());
// 12
console.log(b.getArea());
// 15
