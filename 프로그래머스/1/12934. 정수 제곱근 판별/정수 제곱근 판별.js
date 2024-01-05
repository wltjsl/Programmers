function solution(n) {
    if (n===1){
        return 4;
    }
    else {
        for (let i=2; i<=n; i++){
            if (i**2 === n){
                return (i+1)**2
                break
            }
            else {continue}
        }
        return -1
    }
}