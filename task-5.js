function calculator (num1, num2, operator){
    if (operator == "+"){
        return (num1 + num2)
    }
    else if(operator == "-"){
        return (num1 - num2)
    }
    else if (operator == "/"){
        return (num1 / num2).toFixed(5)
    }
    else if(operator == "*"){
        return (num1 * num2)
    }
}