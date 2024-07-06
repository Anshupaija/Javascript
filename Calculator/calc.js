function calculate(calculations) {
    let number1 = +(document.getElementById('num1').value);
    let number2 = +(document.getElementById('num2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers";
    } else {
        switch (calculations) {
            case 'addition':
                result = number1 + number2;
                break;
            case 'subtraction':
                result = number1 - number2;
                break;
            case 'multiplication':
                result = number1 * number2;
                break;
            case 'division':
                if (number2 === 0 || number1 === 0) {
                    result = "The Number Can't Be Divided By 0";
                } 
                else {
                    result = number1 / number2;
                }
                break;
        }
    }

    document.getElementById('result').value = result;
}