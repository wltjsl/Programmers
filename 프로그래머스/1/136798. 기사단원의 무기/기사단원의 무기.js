function solution(number, limit, power) {
    let totalSteel = 1;
    for (let i = 2; i <= number; i++){
        let atk = 2;
        for (let j = 2; j < i; j++){
            if (i%j === 0){
                if (i/j >= j){
                    atk = i/j === j ? atk+1 : atk+2
                    if (atk > limit){
                    atk = power
                    break
                    }
                }
                else { break}
            }
        }
        totalSteel += atk
    }
    return totalSteel
}