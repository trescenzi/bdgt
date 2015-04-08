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
     return _.foldl( this.exampleItems, function( sum, item ) {
        if(item.value < 0) {
          return sum + item.value;
        }
        return sum;
      }, 0);
    },
    addItem: function(name, value) {
      this.exampleItems.push({'name': name, 'value':value});
    },
    earnedThisMonth: function() {
     return _.foldl( this.exampleItems, function( sum, item ) {
        if(item.value > 0) {
          return sum + item.value;
        }
        return sum;
      }, 0);
    },
    total: function() {
      return this.earnedThisMonth() + this.spentThisMonth();
    }
  }

  return BDController;
}()));
