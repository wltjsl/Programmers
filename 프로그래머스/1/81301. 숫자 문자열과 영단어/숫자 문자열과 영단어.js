function solution(s) {
    const toEng = ["zero", "one", "two", "three", 'four', 'five', 'six', 'seven', 'eight', 'nine']
    toEng.forEach((number, index) => s = s.replaceAll(number, index))
    return s-0;
}