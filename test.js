/* let item = "Cup";
let count = 1;

(count > 1) ? console.log(`I have ${count} ${item}s`) : console.log(`I have ${count} ${item}`)
 */

function Pattern (gridLine,gridTotal){
    let accumulator = ""
    for (let i = 1; i <= gridTotal; i++){
        if (i % (gridLine + 1) === 0){
            accumulator += "\n"
        }
        else if (i % 2 !== 0){
            accumulator += "&"
        }
        else if (i % 2 === 0){
            accumulator += " "
        } 
    }
    console.log(accumulator)
}
Pattern(10,100)