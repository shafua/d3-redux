var line = (xScale, yScale) => {
    return d3.svg.line()
            .x(function(d) { return xScale(d.date); })
            .y(function(d) { return yScale(d.rank); })
};
var feature, isActive;
var time = 500;
var isInitialized = false;

export default {
    init: (container, scales, data) => {
        isInitialized = true;
        feature = container.append('g').attr("class", "graph_feature")
                  .style("opacity", 0)

        feature.selectAll("path.chart")
                  .data(data.types)
                  .enter()
                  .append('path')
                  .attr("class", "chart")
                  .style({
                            stroke: (d) => {return scales.color(d.eventId)},
                            "stroke-width": "2px",
                            fill: 'none'
                        })
                  .attr("d", (d) => { return line(scales.xByDate,scales.yByGrade)(d.entries)}  );
    },

    show: (type) => {
        if (type==='GRAPH') {
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