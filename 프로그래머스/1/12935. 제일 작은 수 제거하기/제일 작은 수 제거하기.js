function solution(arr) {
    var index = 0;
    var min = arr[0];
    var answer = [];
    for (let i = 1; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i]
            index = i
        }
    }
    for (let i = 0; i < arr.length; i++){
        if (i === index){continue}
        else {
            answer.push(arr[i])
        }
    }
    return answer.length ? answer : [-1]
}