
const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px';
}

function withWidthFrom(state) {
  return function(col, index) {
    return { 
      col, index, width: getWidth(state.colState, index),
    };
  };
}

function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + 'px';
}

function createCell(state, row) {
  return function(_, col) { 
    const id = `${row}:${col}`;
    const data = state.dataState[id];
    const width = getWidth(state.colState, col);
    return `
     <div class="cell" contenteditable spellcheck="false" data-col="${col}" data-id="${id}" data-type="cell" style="width: ${width}">${data || ''}</div>
    `;
  };
}

function createColumn({col, index, width}) {
  return `
  <div class="excel__table-row-column" data-type="resizable" data-col="${index}" style="width: ${width}">
    ${col}
    <div class="col-resize" data-resize="column"></div>  
  </div>
  `;
}

function createRow(index, content, state) {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  const height = getHeight(state, index);

  return `
  <div class="excel__table-row" data-type="resizable" data-row="${index}" style="height: ${height}">
    <div class="excel__table-row-info">
      ${index ? index : ''}
      ${resizer}
    </div>
    <div class="excel__table-row-data">${content}</div>
  </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 40, state = {}) {
  console.log(state);
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(withWidthFrom(state))
    .map(createColumn)
    .join('');

  rows.push(createRow(null, cols, { }));
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      // .map((_, col) => createCell(i, col))
      .map(createCell(state, row))
      .join('');

    rows.push(createRow(row + 1, cells, state.rowState));
  }
  
  return rows.join('');
}
