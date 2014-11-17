Package.describe({
  summary: "Stripe payment gateway integration",
  version: "1.0.0"
});

Npm.depends({
  'stripe': '2.8.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use('underscore', 'server');
  api.use('templating', 'client');
  api.addFiles('client/stripe.js', 'client');
  api.addFiles('client/includes.html', 'client');
  api.addFiles('server/resources.js', 'server');
  api.addFiles('server/stripe.js', 'server');
  api.export('Stripe', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('stripe');
  api.addFiles('tests/client.js', 'client');
  api.addFiles('tests/server.js', 'server');
});