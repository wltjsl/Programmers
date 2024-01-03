function solution(angle) {
    var answer = angle-90;
    if (answer < 0){
        return 1;
    }
    else if (answer === 0){
        return 2;
    }
    else if (answer === 90){
        return 4;
    }
    else {return 3;}
}