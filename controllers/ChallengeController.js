var data = {};

function createMap (data) {
    let arr = new Array(data.width);

    for(let index=0;index<data.width;index++){
        arr[index]= new Array(data.height).fill('.');
    }

    for(let index=0; index<data.airport; index++){
        let randomHeight = Math.trunc(Math.random() * data.height);
        let randomWidth = Math.trunc(Math.random() * data.width);

        if(arr[randomWidth][randomHeight] !== 'A')
            arr[randomWidth][randomHeight] = 'A';
        else {
            index--;
        }
    }

    for(let index=0; index<data.cloud; index++){
        let randomHeight = Math.trunc(Math.random() * data.height);
        let randomWidth = Math.trunc(Math.random() * data.width);

        if(arr[randomWidth][randomHeight] !== 'A' && arr[randomWidth][randomHeight] !== '*')
            arr[randomWidth][randomHeight] = '*';
        else {
            index--;
        }
    }

    return arr;
}

function cloudGrowth (map, data) {
    let tempArr= JSON.parse(JSON.stringify( map ));
    let test = JSON.parse(JSON.stringify( map ));
    let response = [];
    let hasfirstAirportAffected = false;
    let dayOfFirstInfection = 0;
    let countAirportsInfected = 0;
    let daysToTotalInfection = 0;

    for(let days = 2;data.airport-countAirportsInfected>0;days++){
        for(let i=0;i<data.width;i++){
            for(let j=0;j<data.height;j++){
                if(test[i][j] === '*'){
                    let up = i+1 < data.width ? tempArr[i+1][j]: false;
                    let down = i-1 >= 0 ? tempArr[i-1][j] : false;
                    let left = j-1 >= 0 ? tempArr[i][j-1] : false;
                    let right = j+1 < data.height ? tempArr[i][j+1]: false;

                    if(up){
                        if(up === 'A'){
                            if(!hasfirstAirportAffected){
                                hasfirstAirportAffected = true;
                                dayOfFirstInfection = days;
                            }
                            countAirportsInfected+=1;
                        }
                        tempArr[i+1][j] = '*';
                    }

                    if(down){
                        if(down === 'A'){
                            if(!hasfirstAirportAffected){
                                hasfirstAirportAffected = true;
                                dayOfFirstInfection = days;
                            }
                            countAirportsInfected+=1;
                        }
                        tempArr[i-1][j] = '*';
                    }

                    if(left){
                        if(left === 'A'){
                            if(!hasfirstAirportAffected){
                                hasfirstAirportAffected = true;
                                dayOfFirstInfection = days;
                            }
                            countAirportsInfected+=1;
                        }
                        tempArr[i][j-1] = '*';
                    }

                    if(right){
                        if(right === 'A'){
                            if(!hasfirstAirportAffected){
                                hasfirstAirportAffected = true;
                                dayOfFirstInfection = days;
                            }
                            countAirportsInfected+=1;
                        }
                        tempArr[i][j+1] = '*';
                    }
                }
            }
        }
        test = JSON.parse(JSON.stringify( tempArr ));
        if(data.airport-countAirportsInfected <= 0){
            daysToTotalInfection = days;

        }
        response.push(test);
    }

    return {
        dayOfFirstInfection,
        daysToTotalInfection,
        ...response
    };
}

module.exports = {

    createArea(request, response){
        data = request.body;

        return response.json();
    },

    sendResult(request, response){

        var map = createMap(data);

        return response.json({
            initialState: map,
            otherDays: cloudGrowth(map, data),
        });
    }
}
