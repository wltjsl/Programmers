function solution(food) {
    let foodAmount = [];
    for (let i = 1; i < food.length; i++){
        let halfAmount  = food[i]%2 === 0 ? food[i]/2 : (food[i]-1)/2
        let temp = 0;
        while (temp < halfAmount){
                foodAmount.push(i)
                temp++
            }
    }
    return foodAmount.join('') + '0' + foodAmount.reverse().join('')
}