module.controller( 'BDItemController', [ 'ngDialog', function(ngDialog) {
    console.log(ngDialog);

    this.openEdit =  function() {
      console.log('calling?');
      ngDialog.open(
        { template: "Hello World",
          plain: true
        });
    }
}]);
