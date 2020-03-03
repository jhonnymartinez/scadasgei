define(['angular', 'require'], function(angular, require) {
    'use strict';

    mainDashboardController.$inject = ['$scope', 'maPoint', 'maDataPointTags', '$stateParams', '$state', 'maJsonStore'];
    function mainDashboardController($scope, maPoint, maDataPointTags, $stateParams, $state, maJsonStore) {


    this.$onInit = () => {
        this.sites();
    };

    this.sites = () => {
        maJsonStore.get({xid: 'phatilloXID'}).$promise.then((item) => {
            this.site = item.jsonData.site;
            this.getPoints();
            this.getChartPoints();
        
            
        });
    }
    this.getPoints = () => {
        maPoint
            .buildQuery()
            .ne('tags.equipment', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {

                this.data = {
                    metaCurrent: this.filterByTags(points, {equipment:'', display: 'meta_current_total_actual'})[0],
                    metaPower: this.filterByTags(points, {equipment:'', display: 	'meta_power_total_actual'})[0],
                    metaVoltageLn: this.filterByTags(points, {equipment:'ats', display: 'voltage_ln_avg_p'})[0],
                    metaVoltageLl: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_p'})[0],
                    activeGenerators: this.filterByTags(points, {equipment:'', display: 'active_generators'})[0],
                    activeTransformers: this.filterByTags(points, {equipment:'', display: 	'active_transformers'})[0],
                    operationMode: this.filterByTags(points, {equipment:'plc', display: 'operation_mode'})[0],
                    statusActual: this.filterByTags(points, {equipment:'plc', display: 'status_actual'})[0],
                    voltage1a: this.filterByTags(points, {equipment:'q_1a', display: 'voltage_ll_avg_1a'})[0],
                    voltage1b: this.filterByTags(points, {equipment:'q_1b', display: 'voltage_ll_avg_1b'})[0],
                    voltage2a: this.filterByTags(points, {equipment:'q_2a', display: 'voltage_ll_avg_2a'})[0],
                    voltage2b: this.filterByTags(points, {equipment:'q_2b', display: 'voltage_ll_avg_2b'})[0],
                    voltage3a: this.filterByTags(points, {equipment:'q_3a', display: 'voltage_ll_avg_3a'})[0],
                    voltage3b: this.filterByTags(points, {equipment:'q_3b', display: 'voltage_ll_avg_3b'})[0],
                    voltage4a: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_p'})[0],
                    voltage4b: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_4b'})[0],
                    voltageP: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_p'})[0],
                    voltageT02: this.filterByTags(points, {equipment:'q_t02', display: 'voltage_ll_avg_t02'})[0],
                    voltageT03: this.filterByTags(points, {equipment:'q_t03', display: 'voltage_ll_avg_t03'})[0],
                    voltageG01: this.filterByTags(points, {equipment:'gen01', display: 'voltage_ll_avg'})[0],
                    voltageG02: this.filterByTags(points, {equipment:'gen02', display: 'voltage_ll_avg'})[0],
                    current1a: this.filterByTags(points, {equipment:'q_1a', display: 'current_total_actual_1a'})[0],
                    current1b: this.filterByTags(points, {equipment:'q_1b', display: 'current_total_actual_1b'})[0],
                    current2a: this.filterByTags(points, {equipment:'q_2a', display: 'current_total_actual_2a'})[0],
                    current2b: this.filterByTags(points, {equipment:'q_2b', display: 'current_total_actual_2b'})[0],
                    current3a: this.filterByTags(points, {equipment:'q_3a', display: 'current_total_actual_3a'})[0],
                    current3b: this.filterByTags(points, {equipment:'q_3b', display: 'current_total_actual_3b'})[0],
                    current4a: this.filterByTags(points, {display: 'current_total_actual_4a'})[0],
                    current4b: this.filterByTags(points, {display: 'current_total_actual_4b'})[0],
                    currentP: this.filterByTags(points, {display: 'current_total_actual_p'})[0],
                    currentT02: this.filterByTags(points, {equipment:'q_t02', display: 'current_total_actual_t02'})[0],
                    currentT03: this.filterByTags(points, {equipment:'q_t03', display: 'current_total_actual_t03'})[0],
                    currentG01: this.filterByTags(points, {equipment:'gen01', display: 'total_current'})[0],
                    currentG02: this.filterByTags(points, {equipment:'gen02', display: 'total_current'})[0],
                    q1aPf: this.filterByTags(points, {display: 'q_1a_pf'})[0],
                    q1aStatus: this.filterByTags(points, {display: 'q_1a_status'})[0],
                    q1bPf: this.filterByTags(points, {display: 'q_1b_pf'})[0],
                    q1bStatus: this.filterByTags(points, {display: 'q_1b_status'})[0],
                    q2aPf: this.filterByTags(points, {display: 'q_2a_pf'})[0],
                    q2aStatus: this.filterByTags(points, {display: 'q_2a_status'})[0],
                    q2bPf: this.filterByTags(points, {display: 'q_2b_pf'})[0],
                    q2bStatus: this.filterByTags(points, {display: 'q_2b_status'})[0],
                    q3aPf: this.filterByTags(points, {display: 'q_3a_pf'})[0],
                    q3aStatus: this.filterByTags(points, {display: 'q_3a_status'})[0],
                    q3bPf: this.filterByTags(points, {display: 'q_3b_pf'})[0],
                    q3bStatus: this.filterByTags(points, {display: 'q_3b_status'})[0],
                    q4aPf: this.filterByTags(points, {display: 'q_4a_pf'})[0],
                    q4aStatus: this.filterByTags(points, {display: 'q_4a_status'})[0],
                    q4bPf: this.filterByTags(points, {display: 'q_4b_pf'})[0],
                    q4bStatus: this.filterByTags(points, {display: 'q_4b_status'})[0],
                    q24Pf: this.filterByTags(points, {display: 'q_24_pf'})[0],
                    q24Status: this.filterByTags(points, {display: 'q_24_status'})[0],
                    qG01Status: this.filterByTags(points, {display: 'q_g01_status'})[0],
                    qG02Status: this.filterByTags(points, {display: 'q_g02_status'})[0],
                    qRnStatus: this.filterByTags(points, {display: 'q_rn_status'})[0],
                    qT01Pf: this.filterByTags(points, {display: 'q_t01_pf'})[0],
                    qT01Status: this.filterByTags(points, {display: 'q_t01_status'})[0],
                    qT02Pf: this.filterByTags(points, {display: 'q_t02_pf'})[0],
                    qT02Status: this.filterByTags(points, {display: 'q_t02_status'})[0],
                    qT03Pf: this.filterByTags(points, {display: 'q_t03_pf'})[0],
                    qT03Status: this.filterByTags(points, {display: 'q_t03_status'})[0],
                    busLive: this.filterByTags(points, {equipment:'ats', display: 'bus_live'})[0],
                    
            };
         
        });
    };
    
    this.getChartPoints = () => {
        maPoint
            .buildQuery()
            .eq('tags.sitename', 'phatillo')
            .eq('dataType', 'NUMERIC')
            .limit(10000)
            .query()
            .then((points) => {

                this.GraphData = points;
                
         
        });
    };
    
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
    controller: mainDashboardController,
    templateUrl: require.toUrl('./mainDashboard.html')
};

});