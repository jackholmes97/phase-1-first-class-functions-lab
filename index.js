// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }
}

const fareDoubler = function(func) {
    const returnValue = func;
    return returnValue * 2;
}

const fareTripler = function(func) {
    const returnValue = func;
    return returnValue * 3;
}

function selectDifferentDrivers(drivers, func) {
    let newDriver = [];
    if (func === returnFirstTwoDrivers) {
        newDriver = returnFirstTwoDrivers(drivers);
    } else if (func === returnLastTwoDrivers) {
        newDriver = returnLastTwoDrivers(drivers);
    }
    return newDriver;
}