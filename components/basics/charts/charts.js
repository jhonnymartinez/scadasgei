define(['angular', 'require'], function(angular, require) { 
    'use strict'; 
     
    chartsController.$inject = ['maRqlBuilder', 'maUiDateBar', 'localStorageService', 'maPoint']; 
    function chartsController(maRqlBuilder, maUiDateBar, localStorageService, maPoint) { 
     
        this.dataPoints = []; 
        this.maUiDateBar = maUiDateBar; 
     
        this.$onInit = () => { 
            const dataPointsString = localStorageService.get(this.data ? this.data : ''); 
     
            if (dataPointsString) { 
                this.getDataPoints(dataPointsString); 
            } 
          
            let query = new maRqlBuilder() 
                .ne('deviceName', 'Mango Internal'); 
     
            this.queryString = query.sort('name').limit(10000).toString(); 
     
            // if (changes && changes.site && changes.site.previousValue.name) { 
            //     this.dataPoints = []; 
            //     const dataPointsString = localStorageService.get(this.data ? this.data : ''); 
     
            //     if (dataPointsString) { 
            //         this.getDataPoints(dataPointsString); 
            //     }    
            // } 
         
            this.getDataPoints = (dataPointsString) => { 
                maPoint.buildQuery() 
                    .in('xid', dataPointsString.split(',')) 
                    .query() 
                    .then(points => { 
                        this.dataPoints = points; 
                    }); 
            } 
            
        }; 
     
        this.$onChanges = (changes) => { 
            
        }; 
     
        this.addPoint = () => { 
            if(this.dataPoints.filter(point => point.xid === this.selectedPoint.xid).length === 0) { 
                this.dataPoints.push(this.selectedPoint); 
            } 
     
            localStorageService.set(this.data ? this.data : '', this.dataPoints.map(dataPoint => dataPoint.xid).join(',')); 
            this.selectedPoint = null; 
        }; 
     
        this.deletePoint = (selectedPoint) => { 
            this.dataPoints = this.dataPoints.filter(point => point.xid !== selectedPoint.xid); 
            localStorageService.set(this.data ? this.data : '', this.dataPoints.map(dataPoint => dataPoint.xid).join(',')); 
        }; 
    } 
     
    return { 
        bindings: { 
            site: '<?', 
            data: '<?', 
            
        }, 
        controller: chartsController, 
        templateUrl: require.toUrl('./charts.html') 
    }; 
     
    });