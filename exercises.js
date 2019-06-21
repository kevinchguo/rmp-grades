//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores
// 2. finds the avg of all scores
// 3. finds the highest score
// 4. finds the lowest score
// 5. generates a random score
// 6. finds the number of passing scores above 70
// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered

var grades = (function (arry) {

    function findSum() {
        let sum = 0;
        for (let i = 0; i < arry.length; i++) {
            sum = arry[i] + sum;
        }
        return sum
    }

    function findAvg() {
        let sum = findSum()
        return sum/arry.length
    }

    function randomScore() {
        return arry[Math.floor((Math.random() * arry.length) + 0)]
        // to return a random number from x to y use Math.floor() to get a non decimal number and ((Math.random() * x) + y)
    }

    return {
        findSum: findSum,
        findAvg: findAvg,
        randomScore: randomScore,
        
    }
})([65, 76, 100, 88, 17, 55]);

console.log(grades.findSum())
console.log(grades.findAvg())
console.log(grades.randomScore())