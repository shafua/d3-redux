// d3 - global, added in html by scropt tag from cdn
function getScales (canvasMap, DATA) {
    var SCALES = {};

    SCALES.barHegiht = canvasMap.height / DATA.types.length;
    SCALES.rillHegiht = canvasMap.height / DATA.events.length;
    SCALES.brickRadius = 700 / DATA.events.length;

    SCALES.xByDate = d3.time.scale()
            .domain(d3.extent(DATA.events, (d) => {return d.date}))
            .range([canvasMap.padding.left, canvasMap.width - canvasMap.padding.right]);

    SCALES.xByQuantity = d3.scale.linear()
            .domain((() => {
                          var max = d3.max(DATA.types, (d) => {return d.entries.length});
                          return [0 , ( max<30 ? 30 : extented[1] )-1]
                        })() )
            .range([canvasMap.padding.left, canvasMap.width - canvasMap.padding.right]);


    SCALES.yByGrade = d3.scale.linear()
            .domain([0,5])
            .range([canvasMap.height - canvasMap.padding.bottom, canvasMap.padding.top]);

    SCALES.color = d3.scale.category20c();

    SCALES.yStream = (entry, index) => {
        var point = DATA.layers[entry.typeIndex].points[index];
        return (point.y0 + point.y/2 - 1) * SCALES.rillHegiht;
    }



    return SCALES;
}
export {getScales};