var initialState = {
  graphType: 'BAR_CHART'
};


function reducer(state=initialState, action) {
  console.log('reducer', action)
  switch(action.type) {
    case 'BAR_CHART': return {...state,
                            graphType: 'BAR_CHART'
                            };

    case 'GRAPH': return {...state,
                            graphType: 'GRAPH'
                            };

    case 'STREAM_GRAPH': return {...state,
                            graphType: 'STREAM_GRAPH'
                            };

    default: return state;
  }
}

export {reducer};