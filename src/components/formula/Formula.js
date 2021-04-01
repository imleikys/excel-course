import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';
  
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    return `
      <div class="excel__formula-info">
          f(x)
      </div>
      <div class="excel__formula-input" contenteditable spellcheck="false">

      </div>
    `;
  }

  onInput(event) {
    const text = event.target.textContent.trim();
    this.emmiter.emit('its working', text);
  }
}
