// d3 - global, added in html by scropt tag from cdn

import {createStore} from 'redux';
import {DATA} from './data/data.js';

import {getScales} from './app/scales.js';
import {ACTIONS} from './app/actions.js';
import {getCanvasMap} from './app/canvasMap.js';

import features from './graphsFeatures/features'

import {reducer} from './reducer.js';

const store = createStore(reducer);
const app = document.getElementById('app');

var canvasMap = getCanvasMap(app);
var SCALES = getScales(canvasMap, DATA);

const svg = d3.select(app)
            .append('svg')
            .attr({
                width: canvasMap.width + canvasMap.padding.horizontal,
                height: canvasMap.height + canvasMap.padding.vertical
            });

features.init(svg, SCALES, DATA, canvasMap)
const bricks = svg.selectAll('rect.brick')
                .data(DATA.events).enter()
                .append('rect')
                .classed('brick', true);



class Canvas {
  constructor(options) {
    var self = this;
    this.$panel = options.panel;
    this.store = options.store;
    store.subscribe(this.update.bind(this));

    addClickLisener('#stream', ACTIONS.showStreamGraph);
    addClickLisener('#graph', ACTIONS.showGraph);
    addClickLisener('#bar', ACTIONS.showBarChart);

      function addClickLisener(selector, action) {
          self.$panel.querySelector(selector)
            .addEventListener('click', (e) => {e.preventDefault(); self.store.dispatch(action())});
        
        }
  }



  update() { 
    var state = store.getState();
    console.log('update',state);
    console.log('posiitons',state.position(SCALES).x);

    bricks.transition().duration(1000)
            .attr({
                x: state.position(SCALES).x,
                y: state.position(SCALES).y,
                width: state.styles(SCALES).width,
                height: state.styles(SCALES).height,
                ry: state.styles(SCALES).radius
            })
            .style({
                fill: (d) => { return SCALES.color(d.eventId)},
                "stroke-width": state.styles(SCALES).strokeWidth,
                "stroke": state.styles(SCALES).stroke,
                "stroke-opacity": .25
            })

    features.show(state.graphType)
  }

  render() {
    this.update();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = new Canvas({
    panel: document.getElementById('panel'),
    store
  });
  canvas.render();
});