'use strict';

/**
 * feature-toggle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feature-toggle.feature-toggle');
