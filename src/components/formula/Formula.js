import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';
  
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
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
    console.log(this.$root);
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick(event) {
    console.log(this.$root);
    console.log('Formula: onClick', event.target.textContent.trim());
  }
}
