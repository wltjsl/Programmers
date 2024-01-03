function solution(arr) {
    var answer = 0;
    arr.forEach(function (int) {answer += int;} )
    return answer / arr.length;
}