
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import {ACTIONS} from './app/actions.js';

const store = createStore(reducer);

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