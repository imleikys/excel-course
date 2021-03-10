import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="excel__formula-info">
          f(x)
      </div>
      <div class="excel__formula-input" contenteditable spellcheck="false">

      </div>
    `;
  }
}
