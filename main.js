function getLetterGrade(average) {
    switch (true) {
        case (average >= 90): return 'A';
        case (average >= 80): return 'B';
        case (average >= 70): return 'C';
        case (average >= 60): return 'D';
        default: return 'F';
    }
}

let repeat = "yes";

while(repeat === "yes"){
    let numberOfAssignment = prompt("What is the number of the assignment to grade(max 10)");
    if(isNaN(numberOfAssignment) || numberOfAssignment < 1 || numberOfAssignment>10 ){
        alert("Invalid number. Please enter a number between 1 and 10.");
        continue;
    }
    let totalScore = 0;

    for (let i = 1; i <= numberOfAssignment; i++) {
        const score = prompt("Enter the score for assignment " + i);
        if (isNaN(score) || score <0 || score>100){
            alert("Invalid score. Please enter a number between 0 and 100.");
            i--;
            continue;
        }
        totalScore += parseFloat(score);
    }
    const average = totalScore / numberOfAssignment ;
    const letterGrade = getLetterGrade(average);
    alert("The average score is " + average.toFixed(2) + "and letter grade is " +letterGrade);
    repeat = prompt("Whould you like to calculate new one? ")
}
    
