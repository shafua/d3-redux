// d3 - global, added in html by scropt tag from cdn
function getScales (canvasMap, DATA) {
    var SCALES = {};

    SCALES.xByDate = d3.time.scale()
            .domain(d3.extent(DATA.events, (d) => {return d.date}))
            .range([canvasMap.padding.horizontal/2, canvasMap.width]);

    SCALES.xByQuantity = d3.scale.linear()
            .domain((() => {
                          var max = d3.max(DATA.types, (d) => {return d.entries.length});
                          return [0 , ( max<30 ? 30 : extented[1] )-1]
                        })() )
            .range([canvasMap.padding.horizontal/2, canvasMap.width]);


    SCALES.yByGrade = d3.scale.linear()
            .domain([0,5])
            .range([canvasMap.height, canvasMap.padding.vertical/2]);

    SCALES.color = d3.scale.category20c();

    SCALES.yStream = (entry, index) => {
        var point = DATA.layers[entry.typeIndex].points[index];
        console.log(entry.id, canvasMap.elements.barHegiht)
        return (point.y0 + point.y/2 - 1) * canvasMap.elements.barHegiht;
    }

    return SCALES;
}
export {getScales};