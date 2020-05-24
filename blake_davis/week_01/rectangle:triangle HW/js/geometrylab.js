console.log('helloworld');

// const isSquare = function(rectangle) {
//   if (rectangle.length === rectangle.width) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Rectangles
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 4,
  width: 5
};

// functions
const isSquare = function(rectangle) {
  return rectangle.length === rectangle.width
}

const area = function(rectangle) {
  return rectangle.length * rectangle.width;
  // return calculation;
}

const perimeter = function(rectangle) {
  const calculation = (rectangle.length * 2) + (rectangle.width * 2)
  return calculation;
}

// function calls
console.log(isSquare(rectangleA))
console.log(isSquare(rectangleB))

console.log(area(rectangleA))
console.log(area(rectangleB))

console.log(perimeter(rectangleA))
console.log(perimeter(rectangleB))

//### Part 2, Triangle

//Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

//* isEquilateral - Returns whether the triangle is equilateral or not
//* isIsosceles - Returns whether the triangle is isosceles or not
//* area - Returns the area of the Triangle
//* isObtuse - Returns whether the triangle is obtuse or not

///```javascript
///const triangleA = {
///  sideA: 3,
///  sideB: 4,
///  sideC: 4
//};
/// ```

/// triangles

// triangles
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangleC = {
  sideA: 2,
  sideB: 3,
  sideC: 4
};

// functions
const equilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB) {
    if (triangle.sideC === triangle.sideA) {
      return true
    }
  }
  return false
}

const isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB) {
    return true
  }
  if (triangle.sideB === triangle.sideC) {
    return true
  }
  if (triangle.sideC === triangle.sideA) {
    return true
  }
  return false
}

const tarea = function(triangle) {
  const p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  const calculation = Math.sqrt(
    p * (p - triangle.sideA) *
    (p - triangle.sideB) *
    (p - triangle.sideC))

  return Math.round(calculation * 1000) / 1000;
}

// function calls
console.log(equilateral(triangleA))
console.log(equilateral(triangleB))
console.log(equilateral(triangleC))
console.log('=========================')

console.log(isIsosceles(triangleA))
console.log(isIsosceles(triangleB))
console.log(isIsosceles(triangleC))
console.log('=========================')

console.log(tarea(triangleA))
console.log(tarea(triangleB))
console.log(tarea(triangleC))
console.log('=========================')

// cash register
