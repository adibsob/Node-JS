//both export methods are the same but only if you are deffining a method on the export but if you assign a function as the value for the entire export then you no longer can use only EXPORTS and you have to include the MODULE
//example:
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimentions must be larger than zero. Received: ${x}, ${y}`))
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};