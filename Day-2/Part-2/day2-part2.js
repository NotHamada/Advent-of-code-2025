const {read_file} = require("../../helpers")

let intervals = [];
let total = 0;

function get_values() {
    let text = read_file("input.txt", "Day-2/Part-2");
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

function isRepeatingPattern(numStr) {
    let length = numStr.length;
    
    for (let segmentLen = 1; segmentLen <= length / 2; segmentLen++) {
        if (length % segmentLen !== 0) continue;
        
        let segment = numStr.substring(0, segmentLen);
        let repetitions = length / segmentLen;
        
        if (repetitions < 2) continue;
        
        let constructed = segment.repeat(repetitions);
        if (constructed === numStr) {
            return true;
        }
    }
    
    return false;
}

function answer(){
    intervals.forEach((interval) => {
        for (let i = interval.start; i <= interval.end; i++)
        {
            let number = i.toString();
            
            if (isRepeatingPattern(number)) {
                total += i;
            }
        }
    });
}

get_values();
answer();

console.log(`Total: ${total}`)