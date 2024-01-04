function solution(n) {
    n = n.toString();
    var answer = [];
    for (let i = n.length; i>0; i--){
        answer.push(n[i-1]-0);
    }
    return answer;
}