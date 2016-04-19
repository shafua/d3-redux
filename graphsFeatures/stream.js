var area = (representationHeight, xScale) => {
    return d3.svg.area()
                    .interpolate('basis')
                    .x(function (d, i) {
                    return xScale(d.x);
                })
                    .y0(function (d) {
                    return d.y0 * representationHeight;
                })
                    .y1(function (d) {
                    return (d.y0 + d.y) * representationHeight;
                });
};
var feature, isActive;
var time = 500;
var isInitialized = false;

export default {
    init: (container, scales, data, canvasMap) => {
        isInitialized = true;
        feature = container.append('g').attr("class", "stream_graph_feature")
                .style("opacity", 0).attr("transform","translate("+ 20 +")");

        feature.selectAll(".layer")
                .data(data.layers)
                .enter().append("path")
                .attr("class", "layer")
                .attr("d", function (d) {
                    return area(scales.rillHegiht, scales.xByDate)(d.points);
                })
                    .style("fill", function (d, i) {
                    return scales.color(d.eventId);
                });
    },
    show: (type) => {
        if (type==='STREAM_GRAPH') {
            isActive = true;
            feature.attr("visibility","visible").transition()
                .duration( time*3 )
                .style("opacity", 1);
        } else {
            if (!isActive) return;
            isActive = false;
            feature.transition()
                .duration( time )
                .style("opacity", 0)
                .each("end", () => {
                    feature.attr("visibility", "hidden")
                });
        } 
    }
}