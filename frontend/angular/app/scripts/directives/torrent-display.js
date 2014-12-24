'use strict';

/**
 * @ngdoc directive
 * @name theDistributedBayApp.directive:torrentDisplay
 * @description
 * # torrentDisplay
 */
angular.module('theDistributedBayApp')
  .directive('torrentDisplay', function (helpers) {
    return {
      templateUrl: 'views/torrent-display.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.sanitize = helpers.sanitizeName;
        scope.$watch('torrents', function() {
          _.each(scope.torrents, function(torrent) {
            torrent.TimeAgo = moment(torrent.CreatedAt).fromNow();
          });
        });
      }
    };
  });
