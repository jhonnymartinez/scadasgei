define(['angular', 'require'], function(angular, require) {
    'use strict';

    detailAtsController.$inject = ['$scope', 'maPoint','maEvents', '$stateParams', '$state', 'maJsonStore'];
    function detailAtsController($scope, maPoint, maEvents, $stateParams, $state, maJsonStore) {

    this.atsAlarmsIds = [];
    this.gen01AlarmsIds = [];
    this.gen02AlarmsIds = [];

    this.$onInit = () => {
        this.getAtsPoints();
        this.getAtsAlarms();
        this.getGen01Points();
        this.getGen01Alarms();
        this.getGen02Points();
        this.getGen02Alarms();
    };

    this.getAtsPoints = () => {
        maPoint.buildQuery()
            .eq('tags.board', 'tats')
            .eq('tags.equipment', 'ats')
            .eq('tags.alarm', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.atsData = {
                    autoMode: this.filterByTags(points, {display: 'auto_mode'})[0],
                    manualMode: this.filterByTags(points, {display: 'manual_mode'})[0],
                    stopMode: this.filterByTags(points, {display: 'stop_mode'})[0],
                    busLive: this.filterByTags(points, {display: 'bus_live'})[0],
                    sistemControlKey: this.filterByTags(points, {display: 'system_control_key'})[0]
                };
            });
    };
    
    this.getAtsAlarms = () => {
        maPoint.buildQuery()
            .eq('tags.board', 'tats')
            .eq('tags.equipment', 'ats')
            .ne('tags.alarm', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.atsAlarms = points;
                for (let i = 0; i < points.length; i++) {
                    this.atsAlarmsIds.push(points[i].id);
                }
                this.getAtsAlarmsEvents();
            });
    };
    
    this.getAtsAlarmsEvents = () => {
        const rqlQuery = 'eq(eventType,DATA_POINT)&sort(-activeTimestamp)&limit(5,0)&in(referenceId1,' + this.atsAlarmsIds.join(',') +')';
        maEvents.get({rqlQuery}).$promise.then((data) => {
            this.atsEvents = data;
            //this.listenForAtsAlarmsEvents();
        });
    };
    
    this.listenForAtsAlarmsEvents = () => {
        if (!this.eventsWebsocket) {
            this.deregisterWebsocket = maEvents.notificationManager.subscribe((event, mangoEvent) => {
                if (this.atsAlarmsIds.includes(mangoEvent.eventType.dataPointId)) {
                    this.atsEvents.unshift(mangoEvent);
                }
            },this.$scope, ['RAISED', 'RETURN_TO_NORMAL']);
        } 
    }
    
    
    
    this.getGen01Points = () => {
        maPoint.buildQuery()
            .eq('tags.board', 'tats')
            .eq('tags.equipment', 'gen01')
            .eq('tags.alarm', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.gen01Data = {
                    autoMode: this.filterByTags(points, {display: 'auto_mode'})[0],
                    manualMode: this.filterByTags(points, {display: 'manual_mode'})[0],
                    stopMode: this.filterByTags(points, {display: 'stop_mode'})[0],
                    running: this.filterByTags(points, {display: 'generator_available'})[0],
                    sistemControlKey: this.filterByTags(points, {display: 'system_control_key'})[0]
                };
            });
    };
    
    this.getGen01Alarms = () => {
        maPoint.buildQuery()
            .eq('tags.board', 'tats')
            .eq('tags.equipment', 'gen01')
            .ne('tags.alarm', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.gen01Alarms = points;
                for (let i = 0; i < points.length; i++) {
                    this.gen01AlarmsIds.push(points[i].id);
                }
                this.getGen01AlarmsEvents();
            });
    };
    
    this.getGen01AlarmsEvents = () => {
        const rqlQuery = 'eq(eventType,DATA_POINT)&sort(-activeTimestamp)&limit(5,0)&in(referenceId1,' + this.gen01AlarmsIds.join(',') +')';
        maEvents.get({rqlQuery}).$promise.then((data) => {
            this.gen01Events = data;
            //this.listenForGen01AlarmsEvents();
        });
    };
    
    this.listenForGen01AlarmsEvents = () => {
        if (!this.eventsWebsocket) {
            this.deregisterWebsocket = maEvents.notificationManager.subscribe((event, mangoEvent) => {
                if (this.gen01AlarmsIds.includes(mangoEvent.eventType.dataPointId)) {
                    this.gen01Events.unshift(mangoEvent);
                }
            },this.$scope, ['RAISED', 'RETURN_TO_NORMAL']);
        } 
    }
    
    this.getGen02Points = () => {
        maPoint.buildQuery()
            .eq('tags.board', 'tats')
            .eq('tags.equipment', 'gen02')
            .eq('tags.alarm', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.gen02Data = {
                    autoMode: this.filterByTags(points, {display: 'auto_mode'})[0],
                    manualMode: this.filterByTags(points, {display: 'manual_mode'})[0],
                    stopMode: this.filterByTags(points, {display: 'stop_mode'})[0],
                    running: this.filterByTags(points, {display: 'generator_available'})[0],
                    sistemControlKey: this.filterByTags(points, {display: 'system_control_key'})[0]
                };
            });
    };
    
    this.getGen02Alarms = () => {
        maPoint.buildQuery()
            .eq('tags.board', 'tats')
            .eq('tags.equipment', 'gen02')
            .ne('tags.alarm', null)
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {
                this.gen02Alarms = points;
                for (let i = 0; i < points.length; i++) {
                    this.gen02AlarmsIds.push(points[i].id);
                }
                this.getGen02AlarmsEvents();
            });
    };
    
    this.getGen02AlarmsEvents = () => {
        const rqlQuery = 'eq(eventType,DATA_POINT)&sort(-activeTimestamp)&limit(5,0)&in(referenceId1,' + this.gen02AlarmsIds.join(',') +')';
        maEvents.get({rqlQuery}).$promise.then((data) => {
            this.gen02Events = data;
            //this.listenForGen02AlarmsEvents();
        });
    };
    
    this.listenForGen02AlarmsEvents = () => {
        if (!this.eventsWebsocket) {
            this.deregisterWebsocket = maEvents.notificationManager.subscribe((event, mangoEvent) => {
                if (this.gen02AlarmsIds.includes(mangoEvent.eventType.dataPointId)) {
                    this.gen02Events.unshift(mangoEvent);
                }
            },this.$scope, ['RAISED', 'RETURN_TO_NORMAL']);
        } 
    }
    
    this.statusSquareClass = (color) => {
        let out = color;
        return out
    }
    
    this.writeWithCompliment = (point, value) => {
        const littleEndian = false;
        const buffer = new ArrayBuffer(4); // 4 bytes or 32 bits
        const view = new DataView(buffer);
        
        const valueCompliment = value ^ 0xFFFF;
        view.setUint16(0, value, littleEndian);
        view.setUint16(2, valueCompliment, littleEndian);
    
        return point.setValue(view.getInt32(0, littleEndian));
    }
    
    // this.controllerClick = (variable, value) => {
    //     //console.log('Cambiando a', value);
    //     variable.value = value;
    //     //console.log(variable.value);
    // };
    
    this.ledClass = (variable) => {
        let out = 'fill-gray';
        if (variable) {
            out = 'fill-red';
        }
        return out
    }
    
    this.atsActualAlarms = () => {
        let out = 0;
        if (this.atsAlarms) {
            for (let i = 0; i < this.atsAlarms.length; i++) {
                if (this.atsAlarms[i].value == true) {
                    out++;
                }
            }
        }
        return out
    }
    
    this.gen01ActualAlarms = () => {
        let out = 0;
        if (this.gen01Alarms) {
            for (let i = 0; i < this.gen01Alarms.length; i++) {
                if (this.gen01Alarms[i].value == true) {
                    out++;
                }
            }
        }
        return out
    }
    
    this.gen02ActualAlarms = () => {
        let out = 0;
        if (this.gen02Alarms) {
            for (let i = 0; i < this.gen02Alarms.length; i++) {
                if (this.gen02Alarms[i].value == true) {
                    out++;
                }
            }
        }
        return out
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
    controller: detailAtsController,
    templateUrl: require.toUrl('./detailAts.html')
};

});