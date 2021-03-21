import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(60);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $target = $(event.target);
      const $parent = $target.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      const type = $target.data.resize;

      document.onmousemove = (e) => {
        if (type === 'column') {
          const delta = Math.floor(e.pageX - coords.right);
          const value = coords.width + delta;
  
          $parent.$el.style.width = value + 'px';
          cells.forEach((el) => el.style.width = value + 'px');
        } else if (type === 'row') {
          const delta = Math.floor(e.pageY - coords.bottom);
          const value = coords.height + delta;

          $parent.$el.style.height = value + 'px';
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
