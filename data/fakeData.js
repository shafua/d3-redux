function makefakeData () {
    var array = [];
    var n = 50;
    var numberOfEvents = 10;
    var date = new Date;
    var nameEvent;
    while (n--) array.push({
            "id": n,
            "eventId": (nameEvent = Math.round(Math.random()*(numberOfEvents-1))+1),
            "eventName": "Event #"+nameEvent,
            "date": date - Math.round(Math.random()*31536000000),
            "rank": Math.round(Math.random()*50)/10
        });
    return array
}
let DATA = makefakeData();

export {DATA, makefakeData};