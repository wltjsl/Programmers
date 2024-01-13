function solution(a, b) {
    const week = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    const year = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let day = b;
    for (let i = 0; i < a-1; i++){
        day += year[i]
    }
    return week[day%7]
}