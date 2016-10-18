import React from 'react';

const dom = React.DOM;
// const div = dom.div.bind(dom);
// const h3 = dom.h3.bind(dom);
// const h1 = dom.h1.bind(dom);
const table = dom.table.bind(dom);
const tbody = dom.tbody.bind(dom);
const thead = dom.thead.bind(dom);
const tfoot = dom.tfoot.bind(dom);
const td = dom.td.bind(dom);
const tr = dom.tr.bind(dom);
const th = dom.th.bind(dom);

module.exports.grid = function grid(cols, rows) {
  if (!rows) { return ''; }
  return table({ className: 'table' },
               thead({}, tr({}, cols.map((c) => th({ key: c.attr }, c.title || c.attr)))),
               tbody({}, rows.map((row) => (
                 tr({ key: row.id }, cols.map((c) => td({ key: c.attr, className: c.className }, (c.fn ? c.fn(row) : row[c.attr]), (c.postfix || ''))))
               ))),
               tfoot({}, tr({}, cols.map((c) => th({ key: c.attr }, c.footer ? c.footer(rows) : ''))))
              );
};
