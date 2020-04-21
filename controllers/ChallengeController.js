var data = {};

function createMap (data) {
    let arr = new Array(data.height);

    for(let index=0;index<data.height;index++){
        arr[index]= new Array(data.width).fill('.');
    }

    for(let index=0; index<data.airport; index++){
        let randomHeight = Math.trunc(Math.random() * data.height);
        let randomWidth = Math.trunc(Math.random() * data.width);

        if(arr[randomHeight][randomWidth] !== 'A')
            arr[randomHeight][randomWidth] = 'A';
        else {
            index--;
        }
    }

    for(let index=0; index<data.cloud; index++){
        let randomHeight = Math.trunc(Math.random() * data.height);
        let randomWidth = Math.trunc(Math.random() * data.width);

        if(arr[randomHeight][randomWidth] !== 'A' && arr[randomHeight][randomWidth] !== '*')
            arr[randomHeight][randomWidth] = '*';
        else {
            index--;
        }
    }

    return arr;
}

module.exports = {

    createArea(request, response){
        data = request.body;

        return response.json();
    },

    sendResult(request, response){

        var map = createMap(data)

        return response.json({
            ...map,
        });
    }
}
