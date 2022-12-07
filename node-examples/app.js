const rect = require('./rectangle'); //works the same as imoprt in react

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimentions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {

        if (err) {
            console.log('Error:', err.message);
        } else {
            console.log(`Area of rectangle with dimentions ${l}, ${w}: ${rectangle.area()}`); //removing l, and w from pramater list since it is passed through it from outter functiuon
            console.log(`Perimeter of rectangle with dimentions ${l}, ${w}: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to react()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
solveRect(10, 6);