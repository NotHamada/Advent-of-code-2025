const {read_file} = require("../../helpers")

let lines = [];
let total = 0n;

function get_values() {
    let text = read_file("input.txt", "Day-3/Part-2");
    lines = text.split("\r");
}

function getMaxSubsequence(line, k) {
    let stack = [];
    let n = line.length;
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < line[i] && (stack.length + (n - i - 1)) >= k) {
            stack.pop();
        }
        if (stack.length < k) {
            stack.push(line[i]);
        }
    }
    
    return stack.join('');
}

function answer(){
    lines.forEach((line) =>{
        if (!line) return;
        
        // Skip lines shorter than 12 digits
        if (line.length < 12) return;
        
        let maxJoltageStr = getMaxSubsequence(line, 12);
        let maxJoltage = BigInt(maxJoltageStr);
        
        total += maxJoltage;
    });
}

get_values();
answer();
console.log(`Max voltage: ${total}`);