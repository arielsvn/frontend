angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/app.tpl.html","<nav-bar></nav-bar>\n\n<ui-view></ui-view>");
$templateCache.put("home/home.tpl.html","\n\n<h1 class=\"heading -large\">{{ $ctrl.title | ExampleFilter }}!</h1>\n\n<h3 class=\"heading -medium\">Here is a fancy number served up courtesy of Angular: <span class=\"number-example\">{{ $ctrl.number }}</span></h3>\n\n<img src=\"images/angular.png\" height=\"100\" />\n<img src=\"images/gulp.png\" height=\"100\" />\n<img src=\"images/browserify.png\" height=\"100\" />\n\n<hr/>\n<div example-directive title=\"WOW!\" click-message=\"You clicked me!\">Directive is not loaded.</div>\n");
$templateCache.put("navbar/navbar.tpl.html","<nav class=\"navbar navbar-inverse\">\n\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Cognoma</a>\n      </div>\n\n    \n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\n        <ul class=\"nav navbar-nav\"  \n            ng-repeat=\"(key, value) in $ctrl.navbarSchema\">\n\n          <li class=\"dropdown\" uib-dropdown>\n            <a uib-dropdown-toggle data-toggle=\"dropdown\" href=\"#\">\n              {{key}} <span class=\"caret\"></span>\n            </a>\n\n             <ul class=\"dropdown-menu\" >\n              <li ng-repeat=\"navItem in value\" \n                  ng-class=\"{\'divider\':navItem.title == \'divider\'}\">\n                  <a ng-if=\"navItem.title != \'divider\'\"  \n                     ng-href=\"navItem.link\">{{navItem.title}}</a>\n                </li>\n            </ul>\n\n          </li>\n\n        </ul>\n\n        \n    </div>\n\n\n  </nav>\n  \n  ");}]);