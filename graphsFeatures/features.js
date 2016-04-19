// collect feature through import, and export it in default object
import stream from './stream.js';
import graph from './graph.js';

class Features {
    constructor(obj) {
        this.list = obj;
    }

    init(container, scales, data, canvasMap) {
        for (var feature in this.list) this.list[feature].init(container, scales, data, canvasMap)
    }
    show(type){
        for (var feature in this.list) this.list[feature].show(type)
    }
}

export default new Features({stream, graph})