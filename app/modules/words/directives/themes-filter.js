(function () {
  'use strict';

  angular
    .module('hash.words')
    .directive('wdThemesFilter', function () {
      return {
        templateUrl: 'modules/words/views/partials/themes-filter.html',
        restrict: 'E',
        replace: true,
        scope: {
          options: '=',
          filter: '='
        },
        link: function(scope, element, attrs) {
          scope.setFilter = function(option, e, main) {
            scope.filter = option.tag;
            $('li', element).removeClass('selected');
            $(e.currentTarget).parent().addClass('selected');
            $(e.currentTarget)
              .parent()
              .parent()
              .parent('.menu__main-tags-option').addClass('selected');
            $(e.currentTarget)
              .parent()
              .parent('.menu__main-tags-options-children').css('display: none;');

            main
              ? $('.menu__main-tags-current', element).text('Todos')
              : $('.menu__main-tags-current', element).text(option.title);
          }
        }
      };
    });

})();
