// 과제2

const calculator = require('./calculator');

var add_result = calculator.add(4, 2);
var sub_result = calculator.sub(4, 2);
var mul_result = calculator.multiply(4, 2);
var div_result = calculator.divide(4, 2);

console.log("add result: ", add_result);
console.log("sub result: ", sub_result);

function calculate(a,b) {
    console.log(`mul result: ${a} * ${b} = ${calculator.multiply(a,b)}`);
    console.log(`div result: ${a} / ${b} = ${calculator.divide(a,b)}`);
}
calculate(4,2);