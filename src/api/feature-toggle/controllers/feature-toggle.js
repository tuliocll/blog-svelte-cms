'use strict';

/**
 *  feature-toggle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feature-toggle.feature-toggle');
