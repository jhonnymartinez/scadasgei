define(['angular', 'require'], function(angular, require) {
    'use strict';
    
    diagramSgeiController.$inject = ['$scope'];
    function diagramSgeiController($scope) {
        
    // this.$onChanges = () => {
    //     $scope.$watch('$ctrl.data', (lastVar) => {
    //         if (lastVar) {
    //             this.checkData = () => {
    //                 this.dataAvailable = false;
    //                 if (this.data) {
    //                         this.dataAvailable = true;
    //                     }
    //             }
    //         }
        
    //     });
    // }
    this.$onInit = () => {
        this.checkData();
    }
    
    this.$onChanges = () => {
        this.checkData = () => {
        this.dataAvailable = false;
        if (this.data) {
                this.dataAvailable = true;
            }
        }
        
    };
    
    
    this.transformerVoltageWarningClass = (voltage) => {
        let out = '';
        if (voltage) {
            if (voltage >= 438 && voltage <= 528) {
                out = 'hide';
            }
        }
        return out
    }
    
    this.upperLineClass = (voltage, current) => {
        let out = 'dead';
        if (voltage && current) {
            if (voltage >= 10 && current == 0) {
                out = 'live';
            }
            if (voltage >= 10 && current > 0) {
                out = 'live line-active';
            }
        }
        return out
    }
    
    this.upperConnectorClass = (voltage, status) => {
        let out = 'dead';
        if (voltage && status) {
            if (voltage >= 10 && status) {
                out = 'live';
            }
        }
        return out
    }
    
    this.sideALiveStatus = () => {
        this.sideALive = false;
        
        if (this.data) {
            
                if (this.data.q24Status.value == false) { // TSGP seccionado
                    if (this.data.voltageT02.value >= 10 && (this.data.qT01Status.value == true || this.data.qT02Status.value == true)) {
                        this.sideALive = true;
                    }
                }
                if (this.data.q24Status.value == true && this.data.q4aStatus.value == false) { // TSGP completo sin Empalme ATS
                    if (this.data.voltageT03.value >= 10 && this.data.qT03Status.value == true || (this.data.voltageT02.value >= 10 && (this.data.qT01Status.value == true || this.data.qT02Status.value == true))) {
                        this.sideALive = true;
                    }
                }
                if (this.data.q24Status.value == true && this.data.q4aStatus.value == true) { // TSGP completo empalmado con ATS
                    if (this.data.busLive.value) {
                        this.sideALive = true;
                    }
                }
            
        }
        
        
        
    }
    
    this.sideBLiveStatus = () => {
        this.sideBLive = false;
        if (this.data) {
            
                
                if (this.data.q24Status.value != 1 && this.data.q4aStatus.value != 1) { // TSGP seccionado
                    if (this.data.voltageT03.value >= 10 && this.data.qT03Status.value == 1) {
                        this.sideBLive = true;
                    }
                }
                
                if (this.data.q24Status.value == 1 && this.data.q4aStatus.value != 1) { // TSGP completo sin Empalme ATS
                    if (this.data.voltageT03.value >= 10 && this.data.qT03Status.value == 1 || (this.data.voltageT02.value >= 10 && (this.data.qT01Status.value == 1 || this.data.qT02Status.value == 1))) {
                        this.sideBLive = true;
                    }
                }
                if (this.data.q4aStatus.value == 1) { // TSGP completo empalmado con ATS
                    if (this.data.busLive.value) {
                        this.sideBLive = true;
                    }
                }
        }
        
        
    }
    
    this.centerLineSideA = () => {
        let out = 'dead';
        this.sideALiveStatus();
        if (this.sideALive) {
            out = 'live';
        }
        return out
    }
    
    this.centerCircleSideA = () => {
        let out = 'fill-green';
        this.sideALiveStatus();
        if (this.sideALive) {
            out = 'fill-red';
        }
        return out
    }
    
    this.atsLinesBus = () => {
        let out = 'dead';
        if (this.data) {
            if(this.data.busLive.value) {
                out = 'live';
            }
        }
        return out
    }
    
    this.atsCircleBus = () => {
        let out = 'fill-green';
        if (this.data) {
            if(this.data.busLive.value) {
                out = 'fill-red';
            }
        }
        
        return out
    }
    
    this.centerLineSideB = () => {
        let out = 'dead';
        this.sideBLiveStatus();
        if (this.sideBLive) {
            out = 'live';
        }
        return out
    }
    
    this.centerCircleSideB = () => {
        let out = 'fill-green';
        this.sideBLiveStatus();
        if (this.sideBLive) {
            out = 'fill-red';
        }
        return out
    }
    
    this.pfClass = (variable) => {
        let out = '';
        if (variable) {
            out = 'fill-white'
        }
        return out;
    }
    
    this.statusText = (variable) => {
        let out = 'OFF';
        if (variable) {
            if (variable == 1) {
                out = 'ON'
            }
            if (variable == 2) {
                out = 'TRP'
            }
        }
        
        return out;
    }
    
    this.statusColor = (variable) => {
        let out = 'fill-green';
        if (variable) {
            if (variable == 1) {
                out = 'fill-red'
            }
            if (variable == 2) {
                out = 'fill-yellow'
            }
        }
        
        return out;
    }
    
    this.warningClass = (variable) => {
        let out = 'hide';
        if (variable) {
            if (variable == 2) {
                out = ''
            } 
        }
        
        return out;
    }
   
    }  

return {
    bindings: {
        data: '<?',
    },
    controller: diagramSgeiController,
    templateUrl: require.toUrl('./diagramSgei.html')
};

});