// feetToMile
function feetToMile(feet) {
    let mile = feet * 0.000189393939;
    return mile
}

let convertFeetToMile = feetToMile(1);
console.log(convertFeetToMile);


// woodCalculator
function woodCalculator(chair, table, bed) {
    let woodForChair = chair * 1;
    let woodForTable = table * 3;
    let woodForBed = bed * 5;
    let totalRequiredWood = woodForChair + woodForTable + woodForBed;
    return totalRequiredWood;
}

let woodRequirement = woodCalculator(1,2,1);
console.log(woodRequirement);


// brickCalculator

// tinyFriend