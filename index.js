'use strict';

const stringUtil = require('ember-cli-string-utils');

module.exports = {
  locals(options) {
    let entity = options.entity;
    let rawName = entity.name;
    let name = stringUtil.dasherize(rawName);

    return {
      name,
    };
  },
};
