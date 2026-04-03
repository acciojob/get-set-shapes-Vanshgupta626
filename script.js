//complete this code
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // getter for width
    get width() {
        return this._width;
    }

    // getter for height
    get height() {
        return this._height;
    }

    // area method
    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); // width = height = side
    }

    // perimeter method
    getPerimeter() {
        return this._width * 4;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;