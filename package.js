Package.describe({
  summary: "RateIt - a modern, mobile-friendly, jQuery (star) rating plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client','underscore');
  api.add_files([
    'jsonform/deps/opt/jsv.js',
    'jsonform/lib/jsonform.js'
  ], ['client']
  );
});
