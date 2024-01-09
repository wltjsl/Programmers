function solution(s) {
    if (!isNaN(s-0) && (s.length === 4 || s.length === 6)) {
        for (let i = 1; i < s.length-1; i++){
            if(s[i] === 'e' || s[i] === 'E'){
                return false
            }
        }
        return true
    } else {
        return false;
    }
}