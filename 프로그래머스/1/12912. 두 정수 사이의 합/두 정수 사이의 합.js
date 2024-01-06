function solution(a, b) {
    let n = (a-b >= b-a) ? a-b+1 : b-a+1
    return n*(a+b)/2 }