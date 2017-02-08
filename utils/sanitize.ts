/* jshint node:true, unused: vars, camelcase: false */
// from http://kroltech.com/2014/05/30/sanitizing-xss-and-html-with-express-middleware/
'use strict';
var sanitizer = require('sanitize-html'),
  _ = require('underscore');

module.exports = function(config, errors) {
  return function(req, res, next) {
    if (req.body) {
      _.each(req.body, function(value, key) {
        if (!parseInt(value, 10) && value !== null) {
          if (typeof value === 'string') {
            value = value.replace(/&gt;/gi, '>');
            value = value.replace(/&lt;/gi, '<');
            value = value.replace(/(&copy;|&quot;|&amp;)/gi, '');
          }
          req.body[key] = sanitizer(value, {
            allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
              'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
              'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre']
          });
        }
      });
    }
    return next();
  };
};
