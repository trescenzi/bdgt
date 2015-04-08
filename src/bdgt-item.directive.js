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
          return {'background-color': 'mediumseagreen'}
        }
        return {'background-color': 'tomato'}
      }

      ctrl.editItem = function( newName, newValue, newCategory ) {
        ctrl.name = newName || ctrl.name;
        ctrl.value = newValue || ctrl.value;
        ctrl.category = newCategory;
        ctrl.close();
      }
    }
  }
});
