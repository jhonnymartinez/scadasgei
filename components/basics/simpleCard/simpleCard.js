define(['angular', 'require'], function(angular, require) {
    'use strict';

    simpleCardController.$inject = ['maPoint'];
    function simpleCardController(maPoint) {

 
    this.$onInit = () => {
     
        
    }; 
    
}

return {
    bindings: {
        titleCard: '@',
        iconCard: '@',
        data: '<?',
        site: '<?',
        integral: '@',
        timestamp: '@'
    } ,
    controller: simpleCardController,
    templateUrl: require.toUrl('./simpleCard.html')
};

});