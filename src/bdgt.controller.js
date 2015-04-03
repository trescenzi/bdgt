angular.module('bdgt').controller( 'BDController', (function() {
  function BDController() {
    this.exampleItems = [
      { name: 'paycheck', value: 1000 },
      { name: 'dinner', value: -25 },
      { name: 'rent', value: -500 }
    ];
  }

  BDController.prototype = {
    constructor: BDController,
    spentThisMonth: function() {
     return _.foldl( this.categories, function( sum, category ) {
        return sum + parseFloat(category.spent);
      }, 0);
    },
    addItem: function(name, value) {
      this.exampleItems.push({'name': name, 'value':value});
    }
  }

  return BDController;
}()));
