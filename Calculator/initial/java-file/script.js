function calculate(val){

    switch(val){
        case "AC":
            calculator.input.value = '';
            break
        case "DEL":
            calculator.input.value =calculator.input.value.slice(0, -1);
            break
        case "/":
            calculator.input.value += '/'
            break
        case "*":
            calculator.input.value += "*";
            break
        case "+":
            calculator.input.value += "+";
            break
        case "-":
            calculator.input.value += "-";
            break
        case "=":
            calculator.input.value = eval(calculator.input.value);
            break
        case "1":
            calculator.input.value += "1";
            break
        case "2":
            calculator.input.value += "2";
            break
        case "3":
            calculator.input.value += "3";
            break
        case "4":
            calculator.input.value += "4";
            break
        case "5":
            calculator.input.value += "5";
            break
        case "6":
            calculator.input.value += "6";
            break
        case "7":
            calculator.input.value += "7";
            break
        case "8":
            calculator.input.value += "8";
            break
        case "9":
            calculator.input.value += "9";
            break
        case "0":
            calculator.input.value += "0";
            break
        case ".": 
            calculator.input.value += ".";
            break

    }
}

