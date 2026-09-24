const {read_file} = require("../../helpers")

let lines = [];
let total = 0;

function get_values() {
    let text = read_file("input.txt", "Day-4/Part-2");
    lines = text.split("\r");
}

function countNeighbors(row, col) {
    let count = 0;
    
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue; // Skip the cell itself
            
            let newRow = row + dr;
            let newCol = col + dc;
            
            // Check bounds
            if (newRow >= 0 && newRow < lines.length && 
                newCol >= 0 && newCol < lines[newRow].length) {
                if (lines[newRow][newCol] === '@') {
                    count++;
                }
            }
        }
    }
    
    return count;
}

function answer(){
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (!line) continue;
        
        for (let j = 0; j < line.length; j++) {
            let char = line[j];
            
            if (char === '@') {
                let neighbors = countNeighbors(i, j);
                if (neighbors < 4) {
                    total++;
                    lines[i] = line.substring(0, j) + 'x' + line.substring(j + 1);
                }
            }
        }
    }

    if (lines.some(line => line.includes('x'))) {
        lines = lines.map(line => line.replaceAll('x', '.'));
        answer();
    }
}

get_values();
answer();
console.log(`Rolls: ${total}`);