Package.describe({
  summary: "JSONform packaged for meteor with meteor-compatible usage"
});

Package.on_use(function (api) {
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.add_files([
    'jsonform/deps/opt/jsv.js',
    'jsonform/lib/jsonform.js'
  ], ['client']
  );
});
