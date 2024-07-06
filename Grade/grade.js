document.getElementById('calculateButton').addEventListener('click', function() {
    let math = +(document.getElementById('math').value);
    let science = +(document.getElementById('science').value);
    let english = +(document.getElementById('english').value);
    let history = +(document.getElementById('history').value);
    let geography = +(document.getElementById('hindi').value);

    const totalMarks = math + science + english + history + hindi;

    if (totalMarks >= 450) {
        grade = 'A';
    } else if (totalMarks >= 400) {
        grade = 'B';
    } else if (totalMarks >= 350) {
        grade = 'C';
    } else if (totalMarks >= 300) {
        grade = 'D';
    } else if (totalMarks >= 250) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    document.getElementById('totalMarks').innerText = `Total Marks: ${totalMarks}`;
    document.getElementById('grade').innerText = `Grade: ${grade}`;
});