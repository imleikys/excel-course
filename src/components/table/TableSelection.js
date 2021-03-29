export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    $el.addClass(TableSelection.className);
    this.group.push($el);
    this.current = $el;
  }

  clear() {
    this.group.forEach(($c) => $c.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {

  }
}
