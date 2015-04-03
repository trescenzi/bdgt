angular.module('bdgt').controller( 'BDController', (function() {
  function BDController() {
    console.log('hey', this.categories);
  }

  BDController.prototype = {
    constructor: BDController,
    categories: [ { name: 'bills', budgeted: 0, spent: 0 },
                        { name: 'food', budgeted: 0, spent: 0 },
                        { name: 'otherStuff', budgeted: 0, spent: 0 } ],
    spentThisMonth: function() {
     return _.foldl( this.categories, function( sum, category ) {
        return sum + parseFloat(category.spent);
      }, 0);
    }
  }

  return BDController;
}()));
