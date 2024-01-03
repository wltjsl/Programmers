function solution(n) {
    var answer = 0;
    for (let i=0; i<=n; i++){
        answer = i%2 ? answer : answer+i 
    }
    return answer;
}