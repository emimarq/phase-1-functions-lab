// Code your solution in this file!
function distanceFromHqInBlocks(customerPickup) {
  if(customerPickup <= 42) {
    return 42 - customerPickup;
  } else {
    return customerPickup - 42;
  }
}
console.log(distanceFromHqInBlocks(43));

// Headquarters: 42nd st
// Each block is 264ft

function distanceFromHqInFeet(customerPickup) {
  return distanceFromHqInBlocks(customerPickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if(distance < 400) {
    return 0
  } else if(distance > 400 && distance < 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}