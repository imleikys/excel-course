import {$} from '@core/dom';

export function resizeHandler($root, event) {
  const $target = $(event.target);
  const $parent = $target.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`);
  const type = $target.data.resize;
  const sideProp = type === 'column' ? 'bottom' : 'right'; 

  let value;

  $target.css({
    opacity: 1,
    zIndex: 1000,
    [sideProp]: '-5000px',
  });

  document.onmousemove = (e) => {
    if (type === 'column') {
      const delta = Math.floor(e.pageX - coords.right);
      value = coords.width + delta;

      $target.css({
        right: -delta + 'px',
      });
    } else if (type === 'row') {
      const delta = Math.floor(e.pageY - coords.bottom);
      value = coords.height + delta;

      $target.css({
        bottom: -delta + 'px',
      });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (type === 'column') {
      cells.forEach((el) => el.style.width = value + 'px');
    } else if (type === 'row') {
      $parent.css({
        height: value + 'px',
      });
    }

    $target.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });
  };
}
