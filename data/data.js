import {DATA as _D} from './fakeData.js';

function getData (_D) {
    let DATA = {"events": _D.sort( (a,b) => { return a.date - b.date } )}
    DATA.types = DATA.events.reduce(
        (res, item, j, array) => {
            var index = res.reduce((e,d,i)=>{return item.eventId===d.eventId ? e||(''+i) : e},false);
            index === false ? res.push({"eventId":item.eventId, "entries": [item]}) : res[index].entries.push(item);
            return res;
        }, [])
        .sort( (a,b) => { return b.entries.length - a.entries.length } )
        .map( (element) => { element.entries = element.entries.sort( (a,b) => {return a.date - b.date} ); return element } )

    DATA.events = DATA.events.map( (curr) => {
      var typeIndex = DATA.types.map( (item) => item.eventId ).indexOf(curr.eventId);

      curr.times = DATA.types[typeIndex].entries.indexOf(curr)

      curr.typeIndex = typeIndex;
      return curr;
    } );

    return DATA
}

let DATA = getData(_D);

export {DATA};