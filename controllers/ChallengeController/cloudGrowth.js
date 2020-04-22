// TO DO:
// Improve time complexity of this algorithm, removing nested loops.
// Modularize the code, splitting here in more functions or files.

function cloudGrowth (map, data) {
    let auxiliarArray = JSON.parse(JSON.stringify( map ));
    let temporaryArray = JSON.parse(JSON.stringify( map ));
    let response = [];
    let airportsCoveredCounter = 0;
    let dayOfFirstCoveredAirport = 0;
    let firstAirportAffected = false;
    let daysToTotalCovered = 0;

    for(let days = 2;data.airport-airportsCoveredCounter>0;days++){
        for(let i=0;i<data.width;i++){
            for(let j=0;j<data.height;j++){
                if(temporaryArray[i][j] === '*'){
                    let upAdjacentElement = i+1 < data.width ? auxiliarArray[i+1][j]: null;
                    let downAdjacentElement = i-1 >= 0 ? auxiliarArray[i-1][j] : null;
                    let leftAdjacentElement = j-1 >= 0 ? auxiliarArray[i][j-1] : null;
                    let rightAdjacentElement = j+1 < data.height ? auxiliarArray[i][j+1]: null;

                    if(upAdjacentElement){
                        if(upAdjacentElement === 'A'){
                            if(!firstAirportAffected){
                                firstAirportAffected = true;
                                dayOfFirstCoveredAirport = days;
                            }
                            airportsCoveredCounter++;
                        }
                        auxiliarArray[i+1][j] = '*';
                    }

                    if(downAdjacentElement){
                        if(downAdjacentElement === 'A'){
                            if(!firstAirportAffected){
                                firstAirportAffected = true;
                                dayOfFirstCoveredAirport = days;
                            }
                            airportsCoveredCounter++;
                        }
                        auxiliarArray[i-1][j] = '*';
                    }

                    if(leftAdjacentElement){
                        if(leftAdjacentElement === 'A'){
                            if(!firstAirportAffected){
                                firstAirportAffected = true;
                                dayOfFirstCoveredAirport = days;
                            }
                            airportsCoveredCounter++;
                        }
                        auxiliarArray[i][j-1] = '*';
                    }

                    if(rightAdjacentElement){
                        if(rightAdjacentElement === 'A'){
                            if(!firstAirportAffected){
                                firstAirportAffected = true;
                                dayOfFirstCoveredAirport = days;
                            }
                            airportsCoveredCounter++;
                        }
                        auxiliarArray[i][j+1] = '*';
                    }
                }
            }
        }
        temporaryArray = JSON.parse(JSON.stringify( auxiliarArray ));
        if(data.airport-airportsCoveredCounter <= 0){
            daysToTotalCovered = days;

        }
        response.push(temporaryArray);
    }

    return {
        dayOfFirstCoveredAirport,
        daysToTotalCovered,
        results: response,
    };
}

module.exports = cloudGrowth;
