Package.describe({
  summary: "JSONform packaged for meteor with meteor-compatible usage"
});

Package.on_use(function (api) {
  api.use('jquery', 'client','underscore');
  api.add_files([
    'jsonform/deps/opt/jsv.js',
    'jsonform/lib/jsonform.js'
  ], ['client']
  );
});
