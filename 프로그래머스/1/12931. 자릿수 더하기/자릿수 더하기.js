function solution(n)
{
    var answer = 0;
    n += ''
    for (let i=0; i<n.length; i++){
        answer+=n[i]-0;
    }
    return answer;
}