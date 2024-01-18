console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printodd(count) {
for (let i = 0; i <= count; i++){
    if (i % 2 === 0){
        continue;
    } else {
        console.log(`${i}`);
    }
}
}
printodd(50);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName, userAge){
    console.log(`Hello, ${userName}`);
    let userAge = 0;
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if (userAge < 16) {
        console.log(`${belowSixteen}`);
    } else {
        console.log(`${aboveSixteen}`);
    }
}

checkAge("Herby", 25);
checkAge("Brianna", 12);



function Quadrant(x,y){
    if(x === 0 && y === 0) {
        console.log(`No quadrant, point has not moved.`);
    }else if( x === 0 && y > 0) {
        console.log(`(${x},${y}) is on the X axis`);
    } else if(x > 0 && y === 0){
        console.log(`(${x},${y}) is on the Y axis`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x},${y}) is in Quadrant 1`)
    } else if (x < 0 && y < 0) {
        console.log(`(${x},${y}) is in Quadrant 3`)
    } else if (x > 0 && y < 0) {
        console.log(`(${x},${y}) is in Quadrant 4 `)
    } else if (x < 0 && y > 0) {
        console.log(`(${x},${y}) is in Quadrant 2 `)
    }
}

Quadrant(2,4);





