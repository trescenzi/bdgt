angular.module('bdgt').controller( 'BDController', function( $http ) {
  
    this.spentThisMonth = function(){
     return _.foldl( this.data, function( sum, item ) {
        if(item.value < 0) {
          return sum + item.value;
        }
        return sum;
      }, 0);
    };

    this.addItem = function(name, value) {
      this.data.push({'name': name, 'value':parseFloat(value)});
      this.saveData();
    };

    this.earnedThisMonth = function() {
        console.log( 'earned', this.data);
     return _.foldl( this.data, function( sum, item ) {
        console.log(item);
        if(item.value > 0) {
          return sum + item.value;
        }
        return sum;
      }, 0);
    };

    this.total = function() {
      return this.earnedThisMonth() + this.spentThisMonth();
    };

    this.getBudgetItems = function() {
      console.log( 'calling function' );
      $http.get('fake_data.json').then(_.bind(this.setData, this));
    };

    this.setData = function( response ) {
      this.data = response.data;
    };

    this.saveData = function() {
      console.log('putting',this.data, JSON.stringify(this.data));
      $http.put('fake_data.json', JSON.stringify(this.data));
    }

});
