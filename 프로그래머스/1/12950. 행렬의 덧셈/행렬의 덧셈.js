function solution(arr1, arr2) {
    let answer = []
    for (let i = 0; i < arr1.length; i++){
        let innerArr1 = arr1[i]
        let innerArr2 = arr2[i]
        if (innerArr1.length > 1){
            let temp = []
            for (let j = 0; j < innerArr1.length; j++){
                temp.push((innerArr1[j]-0)+(innerArr2[j]-0))
            }
            answer.push(temp)
        }
        else {
            let temp = [(innerArr1-0)+(innerArr2-0)]
            answer.push(temp)
        }
    }
    return answer
}