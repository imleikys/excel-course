import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return `
                <div class="excel__table-row">
                    <div class="excel__table-row-info"></div>
                    <div class="excel__table-row-data">
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>

                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>

                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>
                        <div class="excel__table-row-column">
                            A
                        </div>
                        <div class="excel__table-row-column">
                            B
                        </div>
                        <div class="excel__table-row-column">
                            C
                        </div>

                    </div>
                </div>
                <div class="excel__table-row">
                    <div class="excel__table-row-info">1</div>
                    <div class="excel__table-row-data">
                        <div class="cell selected" contenteditable spellcheck="false">A1</div>
                        <div class="cell" contenteditable spellcheck="false">A2</div>
                        <div class="cell" contenteditable spellcheck="false">A3</div>
                    </div>
                </div>
                <div class="excel__table-row">
                    <div class="excel__table-row-info">2</div>
                    <div class="excel__table-row-data">
                        <div class="cell" contenteditable spellcheck="false">A1</div>
                        <div class="cell" contenteditable spellcheck="false">A2</div>
                        <div class="cell" contenteditable spellcheck="false">A3</div>
                    </div>
                </div>
    `;
  }
}
