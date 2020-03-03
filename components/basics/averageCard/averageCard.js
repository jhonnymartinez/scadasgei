define(['angular', 'require'], function(angular, require) {
    'use strict';

    averageCardController.$inject = ['$scope'];
    function averageCardController($scope) {
        
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
        
        let percentagePerSquare = 10;
        let overAvg = false;
        
        if (this.data.value - this.avgValue > 0) { 
            
            overAvg = true;
            this.actualPercentage = ((this.data.value - this.avgValue)*100)/(this.maxValue - this.avgValue);
            
        } else {
    
            this.actualPercentage = ((this.avgValue - this.data.value)*100)/(this.avgValue - this.minValue);
            
        }
        
        this.color = 'white';
        
        if (this.actualPercentage <= this.firstInterval) {
            this.color = 'white';
        }
        
        if (this.actualPercentage > this.firstInterval && this.actualPercentage <= this.secondInterval) {
            this.color = 'yellow';
        }
        
        if (this.actualPercentage > this.secondInterval) {
            this.color = 'red';
        }
        
        for (let i = 0; i < this.totalSquares; i++ ) {
            if (overAvg) {
                if ((percentagePerSquare * (i + 1)) <= this.actualPercentage + 100 && i > 9 && i != 9) {
                    this.squares.push(this.color);
                } else {
                    this.squares.push('blank');
                }
                if (i == 9) {
                    this.squares.push('mid-line');
                }
            } else {
                if ((percentagePerSquare * (i + 1)) > (100 - this.actualPercentage) && i <= 9) {
                    this.squares.push(this.color);
                } else {
                    this.squares.push('blank');
                }
                if (i == 9) {
                    this.squares.push('mid-line');
                }
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
        totalSquares: '=',
        minValue: '=',
        maxValue: '=',
        avgValue: '=',
        firstInterval: '=',
        secondInterval: '=',
        unit: '@',
        
    } ,
    controller: averageCardController,
    templateUrl: require.toUrl('./averageCard.html')
};

});