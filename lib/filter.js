'use strict';

const reg = /(\s*)(```) *(mermaid) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

module.exports = function (data) {
  if (data.source.endsWith('.md')) {
    data.content = data.content.replace(reg, function (match, start, startQuote, lang, content, endQuote, end) {
      return `${start}<pre class="mermaid">${content}</pre>${end}`;
    });
  }
}
