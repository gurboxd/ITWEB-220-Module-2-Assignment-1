

function gradingProgram() {
    let continueProgram = true;

    while (continueProgram) {
        const numberOfAssignments = parseInt(prompt("Enter the number of assignments (1-10): "), 10);
        if (numberOfAssignments < 1 || numberOfAssignments > 10 || isNaN(numberOfAssignments)) {
            alert("Please enter a number between 1 and 10.");
            continue;
        }

        let totalScore = 0;
        for (let i = 0; i < numberOfAssignments; i++) {
            const score = parseFloat(prompt(`Enter score for assignment ${i + 1} (as a percentage): `));
            if (score < 0 || score > 100 || isNaN(score)) {
                alert("Please enter a value between 0 and 100.");
                continue;
            }
            totalScore += score;
        }

        const averageScore = totalScore / numberOfAssignments;
        const letterGrade = calculateLetterGrade(averageScore);

        alert(`your average is ${averageScore.toFixed(2)}%, which would be the grade: ${letterGrade}.`);

        const repeat = prompt("Would you like to repeat the program? (yes/no): ");
        continueProgram = repeat === 'yes';
    }
}
    function calculateLetterGrade(average) {
        if (average >= 90) return 'A';
        if (average >= 80) return 'B';
        if (average >= 70) return 'C';
        if (average >= 60) return 'D';
         return 'F';
     }
