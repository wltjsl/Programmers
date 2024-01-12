function solution(a, b, n) {
    let coke = 0;
    coke = Math.floor(n/a)*b
    let empty = n%a+coke
    do {
        let newCoke = Math.floor((empty)/a)*b
        coke += newCoke
        empty = empty%a + newCoke
    } while(empty >= a)
    return coke;
}