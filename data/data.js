// d3 - global, added in html by scropt tag from cdn
import {DATA as _D} from './fakeData.js';

var stack = d3.layout.stack()
    .offset("silhouette")
    .values(function(layer) { return layer.points });

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


    DATA.layers = stack (
    DATA.events.reduce( (layers, entry, index) => {
      return layers.map( (layer) => {
        if (layer.eventId===entry.eventId) layer.points.push( { x: entry.date, y: (entry.times + 1)} )
            else layer.points.push( { x: entry.date, y: index ? layer.points[index-1].y : 0 } )
        
         return layer;
       } )
    },
    DATA.types.map( (type) => {return {eventId: type.eventId, points: []} }  )
  ));

    return DATA
}

let DATA = getData(_D);

export {DATA};