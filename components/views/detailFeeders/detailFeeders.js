define(['angular', 'require'], function(angular, require) {
    'use strict';

    detailFeedersController.$inject = ['$scope', 'maPoint', 'maDataPointTags', '$stateParams', '$state', 'maJsonStore'];
    function detailFeedersController($scope, maPoint, maDataPointTags, $stateParams, $state, maJsonStore) {

    this.$onInit = () => {
        this.sites();
        this.getPoints();
        this.selectedFeeder = this.feederNames[0];
        
    };

    this.sites = () => {
        maJsonStore.get({xid: 'phatilloXID'}).$promise.then((item) => {
            this.site = item.jsonData.site;
            this.basg1 = this.site.asg1Circuit.subBoards.split(',');
            this.basg2 = this.site.asg2Circuit.subBoards.split(',');
            this.basg3 = this.site.asg3Circuit.subBoards.split(',');
            this.bcond3 = this.site.cond3Circuit.subBoards.split(',');
            this.btsg1 = this.site.dsg1Circuit.subBoards.split(',');
            this.btsg2 = this.site.dsg2Circuit.subBoards.split(',');
            this.bbp = this.site.bpCircuit.subBoards.split(',');
           
            
            

        });
    }
  
    this.feedersName = () => {
        
        this.boardName = '';
        
        if(this.selectedFeeder === 'ASG1'){
            this.boardName = 'Q-2A'
        } 
        if(this.selectedFeeder === 'ASG2'){
            this.boardName = 'Q-3A'
        }  
        if(this.selectedFeeder === 'ASG3'){
            this.boardName = 'Q-1A'
        }  
        if(this.selectedFeeder === 'COND3'){
            this.boardName = 'Q-2B'
        }  
        if(this.selectedFeeder === 'DSG1'){
            this.boardName = 'Q-1B'
        }  
        if(this.selectedFeeder === 'DSG2'){
            this.boardName = 'Q-3B'
        } 
        if(this.selectedFeeder === 'BP'){
            this.boardName = 'Q-P'
        }
        
        return this.boardName;
        
    };
    this.boardStatus = () => {

        this.bStatus = '';
        
        if(this.selectedFeeder === 'ASG1'){
            if(this.feeders.q2aStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
            if(this.feeders.q2aStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }
        } 
        
        if(this.selectedFeeder === 'ASG2'){
            if(this.feeders.q3aStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
            if(this.feeders.q3aStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }
            
        }  
        if(this.selectedFeeder === 'ASG3'){
            if(this.feeders.q1aStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
            if(this.feeders.q1aStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }
            
        } 
        if(this.selectedFeeder === 'COND3'){
            if(this.feeders.q2bStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
            if(this.feeders.q2bStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }
            
        } 
        if(this.selectedFeeder === 'DSG1'){
            if(this.feeders.q1bStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
            if(this.feeders.q1bStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }
            
        } 
        if(this.selectedFeeder === 'DSG2'){
            if(this.feeders.q3bStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
            if(this.feeders.q3bStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }

        } 
        if(this.selectedFeeder === 'BP'){
            if(this.feeders.qpStatus.value == 0){
                
                this.bStatus = 'OFF'
                
            }
             if(this.feeders.qpStatus.value == 1){
                
                this.bStatus = 'ON'
                
            }
        } 
  
        return this.bStatus;
        
        
    };
    this.boardColors = () => {
        
        this.bColors = '';
        
        if(this.selectedFeeder === 'ASG1'){
            if(this.feeders.q2aStatus.value == 0){
                
                this.bColors = 'fill-green'
                
            }
            if(this.feeders.q2aStatus.value == 1){
                
                this.bColors = 'fill-red'
            }
           
        } 
        
        if(this.selectedFeeder === 'ASG2'){
            if(this.feeders.q3aStatus.value == 0){
                
                this.bColors = 'fill-green'
                
            }
            if(this.feeders.q3aStatus.value == 1){
                
                this.bColors = 'fill-red'
                
            }
          
        }  
        if(this.selectedFeeder === 'ASG3'){
            if(this.feeders.q1aStatus.value == 0){
                
               this.bColors = 'fill-green'
                
            }
            if(this.feeders.q1aStatus.value == 1){
                
                 this.bColors = 'fill-red'
                
            }
        
        } 
        if(this.selectedFeeder === 'COND3'){
            if(this.feeders.q2bStatus.value == 0){
                
                this.bColors = 'fill-green'
                
            }
            if(this.feeders.q2bStatus.value == 1){
                
               this.bColors = 'fill-red' 
                
            }
         
        } 
        if(this.selectedFeeder === 'DSG1'){
            if(this.feeders.q1bStatus.value == 0){
                
                this.bColors = 'fill-green'
                
            }
            if(this.feeders.q1bStatus.value == 1){
                
                this.bColors = 'fill-red' 
                
            }
        
            
        } 
        if(this.selectedFeeder === 'DSG2'){
            if(this.feeders.q3bStatus.value == 0){
                
                this.bColors = 'fill-green'
                
            }
            if(this.feeders.q3bStatus.value == 1){
                
                this.bColors = 'fill-red'
                
            }
      
        } 
        if(this.selectedFeeder === 'BP'){
            if(this.feeders.qpStatus.value == 0){
                
                this.bColors = 'fill-green'
                
            }
            if(this.feeders.qpStatus.value == 1){
                
               this.bColors = 'fill-red' 
                
            }
         
        } 
  
        return this.bColors;
        
    };
    this.boardWarning = () => {
        
        this.bWarning = 'hide';
        
        if(this.selectedFeeder === 'ASG1'){
            
            if(this.feeders.q2aStatus.value == 2){
                
                this.bWarning = ''
                
            }
         
        } 
        
        if(this.selectedFeeder === 'ASG2'){
          
            if(this.feeders.q3aStatus.value == 2){
                
               this.bWarning = ''
                
            }
        
            
        }  
        if(this.selectedFeeder === 'ASG3'){
            
            if(this.feeders.q1aStatus.value == 2){
                
                this.bWarning = ''
               
            }
       
        } 
        if(this.selectedFeeder === 'COND3'){

            if(this.feeders.q2bStatus.value == 2){
                
                this.bWarning = ''
                
            }

        } 
        if(this.selectedFeeder === 'DSG1'){
         
            if(this.feeders.q1bStatus.value == 2){
                
                this.bWarning = ''
         
            }
      
        } 
        if(this.selectedFeeder === 'DSG2'){
          
            if(this.feeders.q3bStatus.value == 2){
                
                this.bWarning = ''
                
            }
               } 
        if(this.selectedFeeder === 'BP'){
       
            if(this.feeders.qpStatus.value == 2){
                
                this.bWarning = ''
            }   

        } 
  
        return this.bWarning;
        
        
    };
    this.boardPf = () => {
        
        this.bpf = '#7e8699';
        
        if(this.selectedFeeder === 'ASG1'){
            
            if(this.feeders.q2aPf.value == 1){
                
                this.bpf = 'fill-white'
                
            }
         
        } 
        
        if(this.selectedFeeder === 'ASG2'){
          
            if(this.feeders.q3aPf.value == 1){
                
                this.bpf = 'fill-white'
                
            }
        } 
        
            
        if(this.selectedFeeder === 'ASG3'){
            
            if(this.feeders.q1aPf.value ==1){
                
                this.bpf = 'fill-white'
                
            }
         
        } 
        
        if(this.selectedFeeder === 'COND3'){

            if(this.feeders.q2bPf.value == 1){
                
                this.bpf = 'fill-white'
                
            }

        } 
        if(this.selectedFeeder === 'DSG1'){
         
            if(this.feeders.q1bPf.value == 1){
                
                this.bpf = 'fill-white'
                
            }
      
        } 
        if(this.selectedFeeder === 'DSG2'){
          
            if(this.feeders.q3bPf.value == 1){
                
                this.bpf = 'fill-white'
                
            }
               } 
        if(this.selectedFeeder === 'BP'){
       
            if(this.feeders.qpPf.value == 1){
                
                this.bpf = 'fill-white'
                
            }

        } 
  
        return this.bpf;
 
    };
    this.boardLines = () => {
        
        this.bLines = 'dead';
        
        if(this.selectedFeeder === 'ASG1'){
           
            if (this.feeders.q2aVoltageLl.value >= 10 && this.feeders.q2aCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.q2aVoltageLl.value >= 10 && this.feeders.q2aCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
        
        } 
        
        if(this.selectedFeeder === 'ASG2'){
            if (this.feeders.q3aVoltageLl.value >= 10 && this.feeders.q3aCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.q3aVoltageLl.value >= 10 && this.feeders.q3aCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
     
        }  
        if(this.selectedFeeder === 'ASG3'){
            if (this.feeders.q1aVoltageLl.value >= 10 && this.feeders.q1aCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.q1aVoltageLl.value >= 10 && this.feeders.q1aCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
        } 
        if(this.selectedFeeder === 'COND3'){
            if (this.feeders.q2bVoltageLl.value >= 10 && this.feeders.q2bCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.q2bVoltageLl.value >= 10 && this.feeders.q2bCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
        } 
        if(this.selectedFeeder === 'DSG1'){
            if (this.feeders.q1bVoltageLl.value >= 10 && this.feeders.q1bCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.q1bVoltageLl.value >= 10 && this.feeders.q1bCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
        } 
        if(this.selectedFeeder === 'DSG2'){
            if (this.feeders.q3bVoltageLl.value >= 10 && this.feeders.q3bCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.q3bVoltageLl.value >= 10 && this.feeders.q3bCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
        } 
        if(this.selectedFeeder === 'BP'){
            if (this.feeders.qpVoltageLl.value >= 10 && this.feeders.qpCurrent.value == 0) {
                this.bLines = 'live';
            }
            if (this.feeders.qpVoltageLl.value >= 10 && this.feeders.qpCurrent.value > 0) {
                this.bLines = 'live line-active';
            }
        } 
  
        return this.bLines;
        
    };
    this.boardConnector = () => {
        
        let out = 'dead';
        
        if(this.selectedFeeder === 'ASG1'){
           
            if (this.feeders.q2aVoltageLl.value >= 10 ) {
                out = 'live';
        
            } 
        }
        if(this.selectedFeeder === 'ASG2'){
            if (this.feeders.q3aVoltageLl.value >= 10) {
                out = 'live';
            }
        }  
        if(this.selectedFeeder === 'ASG3'){
            if (this.feeders.q1aVoltageLl.value >= 10) {
                out = 'live';
            }
   
        } 
        if(this.selectedFeeder === 'COND3'){
            if (this.feeders.q2bVoltageLl.value >= 10) {
                out = 'live';
            }
        } 
        if(this.selectedFeeder === 'DSG1'){
            if (this.feeders.q1bVoltageLl.value >= 10) {
                out = 'live';
            }
         
        } 
        if(this.selectedFeeder === 'DSG2'){
            if (this.feeders.q3bVoltageLl.value >= 10) {
                out = 'live';
            }
     
        } 
        if(this.selectedFeeder === 'BP'){
            if (this.feeders.qpVoltageLl.value >= 10) {
                out = 'live';
            }
    
        } 
  
        return out;
    };
    this.boardCircle = () => {
        
        let out = 'fill-green';
        
        if(this.selectedFeeder === 'ASG1'){
           
            this.sideALiveStatus();
            if (this.sideALive) {
                out = 'fill-red';
            }
        }
        if(this.selectedFeeder === 'ASG2'){
            this.sideBLiveStatus();
            if (this.sideBLive) {
                out = 'fill-red';
            }
        }  
        if(this.selectedFeeder === 'ASG3'){
            this.sideALiveStatus();
            if (this.sideALive) {
                out = 'fill-red';
            }
   
        } 
        if(this.selectedFeeder === 'COND3'){
            this.sideALiveStatus();
            if (this.sideALive) {
                out = 'fill-red';
            }
        } 
        if(this.selectedFeeder === 'DSG1'){
            this.sideALiveStatus();
            if (this.sideALive) {
                out = 'fill-red';
            }
         
        } 
        if(this.selectedFeeder === 'DSG2'){
             this.sideBLiveStatus();
            if (this.sideBLive) {
                out = 'fill-red';
            }
     
        } 
        if(this.selectedFeeder === 'BP'){
             this.sideBLiveStatus();
            if (this.sideBLive) {
                out = 'fill-red';
            }
    
        } 
  
        return out;
    };
    this.boardSide = () => {
        
        let out = 'dead';
        
        if(this.selectedFeeder === 'ASG1'){
        this.sideALiveStatus();
            if (this.sideALive) {
                out = 'live';
            }
        }    
        if(this.selectedFeeder === 'ASG2'){
        this.sideBLiveStatus();
            if (this.sideBLive) {
                out = 'live';
            }
        }  
        if(this.selectedFeeder === 'ASG3'){
        this.sideALiveStatus();
            if (this.sideALive) {
                out = 'live';
            }
   
        } 
        if(this.selectedFeeder === 'COND3'){
        this.sideALiveStatus();
            if (this.sideALive) {
                out = 'live';
            }
        } 
        if(this.selectedFeeder === 'DSG1'){
        this.sideALiveStatus();
            if (this.sideALive) {
                out = 'live';
            }
         
        } 
        if(this.selectedFeeder === 'DSG2'){
        this.sideBLiveStatus();
            if (this.sideBLive) {
                out = 'live';
            }  
        } 
        if(this.selectedFeeder === 'BP'){
            if(this.feeders.busLive.value) {
                out = 'live';
            }
        } 
  
        return out
    };
    
    this.sideBLiveStatus = () => {
        this.sideBLive = false;
            
            if(this.feeders) {
                
                if (this.feeders.q24Status.value != 1 && this.feeders.q4aStatus.value != 1) { // TSGP seccionado
                    if (this.feeders.voltageT03.value >= 10 && this.feeders.qT03Status.value == 1) {
                        this.sideBLive = true;
                    }
                }
                
                if (this.feeders.q24Status.value == 1 && this.feeders.q4aStatus.value != 1) { // TSGP completo sin Empalme ATS
                    if (this.feeders.voltageT03.value >= 10 && this.feeders.qT03Status.value == 1 || (this.feeders.voltageT02.value >= 10 && (this.feeders.qT01Status.value == 1 || this.feeders.qT02Status.value == 1))) {
                        this.sideBLive = true;
                    }
                }
                if (this.feeders.q4aStatus.value == 1) { // TSGP completo empalmado con ATS
                    if (this.feeders.busLive.value) {
                        this.sideBLive = true;
                    }
                }
            } 
        }
    this.sideALiveStatus = () => {
        this.sideALive = false;
        if (this.feeders) {
                
            if (this.feeders.q24Status.value == false) { // TSGP seccionado
                if (this.feeders.voltageT02.value >= 10 && (this.feeders.qT01Status.value == true || this.feeders.qT02Status.value == true)) {
                    this.sideALive = true;
                }
            }
            if (this.feeders.q24Status.value == true && this.feeders.q4aStatus.value == false) { // TSGP completo sin Empalme ATS
                if (this.feeders.voltageT03.value >= 10 && this.feeders.qT03Status.value == true || (this.feeders.voltageT02.value >= 10 && (this.feeders.qT01Status.value == true || this.feeders.qT02Status.value == true))) {
                    this.sideALive = true;
                }
            }
            if (this.feeders.q24Status.value == true && this.feeders.q4aStatus.value == true) { // TSGP completo empalmado con ATS
                if (this.feeders.busLive.value) {
                    this.sideALive = true;
                }
            }
        }    
        
    }

   
    this.feederNames = [
        'ASG1',
        'ASG2',
        'ASG3',
        'COND3',
        'DSG1',
        'DSG2',
        'BP'
    ];
    

    this.getPoints = () => {
        maPoint
            .buildQuery()
            .ne('tags.display', null)
            .limit(1000)
            .query()
            .then((points) => {

                this.feeders = {
                   
                    q1aPf: this.filterByTags(points, {equipment:'plc', display: 'q_1a_pf'})[0],
                    q1aStatus: this.filterByTags(points, {equipment:'plc', display: 'q_1a_status'})[0],
                    q1aCurrent: this.filterByTags(points, {equipment:'q_1a', display: 'current_total_actual_1a'})[0],
                    q1aPower: this.filterByTags(points, {equipment:'q_1a', display: 'power_total_1a'})[0],
                    q1aVoltageLl: this.filterByTags(points, {equipment:'q_1a', display: 'voltage_ll_avg_1a'})[0],
                    q1aVoltageLn: this.filterByTags(points, {equipment:'q_1a', display: 'voltage_ln_avg_1a'})[0],
                    	
                    q1bPf: this.filterByTags(points, {equipment:'plc', display: 'q_1b_pf'})[0],
                    q1bStatus: this.filterByTags(points, {equipment:'plc', display: 'q_1b_status'})[0],
                    q1bCurrent: this.filterByTags(points, {equipment:'q_1b', display: 'current_total_actual_1b'})[0],
                    q1bPower: this.filterByTags(points, {equipment:'q_1b', display: 'power_total_1b'})[0],
                    q1bVoltageLl: this.filterByTags(points, {equipment:'q_1b', display: 'voltage_ll_avg_1b'})[0],
                    q1bVoltageLn: this.filterByTags(points, {equipment:'q_1b', display: 'voltage_ln_avg_1b'})[0],
                    
                    q2aPf: this.filterByTags(points, {equipment:'plc', display: 'q_2a_pf'})[0],
                    q2aStatus: this.filterByTags(points, {equipment:'plc', display: 'q_2a_status'})[0],
                    q2aCurrent: this.filterByTags(points, {equipment:'q_2a', display: 'current_total_actual_2a'})[0],
                    q2aPower: this.filterByTags(points, {equipment:'q_2a', display: 'power_total_2a'})[0],
                    q2aVoltageLl: this.filterByTags(points, {equipment:'q_2a', display: 'voltage_ll_avg_2a'})[0],
                    q2aVoltageLn: this.filterByTags(points, {equipment:'q_2a', display: 'voltage_ln_avg_2a'})[0],
                    
                    q2bPf: this.filterByTags(points, {equipment:'plc', display: 'q_2b_pf'})[0],
                    q2bStatus: this.filterByTags(points, {equipment:'plc', display: 'q_2b_status'})[0],
                    q2bCurrent: this.filterByTags(points, {equipment:'q_2b', display: 'current_total_actual_2b'})[0],
                    q2bPower: this.filterByTags(points, {equipment:'q_2b', display: 'power_total_2b'})[0],
                    q2bVoltageLl: this.filterByTags(points, {equipment:'q_2b', display: 'voltage_ll_avg_2b'})[0],
                    q2bVoltageLn: this.filterByTags(points, {equipment:'q_2b', display: 'voltage_ln_avg_2b'})[0],
                    
                    q3aPf: this.filterByTags(points, {equipment:'plc', display: 'q_3a_pf'})[0],
                    q3aStatus: this.filterByTags(points, {equipment:'plc', display: 'q_3a_status'})[0],
                    q3aCurrent: this.filterByTags(points, {equipment:'q_3a', display: 'current_total_actual_3a'})[0],
                    q3aPower: this.filterByTags(points, {equipment:'q_3a', display: 'power_total_3a'})[0],
                    q3aVoltageLl: this.filterByTags(points, {equipment:'q_3a', display: 'voltage_ll_avg_3a'})[0],
                    q3aVoltageLn: this.filterByTags(points, {equipment:'q_3a', display: 'voltage_ln_avg_3a'})[0],
                    
                    q3bPf: this.filterByTags(points, {equipment:'plc', display: 'q_3b_pf'})[0],
                    q3bStatus: this.filterByTags(points, {equipment:'plc', display: 'q_3b_status'})[0],
                    q3bCurrent: this.filterByTags(points, {equipment:'q_3b', display: 'current_total_actual_3b'})[0],
                    q3bPower: this.filterByTags(points, {equipment:'q_3b', display: 'power_total_3b'})[0],
                    q3bVoltageLl: this.filterByTags(points, {equipment:'q_3b', display: 'voltage_ll_avg_3b'})[0],
                    q3bVoltageLn: this.filterByTags(points, {equipment:'q_3b', display: 'voltage_ln_avg_3b'})[0],
                    
                    q4aPf: this.filterByTags(points, {equipment:'plc', display: 'q_4a_pf'})[0],
                    q4aStatus: this.filterByTags(points, {equipment:'plc', display: 'q_4a_status'})[0],
                    q4aCurrent: this.filterByTags(points, {equipment:'q_4a', display: 'current_total_actual_4a'})[0],
                    q4aVoltageLl: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_p'})[0],
                    q4aVoltageLn: this.filterByTags(points, {equipment:'ats', display: 'voltage_ln_avg_p'})[0],
                    
                    q4bPf: this.filterByTags(points, {equipment:'plc', display: 'q_4b_pf'})[0],
                    q4bStatus: this.filterByTags(points, {equipment:'plc', display: 'q_4b_status'})[0],
                    q4bCurrent: this.filterByTags(points, {display: 'current_total_actual_4b'})[0],
                    q4bPower: this.filterByTags(points, {equipment:'ats', display: 'power_total_4b'})[0],
                    q4bVoltageLl: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_4b'})[0],
                    q4bVoltageLn: this.filterByTags(points, {equipment:'ats', display: 'voltage_ln_avg_4b'})[0],
                    
                    q24Pf: this.filterByTags(points, {equipment:'plc', display: 'q_24_pf'})[0],
                    q24Status: this.filterByTags(points, {equipment:'plc', display: 'q_24_status'})[0],
                    
                    
                    // qpPf: this.filterByTags(points, {equipment:'ats', display: 'q_p_pf'})[0],
                    // qpStatus: this.filterByTags(points, {equipment:'ats', display: 'q_p_status'})[0],
                    qpCurrent: this.filterByTags(points, {display: 'current_total_actual_p'})[0],
                    // qpPower: this.filterByTags(points, {equipment:'ats', display: 'power_total_p'})[0],
                    qpVoltageLl: this.filterByTags(points, {equipment:'ats', display: 'voltage_ll_avg_p'})[0],
                    qpVoltageLn: this.filterByTags(points, {equipment:'ats', display: 'voltage_ln_avg_p'})[0],
                    
                   
                    qT01Status: this.filterByTags(points, {equipment:'plc', display: 'q_t01_status'})[0],
                    qT02Status: this.filterByTags(points, {equipment:'plc', display: 'q_t02_status'})[0],
                    qT03Status: this.filterByTags(points, {equipment:'plc', display: 'q_t03_status'})[0],
                    qT02Voltage: this.filterByTags(points, {equipment:'q_t02', display: 'voltage_ll_avg_t02'})[0],
                    busLive: this.filterByTags(points, {equipment:'ats', display: 'bus_live'})[0],
                    
            }; 
            console.log(this.feeders);
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
    controller: detailFeedersController,
    templateUrl: require.toUrl('./detailFeeders.html')
};

});