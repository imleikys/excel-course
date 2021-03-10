import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <input type="text" class="excel__header-input" value="Новая таблица"></input>
      <div class="excel__header-btns">
          <div class="button">
              <i class="material-icons">delete</i>
          </div>
          <div class="button">
              <i class="material-icons">exit_to_app</i>
          </div>
      </div>
    `;
  }
}
