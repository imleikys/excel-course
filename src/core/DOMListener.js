export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provided into DOMListener');
    }
    this.$root = $root;
  }
}
