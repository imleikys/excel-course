import {capitalize} from '@core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided into DOMListener');
    }

    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    // console.log((this.listeners));
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    // TODO: realize
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
