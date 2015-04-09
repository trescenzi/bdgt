angular.module('bdgt').controller( 'BDItemController', [ '$scope', 'ngDialog', function($scope, ngDialog) {
    console.log(ngDialog);

    this.openEdit = function() {
      console.log('calling?');
      this.close = ngDialog.open(
        {template: "bdgt-edit.dialog.tpl.html",
         scope: $scope,
         showClose: false }).close;
    };

    this.editItem = function(newName, newValue) {
      this.name = newName;
      this.value = newValue;
    };

}]);
