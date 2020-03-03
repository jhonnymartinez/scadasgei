define(['angular', 'require'], function(angular, require) {
    'use strict';

    totalCardController.$inject = ['$scope'];
    function totalCardController($scope) {
        
    this.$onChanges = () => {
        if(this.data) {
            this.buildSquares();   
        }
    }
    
    $scope.$watch('$ctrl.data.value', (lastVar) => {
            if (lastVar) {
             this.buildSquares();
            }
    });
    
    this.buildSquares = () => {
        
        this.squares = [];
        let actualPercentage = 0;
        
        if(this.data.value) {
            actualPercentage = (this.data.value *100)/this.maxValue; 
        }
        
        //let actualPercentage = (this.data.value *100)/this.maxValue; 
        let percentagePerSquare = 100/this.totalSquares; 
   
        this.color = 'white';
        
        if (actualPercentage <= this.firstInterval) {
            this.color = 'white';
        }
        
        if (actualPercentage > this.firstInterval && actualPercentage <= this.secondInterval) {
            this.color = 'yellow';
        }
        
        if (actualPercentage > this.secondInterval) {
            this.color = 'red';
        }
        
        for (let i = 0; i < this.totalSquares; i++ ) {
        
            if (percentagePerSquare * (i + 1) <= actualPercentage) {
                this.squares.push(this.color);
            } else {
                this.squares.push('blank');
            }

       
        } 
        
    }
    
}

return {
    bindings: {
        titleCard: '@',
        iconCard: '@',
        iconCardYellow: '@',
        iconCardRed: '@',
        data: '<?',
        totalSquares: '<?',
        minValue: '<?',
        maxValue: '<?',
        avgValue: '<?',
        firstInterval: '<?',
        secondInterval: '<?',
        unit: '@',
        
        
    } ,
    controller: totalCardController,
    templateUrl: require.toUrl('./totalCard.html')
};

});