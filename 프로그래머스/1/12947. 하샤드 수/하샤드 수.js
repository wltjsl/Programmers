function solution(x) {
    x = x+''
    var answer = 0;    
    for (let i = 0; i < x.length; i++){
        answer += x[i]-0
    }
    return x%answer === 0 ? true : false;
}