const ACTIONS = {};
ACTIONS.showGraph = () => {
  return {
    type: 'GRAPH'
  };
};

ACTIONS.showStreamGraph = () => {
  return {
    type: 'STREAM_GRAPH'
  };
};

ACTIONS.showBarChart = () => {
  return {
    type: 'BAR_CHART'
  };
};

export {ACTIONS};