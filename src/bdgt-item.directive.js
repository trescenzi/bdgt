angular.module('bdgt').directive('bdgtItem', function() {
  return {
    templateUrl: 'bdgt-item.tpl.html',
    controller: 'BDItemController',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      'name': '=',
      'value': '='
    },
    link: function(scope, element, attrs, ctrl) {
      ctrl.itemColor = function() {
        if( ctrl.value >= 0 ) {
          return {'background-color': 'green'}
        }
        return {'background-color': 'red'}
      }

      ctrl.editItem = function( newName, newValue, newCategory ) {
        ctrl.name = newName;
        ctrl.value = newValue;
        ctrl.category = newCategory;
      }
    }
  }
});
