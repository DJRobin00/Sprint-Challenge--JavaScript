// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height){
    this.length = length;
    this.widht = width;
    this.height = height;
    };
    volume = function (length, width, height) {
        return length * width * height;
    };
    surfaceArea = function (length, width, height) {
        return 2 * length * width + length * height + width * height;
    };

}
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using 
// the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.