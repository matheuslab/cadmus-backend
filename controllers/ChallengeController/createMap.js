const { creatingNew2DArray, insertingAirports, insertingClouds } = require('./initializingMap');

function createMap (data) {
    let arr = new Array(data.width);

    creatingNew2DArray(data, arr);

    insertingAirports(data, arr);

    insertingClouds(data, arr);

    return arr;
}

module.exports = createMap;
