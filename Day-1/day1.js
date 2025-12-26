const {read_file} = require("../helpers")

let values = [];
let start = 50;
let password = 0;

function get_values() {
    let text = read_file("input.txt", "Day-1");
    let lines = text.split("\n");

    lines.forEach((line) => {
        let direction = line.substring(0, 1);
        let amount = line.substring(1);

        values.push({
            direction: direction,
            amount: parseInt(amount)
        });
    });
}

function answer() {
    values.forEach((value) => {
        let direction = value.direction;
        let amount = value.amount;

        if (direction === "L")
            start -= amount;
        else start += amount;

        console.log(start);

        if (start < 0)
            console.log(true)

        while (start < 0) {
            start += 100;
        }

        while (start > 100) {
            start -= 100;
        }

        if (start === 100 || start === 0) {
            start = 0;
            password += 1;
        }

        console.log(start)
    });
}

get_values();
answer();

console.log(password);