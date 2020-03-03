define(['angular', 'require'], function(angular, require) {
    'use strict';

    detailGeneratorsController.$inject = ['maPoint', 'maDataPointTags', '$mdMedia'];
    function detailGeneratorsController(maPoint, maDataPointTags, $mdMedia) {
        
    this.$onInit = () => {
       this.getPoints();
       this.gen1Events();
       
    };
    
    this.getPoints = () => {
        maPoint
        .buildQuery()
        .ne('tags.equipment', null)
        .ne('tags.display', null)
        .limit(1000)
        .query()
        .then((points) => {

            this.generators = {
                runtime: this.filterByTags(points, {equipment:'gen', display: 'generators_total_runtime'})[0],
                powerTotal: this.filterByTags(points, {equipment:'gen', display: 'generators_power_total_actual'})[0],
                currentTotal: this.filterByTags(points, {equipment:'gen', display: 'generators_total_current'})[0],
                voltageLl: this.filterByTags(points, {equipment:'gen', display: 'generators_voltage_ll_avg'})[0],
                voltageLn: this.filterByTags(points, {equipment:'gen', display: 'generators_voltage_ln_avg'})[0],
                
                g1available: this.filterByTags(points, {equipment:'gen01', display: 'generator_available'})[0],
                g1autoMode: this.filterByTags(points, {equipment:'gen01', display: 'auto_mode'})[0],
                g1coolingMode: this.filterByTags(points, {equipment:'gen01', display: 'cooling_mode'})[0],
                g1manualMode: this.filterByTags(points, {equipment:'gen01', display: 'manual_mode'})[0],
                g1stopMode: this.filterByTags(points, {equipment:'gen01', display: 'stop_mode'})[0],
                g1activePower: this.filterByTags(points, {equipment:'gen01', display: 'active_power'})[0],
                g1fuelLevel: this.filterByTags(points, {equipment:'gen01', display: 'fuel_level'})[0],
                g1lastRuntime: this.filterByTags(points, {equipment:'gen01', display: 'last_run_timestamp'})[0],
                g1oilPressure: this.filterByTags(points, {equipment:'gen01', display: 'oil_pressure'})[0],
                g1reactivePower: this.filterByTags(points, {equipment:'gen01', display: 'reactive_power'})[0],
                g1refTemperature: this.filterByTags(points, {equipment:'gen01', display: 'ref_temperature'})[0],
                g1runtime: this.filterByTags(points, {equipment:'gen01', display: 'run_time'})[0],
                g1status: this.filterByTags(points, {equipment:'gen01', display: 'generator_available'})[0],
                g1totalPower: this.filterByTags(points, {equipment:'gen01', display: 'total_power'})[0],
                g1voltageAvgLl: this.filterByTags(points, {equipment:'gen01', display: 'voltage_ll_avg'})[0],
                g1voltageAvgLn: this.filterByTags(points, {equipment:'gen01', display: 'voltage_ln_avg'})[0],
                g1currentTotal: this.filterByTags(points, {equipment:'gen01', display: 'total_current'})[0],
                
                g2available: this.filterByTags(points, {equipment:'gen02', display: 'generator_available'})[0],
                g2autoMode: this.filterByTags(points, {equipment:'gen02', display: 'auto_mode'})[0],
                g2coolingMode: this.filterByTags(points, {equipment:'gen02', display: 'cooling_mode'})[0],
                g2manualMode: this.filterByTags(points, {equipment:'gen02', display: 'manual_mode'})[0],
                g2stopMode: this.filterByTags(points, {equipment:'gen02', display: 'stop_mode'})[0],
                g2activePower: this.filterByTags(points, {equipment:'gen02', display: 'active_power'})[0],
                g2fuelLevel: this.filterByTags(points, {equipment:'gen02', display: 'fuel_level'})[0],
                g2lastRuntime: this.filterByTags(points, {equipment:'gen02', display: 'last_run_timestamp'})[0],
                g2oilPressure: this.filterByTags(points, {equipment:'gen02', display: 'oil_pressure'})[0],
                g2reactivePower: this.filterByTags(points, {equipment:'gen02', display: 'reactive_power'})[0],
                g2refTemperature: this.filterByTags(points, {equipment:'gen02', display: 'ref_temperature'})[0],
                g2runtime: this.filterByTags(points, {equipment:'gen02', display: 'run_time'})[0],
                g2status: this.filterByTags(points, {equipment:'gen02', display: 'generator_available'})[0],
                g2totalPower: this.filterByTags(points, {equipment:'gen02', display: 'total_power'})[0],
                g2voltageAvgLl: this.filterByTags(points, {equipment:'gen02', display: 'voltage_ll_avg'})[0],
                g2voltageAvgLn: this.filterByTags(points, {equipment:'gen02', display: 'voltage_ln_avg'})[0],
                g2currentTotal: this.filterByTags(points, {equipment:'gen02', display: 'total_current'})[0],
            };console.log(this.g1available);
        });
    };
    // this.gen1Events = () => {
        
    //     const rqlQuery = 'eq(eventType,DATA_POINT)&sort(-activeTimestamp)&limit(1,0)&in(referenceId1,' + this.g1available.id.join(',') +')';
    //     maEvents.get({rqlQuery}).$promise.then((data) => {
    //         this.genEvents = data;
    //         console.log('EVENTS', this.genEvents);
    //     });
        
    // }
    
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
    controller: detailGeneratorsController,
    templateUrl: require.toUrl('./detailGenerators.html')
};

});