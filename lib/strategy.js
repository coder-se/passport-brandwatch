/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util');


/**
 * `ClientPasswordStrategy` constructor.
 *
 * @api protected
 */
function Strategy(options, verify) {
  
  options = options || {};
  options.tokenURL = options.tokenURL || 'https://newapi.brandwatch.com/oauth/token';
  options.grant_type = options.grant_type || 'api-password';
  options.client_id = options.client_id || 'brandwatch-api-client';

  if(!options.username) throw new Error('Brandwatch strategy requires username');
  if(!options.password) throw new Error('Brandwatch strategy requires password');

  passport.Strategy.call(this);
  this.name = 'brandwatch';
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on client credentials in the request body.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req) {
  console.log('authenticate');
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;