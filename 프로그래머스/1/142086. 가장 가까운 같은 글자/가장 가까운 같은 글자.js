function solution(s) {
    let distance = []
    let place;
    for (let i = 0; i < s.length; i++){
        place = s.indexOf(s[i])
        if (i === place){
            distance.push(-1)
        }
        else if (s.indexOf(s[i], place+1) !== i) {
            while (place !== i){
                place = s.indexOf(s[i], place+1)
                if (s.indexOf(s[i], place+1) === i){break}
            }
            distance.push(i - place)
        }
        else (
            distance.push(i - place)
        )    
    }
    return distance
}