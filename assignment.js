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
function brickCalculator(numberOfFloor) {
    if (numberOfFloor<11) {
        var height = 15 * numberOfFloor
    }
    else if (numberOfFloor<21) {
        var height = 150 + (numberOfFloor - 10) * 12
    }
    else {
        var height = 270 + (numberOfFloor - 20) * 10
    }
    var brickCount = height * 1000
    return brickCount;
}

var requiredBrick = brickCalculator(21);
console.log(requiredBrick);

// tinyFriend
function tinyFriend(friendsName) {
    var shortLength = friendsName[0].length;
    for (var i = 0; i < friendsName.length; i++) {
        var nameLength = friendsName[i].length;
        if (nameLength < shortLength) {
            shortLength = nameLength;
        }
    }
    return shortLength;
}

let friendNameList = tinyFriend(["kja", "ll", "jllkm", "hhhha"]);
console.log(friendNameList);
