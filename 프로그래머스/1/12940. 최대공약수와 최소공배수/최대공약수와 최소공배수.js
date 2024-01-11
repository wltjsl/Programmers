function solution(n, m) {
    let divisor = 1;
    let multiple = n;
    if (n > m){
        n = m;
        m = multiple;
    }
    for (let i = 2; i <= m; i++){
        if(n%i === 0 && m%i === 0){
            divisor = i;
        }
    }
    multiple = n*m/divisor
    return [divisor, multiple];
}