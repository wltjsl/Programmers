function solution(strings, n) {
    strings = strings.map(string => string = string[n]+string)
    strings.sort()
    strings = strings.map(string => string.slice(1))
    return strings
}