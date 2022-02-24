// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
     if (pickUp < 42){
        return 42 - pickUp;
     }
    return pickUp - 42;
}

function distanceFromHqInFeet(inFeet){
    return distanceFromHqInBlocks(inFeet)*264;
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start)*264;
    }else{
        return (start - destination)*264;
    }
}

function calculatesFarePrice(start, destination){
    let disTravel = distanceTravelledInFeet(start, destination);
    if (disTravel < 400) {
        return 0;
    } else if (disTravel > 400 && disTravel < 2000) {
        return (disTravel - 400) * 0.02;
    } else if (disTravel > 2000 && disTravel < 2500){
        return 25;
    } else {
        return "cannot travel that far";
    }
}

//code from Thea to compare to mine:
// function calculatesFarePrice(block1, block2) {
//     let price = distanceTravelledInFeet(block1, block2);
//     if (price < 400) {
//       return 0;
//     } else if (price > 400 && price < 2000) {
//       return (price - 400) * 0.02;
//     } else if (price > 2000 && price < 2500) {
//       return 25;
//     } else {
//       return "cannot travel that far";
//     }
// }