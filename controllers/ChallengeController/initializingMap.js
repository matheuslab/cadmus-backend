module.exports = {

    insertingAirports(data, arr){
        // initializing airports position
        for(let index=0; index<data.airport; index++){
            let randomHeight = Math.trunc(Math.random() * data.height);
            let randomWidth = Math.trunc(Math.random() * data.width);

            //check is airport already exists on current coordinates
            if(arr[randomWidth][randomHeight] !== 'A')
                arr[randomWidth][randomHeight] = 'A';
            else {
                index--;
            }
        }
    },

    insertingClouds(data, arr){
        //initializing cloud positions
        for(let index=0; index<data.cloud; index++){
            let randomHeight = Math.trunc(Math.random() * data.height);
            let randomWidth = Math.trunc(Math.random() * data.width);

            //check if an airport or another cloud already exist on current coordinates
            if(arr[randomWidth][randomHeight] !== 'A' && arr[randomWidth][randomHeight] !== '*')
                arr[randomWidth][randomHeight] = '*';
            else {
                index--;
            }
        }
    },

    creatingNew2DArray(data, arr){
        for(let index=0;index<data.width;index++){
            arr[index]= new Array(data.height).fill('.');
        }
    }

};
