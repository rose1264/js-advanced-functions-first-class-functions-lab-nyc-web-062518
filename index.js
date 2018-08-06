const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiply) {
  return function(value) {
    return fareMultiply * value
  }
}

const fareDoubler = function(fare) {
  return fare * 2
}

const fareTripler = function(fare) {
  return fare * 3
}

const selectDifferentDrivers = function(arrayOfDrivers, cb) {
return cb(arrayOfDrivers)
}
