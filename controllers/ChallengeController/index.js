var data = {};

const createMap = require('./createMap');
const cloudGrowth = require('./cloudGrowth');

module.exports = {

    createArea(request, response){
        data = request.body;

        return response.json();
    },

    sendResult(request, response){

        const map = createMap(data);
        const { results, dayOfFirstCoveredAirport, daysToTotalCovered } = cloudGrowth(map, data);

        return response.json({
            initialState: map,
            otherDays: results,
            dayOfFirstCoveredAirport,
            daysToTotalCovered,
        });
    }
};
