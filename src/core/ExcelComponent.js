import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emmiter = options.emmiter;
    this.unsubscibers = [];

    this.prepare();
  }

  prepare() {
    
  }

  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.emmiter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emmiter.subscribe(event, fn);
    this.unsubscibers.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscibers.forEach((unsub) => unsub);
  }
}
