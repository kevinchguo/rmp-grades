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

    function passingScores() {
        let empArry = []
        for (let i = 0; i < arry.length; i++) {
            if (arry[i] >= 70) {
                empArry.push(arry[i])
            }
        }
        return empArry
    }

    function firstScore() {
        return arry[0];
    }

    function lastScore() {
        return arry[arry.length - 1]
    }

    function fivePercentExtraCredit() {
        let newArry = [];
        for (let i = 0; i < arry.length; i++) {
            let newScore = 0;
            newScore = arry[i] + (Math.round(arry[i] * 0.05));
            newArry.push(newScore)
            console.log(newScore)
        }
        return newArry;
    }

    function randomScores() {
        let newArr = [];
        // for (let i = 0; i < arry.length; i++) {
        //     let randomNum = Math.floor((Math.random() * 100) + 0)
        //     if (randomNum % 2 !== 0 ) {
        //         newArr.push(randomNum)
        //     }
        // }
        do {
            let randomNum = Math.floor((Math.random() * 100) + 0)
            if (randomNum  %2 !== 0) {
                newArr.push(randomNum)
            }
            } while (newArr.length < arry.length);
        return newArr;
    }
        


    return {
        findSum: findSum,
        findAvg: findAvg,
        randomScore: randomScore,
        passingScores: passingScores,
        firstScore: firstScore,
        lastScore: lastScore,
        fivePercentExtraCredit: fivePercentExtraCredit,
        randomScores: randomScores,
    }
})([65, 76, 100, 88, 17, 55]);

console.log(grades.findSum())
console.log(grades.findAvg())
console.log(grades.randomScore())
console.log(grades.passingScores())
console.log(grades.firstScore())
console.log(grades.lastScore())
console.log(grades.fivePercentExtraCredit())
console.log(grades.randomScores())