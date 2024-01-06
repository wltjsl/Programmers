function solution(arr, divisor) {
    let answer = [];
    arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i++){
    if (arr[i]%divisor === 0){
        answer.push(arr[i])
    }}
    return answer[0] ? answer : [-1];
}