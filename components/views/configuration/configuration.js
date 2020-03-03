define(['angular', 'require'], function(angular, require) {
    'use strict';

    configurationController.$inject = ['$scope', 'maPoint', 'maDataPointTags', '$stateParams', '$state', 'maJsonStore'];
    function configurationController($scope, maPoint, maDataPointTags, $stateParams, $state, maJsonStore) {

    this.tableData = [];
    this.$onInit = () => {
                    
        this.getPoints();
    };
    
    this.getPoints = () => {
        maPoint
            .buildQuery()
            .eq('tags.Board', 'tsgp')
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.duration = {
                    pulse: this.filterByTags(points, {display: 'duration_pulse'})[0],
                }; 
               
                this.points = points;
                this.orderPoints();
                   

            });
            
    };
    
    this.orderPoints = () => {
        
     
        this.tableData.push({
            name: 'Q-1A',
            onDelay: this.filterByTags(this.points, {display: 'q_1a_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_1a_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-1B',
            onDelay: this.filterByTags(this.points, {display: 'q_1b_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_1b_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-2A',
            onDelay: this.filterByTags(this.points, {display: 'q_2a_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_2a_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-2B',
            onDelay: this.filterByTags(this.points, {display: 'q_2b_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_2b_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-3A',
            onDelay: this.filterByTags(this.points, {display: 'q_3a_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_3a_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-3B',
            onDelay: this.filterByTags(this.points, {display: 'q_3b_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_3b_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-4A',
            onDelay: this.filterByTags(this.points, {display: 'q_4a_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_4a_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-4B',
            onDelay: this.filterByTags(this.points, {display: 'q_4b_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_4b_offDelay'})[0]
        })
        this.tableData.push({
            name: 'Q-T01',
            onDelay: this.filterByTags(this.points, {display: 'q_t01_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_t01_offDelay'})[0]
        })
           
        this.tableData.push({
            name: 'Q-T02',
            onDelay: this.filterByTags(this.points, {display: 'q_t02_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_t02_offDelay'})[0]
        })
           
        this.tableData.push({
            name: 'Q-T03',
            onDelay: this.filterByTags(this.points, {display: 'q_t03_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_t03_offDelay'})[0]
        })
           
        this.tableData.push({
            name: 'Q-24',
            onDelay: this.filterByTags(this.points, {display: 'q_24_onDelay'})[0],
            offDelay: this.filterByTags(this.points, {display: 'q_24_offDelay'})[0]
        })
        
       
    console.log(this.tableData);
    }
    
    
    this.filterByTags = (points, tags) => {
        let validation = true;
        return points.filter(point => {
            validation = true;
            Object.keys(tags).map((key, index) => {
                validation = point.tags[key] === tags[key] && validation;
            });
        
            return validation;
        });
    };
    

}

return {
    bindings: {
    
       
    } ,
    controller: configurationController,
    templateUrl: require.toUrl('./configuration.html')
};

});