//37 day challenge
//Q. 109 write an if statement that logs "good morning" if the current time is before 12 pm.
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("good morning"); //it's morning if before 12 pm
}
// real time output it will show good morning when the time is < 12.
// this simple check helps us greet users appropriately based on the time of day.
//Q. 110 create a function that assigns a grade (A, B, C, D, F) based on a students score.
console.log("\n");
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85));
console.log(assignGrade(90));
console.log(assignGrade(55));
console.log(assignGrade(70));
//best on the score provided, we log the corresponding score grade.
//Q.111 use an if else if chain to categorize a person age group(child, teenager, adult)?
console.log("\n");
function ageGroup(age) {
    if (age <= 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(ageGroup(11));
console.log(ageGroup(18));
console.log(ageGroup(24));
//based on the age provided, we log the corresponding age group.
