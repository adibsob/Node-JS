const rectangle = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimentions: ${l}, ${w}`);

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimentions must be larger than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rectangle.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rectangle.perimeter(l, w)}`);

    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
solveRect(10, 6);