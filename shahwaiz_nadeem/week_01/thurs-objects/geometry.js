/*
Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/
const rectangleA = {
  length: 4,
  width: 4
}

const isSquare = (square) => {
  if (square.length === square.width) {
    return true;
  }
  return false;
}

const area = (rectangle) => {
  return rectangle.length * rectangle.width;
}

const perimeter = (rectangle) => {
  return (2*rectangle.length) + (2*rectangle.width);
}

console.log(isSquare(rectangleA));
console.log(area(rectangleA));
console.log(perimeter(rectangleA));

/*
Part 2, Triangle
Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}

const isEquilateral = (triangle) => {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true;
  }
  return false;
}

const isIsosceles = (triangle) => {

}

const areaTri = (triangle) => {

}

const isObtuse = (triangle) => {

}

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(areaTri(triangleA));
console.log(isObtuse(triangleA));
