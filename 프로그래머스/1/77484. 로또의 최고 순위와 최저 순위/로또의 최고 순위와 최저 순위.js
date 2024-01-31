function solution(lottos, win_nums) {
    var answer = [];
    let countWon = 0;
    let unknown = 0;
    let rank = [6,6,5,4,3,2,1]
    for (let i = 0; i < lottos.length; i++){
        let now = lottos[i]
        if (now === 0){
            unknown += 1
            continue
        }
        for (let j = 0; j < lottos.length; j++){
            if (now === win_nums[j]){
                countWon += 1
            }
        }
    }
    let countIf = countWon + unknown
    countWon = rank[countWon]
    countIf = rank[countIf]
    answer.push(countIf,countWon)
    return answer;
}