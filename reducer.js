var initialState = {
                            graphType: 'BAR_CHART',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByQuantity( entry.times )},
                                    y: (entry) => {return SCALES.barHegiht*entry.typeIndex}
                                  }
                                },
                            styles: (SCALES) => {
                                  return {
                                    radius: 0,
                                    width: SCALES.xByQuantity(1)-SCALES.xByQuantity.range()[0] + 1,
                                    height: SCALES.barHegiht,
                                    strokeWidth: 0,
                                    stroke: 'none'
                                  }
                              }
};


function reducer(state=initialState, action) {
  console.log('reducer', action)
  switch(action.type) {
    case 'BAR_CHART': return {...state,
                            graphType: 'BAR_CHART',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByQuantity( entry.times )},
                                    y: (entry) => {return SCALES.barHegiht*entry.typeIndex}
                                  }
                              },
                            styles: (SCALES) => {
                                  return {
                                    radius: 0,
                                    width: SCALES.xByQuantity(1)-SCALES.xByQuantity.range()[0] + 1,
                                    height: SCALES.barHegiht,
                                    strokeWidth: 0,
                                    stroke: 'none'
                                  }
                              }
                            };

    case 'GRAPH': return {...state,
                            graphType: 'GRAPH',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByDate(entry.date) - SCALES.brickRadius/2}, 
                                    y: (entry) => {return SCALES.yByGrade(entry.rank) - SCALES.brickRadius/2}
                                  }
                              },
                            styles: (SCALES) => {
                                  return {
                                    radius: SCALES.brickRadius/2,
                                    width: SCALES.brickRadius,
                                    height: SCALES.brickRadius,
                                    strokeWidth: 0,
                                    stroke: 'none'
                                  }
                              },
                            };

    case 'STREAM_GRAPH': return {...state,
                            graphType: 'STREAM_GRAPH',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByDate(entry.date)}, 
                                    y: SCALES.yStream
                                  }
                                },
                            styles: (SCALES) => {
                                  return {
                                    radius: 7,
                                    width: 20,
                                    height: 20,
                                    strokeWidth: 1,
                                    stroke: '#000'
                                  }
                              },
                            };

    default: return state;
  }
}

export {reducer};