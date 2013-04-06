Package.describe({
  summary: "RateIt - a modern, mobile-friendly, jQuery (star) rating plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'deps/opt/ace/jsv.js',
    'jsonform/lib/jsonform.js'
  ], ['client']
  );
});
