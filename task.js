"use strict"

function getResult(a,b,c){
    let result = [];
  
    let D = b**2 - 4 * a * c;
    
    if (D < 0) return result;
    
    if (D == 0) {
        let x = - b / (2 * a);
        result.push(x);
        return result;
    }
    
    if (D > 0) {
        let x1 =  (- b + D**0.5) / (2 * a);
        let x2 = (- b - D**0.5) / (2 * a);
        result.push(x1);
        result.push(x2);
        return result;
    }
}

function getAverageMark(marks){

    if (marks.length == 0) return 0;
    if (marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks.splice(5);
    }
    
    let averageMark;
  
    let marksSum = marks[0];
    
    for (let i = 1; i < marks.length; i++) {
        marksSum += marks[i];
    }
    
    averageMark = marksSum / marks.length; 
    
    return averageMark;
  }

function askDrink(name,dateOfBirthday){
    let result;
    
    let today = new Date();
    
    let userAge = today.getFullYear() - dateOfBirthday.getFullYear();
    
    if (userAge >= 18) result = ('Не желаете ли олд-фэшн, ' + name + '?');
    
    else result = ('Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!');
    
    return result;
}