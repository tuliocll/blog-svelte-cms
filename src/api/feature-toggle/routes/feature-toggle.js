'use strict';

/**
 * feature-toggle router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::feature-toggle.feature-toggle');
