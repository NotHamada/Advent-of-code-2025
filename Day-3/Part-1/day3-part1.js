const {read_file} = require("../../helpers")

let lines = [];
let total = 0;

function get_values() {
    let text = read_file("input.txt", "Day-3/Part-1");
    lines = text.split("\n");
}

function answer(){
    lines.forEach((line) =>{
        if (!line) return;
        
        let maxJoltage = 0;
        
        for (let i = 0; i < line.length; i++) {
            for (let j = i + 1; j < line.length; j++) {
                let joltage = parseInt(line[i] + line[j]);
                if (joltage > maxJoltage) {
                    maxJoltage = joltage;
                }
            }
        }
        
        total += maxJoltage;
    });
}

get_values();
answer();
console.log(`Max voltage: ${total}`);