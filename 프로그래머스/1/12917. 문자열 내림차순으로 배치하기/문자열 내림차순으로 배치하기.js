function solution(s) {
    let answer = []
    for (let i = 0; i < s.length; i++){
        answer.push(s[i])
    }
    answer.sort()
    let string = ''
    for (let i = answer.length-1; i >= 0 ; i--){
        string += answer[i]
    }
    return string
}