function solution(numbers) {
    let sum = []
    for (let i = 0; i < numbers.length; i++){
        let now = numbers[i]
        for(let j = i+1; j < numbers.length; j++){
            sum.push(now+numbers[j])
        }
    }
    const set = new Set(sum)
    sum = Array.from(set)
    sum.sort((a, b) => a - b)
    return sum
}