'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'rarwe',
    environment,
    rootURL: '/',
    /*
      locationType is set to auto which then assigns to the router's location property
      Specifies how the current route of the application will be manifested in the URL, options include history, hash, none and auto
      history uses brower's history.pushState (and history.replaceState) to update the URL
      hash relies on hashchange event in browser and uses the # in the URL
      none does not affect URL in any way
      auto uses history location if browser supports it and if not tries hash location, if not then uses none
    */
    locationType: 'auto', 
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    'ember-simple-auth' : {
      routeIfAlreadyAuthenticated: 'bands'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
