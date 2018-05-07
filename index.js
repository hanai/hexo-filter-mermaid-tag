'use strict';

const config = hexo.config.mermaid;

if (config && config.enable) {
  const filter = require('./lib/filter');
  hexo.extend.filter.register('before_post_render', filter, 9); // default priority is 10
}
