  // An example config file

  exports.config = {
    // The address of a running Selenium server.
    seleniumAddress: 'http://localhost:3333',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
      'browserName':'chrome'
  },

  // Spec patterns relative to current working directory when Protractor is called
  specs: ['protractor_specs/**/*.js'],

  baseUrl: 'http://localhost:3000',

 // Options to be passed to Jasmin-node.
  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInteval: 30000
  },

  };