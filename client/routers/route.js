Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'loading',
  // notFoundTemplate: '404',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' },
  }
});

Router.map(function() {
  this.route('index', {
    path: '/',
    template: 'index',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });


  // this.route('case', {
  //  path: '/case',
  //  template: 'case',
  //  yieldTemplates: {
  //   'header': { to: 'header'},
  //   'footer': { to: 'footer'},
  //  }
  // });
  });
