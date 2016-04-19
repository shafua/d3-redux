var initialState = {
                            graphType: 'BAR_CHART',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByQuantity( entry.times )},
                                    y: (entry) => {return 50*entry.typeIndex}
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
                                    y: (entry) => {return 50*entry.typeIndex}
                                  }
                            }
                            };

    case 'GRAPH': return {...state,
                            graphType: 'GRAPH',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByDate(entry.date) - 5}, 
                                    y: (entry) => {return SCALES.yByGrade(entry.rank) - 5}
                                  }
                              }
                            };

    case 'STREAM_GRAPH': return {...state,
                            graphType: 'STREAM_GRAPH',
                            position: (SCALES) => {
                                  return {
                                    x: (entry) => {return SCALES.xByDate(entry.date) - 5}, 
                                    y: (entry) => {return SCALES.yByGrade(entry.rank) - 5}
                                  }
                              }
                            };

    default: return state;
  }
}

export {reducer};