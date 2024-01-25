function solution(sizes) {
let maxWidth = 0
let maxHeight = 0
let i = 0
let answer = 0

for (i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
        if (sizes[i][0] > maxWidth) {
            maxWidth = sizes[i][0]
        }
        if (sizes[i][1] > maxHeight) {
            maxHeight = sizes[i][1]
        }
    }
    else {
        if (sizes[i][0] > maxHeight) {
            maxHeight = sizes[i][0]
        }
        if (sizes[i][1] > maxWidth) {
            maxWidth = sizes[i][1]
        }
    }
}

answer = maxWidth * maxHeight
    return answer
}