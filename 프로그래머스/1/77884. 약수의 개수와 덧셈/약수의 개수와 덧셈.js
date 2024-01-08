function solution(left, right) {
    var answer = 0;
    for (left; left <= right; left++) {
        for (let i = 2; i**2 <= 1000; i++) {
            if (left === 1 || left === i**2) {
                answer -= left
                break
            }
            else if ((i+1)**2 > 1000){
                answer += left
            }
        }
    }
    return answer;
}