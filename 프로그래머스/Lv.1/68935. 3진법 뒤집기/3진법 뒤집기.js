function solution(n) {
    let answer = [];
    let number = 0;
    while (Math.floor(n/3) !== 0){
        answer.push(n%3)
        n -= n%3
        n /= 3

    }
    if (n<3){
        answer.push(n)
    }
    for (let i = 0; i < answer.length; i++){
        number += 3**i*answer[answer.length-1-i]
    }
    return number
}