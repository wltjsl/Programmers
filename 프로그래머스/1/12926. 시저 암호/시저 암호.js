function solution(s, n) {
    let answer = ''
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < s.length; i++){
        let now = s[i]
        let isLower = now === now.toLowerCase() ? true : false;
        now = now.toLowerCase()
        let index = alphabet.indexOf(now)
        index = index !== -1 ? (alphabet[index + n] ? index+n : index+n-alphabet.length) : -1
        if (index !== -1){
            isLower ? answer += alphabet[index] : answer += alphabet[index].toUpperCase()
        }
        else {answer += ' '}
    }
    
    return answer;
}