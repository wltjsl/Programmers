function solution(n) {
    var answer=0;
    n = n+''
    let arr = [...n].sort((a,b)=>(b-a))
    arr.forEach(num => {answer += num})
    return answer-0
}