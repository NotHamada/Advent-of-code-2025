const {read_file} = require("../../helpers")

let intervals = [];
let total = 0;

function get_values() {
    let text = read_file("input.txt", "Day-2/Part-1");
    let lines = text.split(",");
    
    lines.forEach((line) => {
        let interval = line.split("-");
        let start = interval[0];
        let end = interval[1];

        intervals.push({
            start: parseInt(start),
            end: parseInt(end)
        })
    });

    console.log(intervals);
}

function isPalindrome(num) {
    let str = num.toString();
    if (str.length % 2 !== 0) return false;
    
    let mid = str.length / 2;
    let firstHalf = str.substring(0, mid);
    let secondHalf = str.substring(mid);
    
    return firstHalf === secondHalf;
}

function generatePalindromes(start, end) {
    let palindromes = [];
    let minLen = start.toString().length;
    let maxLen = end.toString().length;
    
    for (let len = minLen; len <= maxLen; len++) {
        if (len % 2 !== 0) continue;
        
        let halfLen = len / 2;
        let halfStart = Math.pow(10, halfLen - 1);
        let halfEnd = Math.pow(10, halfLen) - 1;
        
        for (let half = halfStart; half <= halfEnd; half++) {
            let halfStr = half.toString();
            let palindrome = parseInt(halfStr + halfStr);
            
            if (palindrome >= start && palindrome <= end) {
                palindromes.push(palindrome);
            }
        }
    }
    
    return palindromes;
}

function answer(){
    intervals.forEach((interval) => {
        let palindromes = generatePalindromes(interval.start, interval.end);
        palindromes.forEach(p => total += p);
    });
}

get_values();
answer();

console.log(`Total: ${total}`)