define([
    'angular', 
    'require', 
    './components/views/mainDashboard/mainDashboard.js',
    './components/views/detailAts/detailAts.js',
    './components/views/detailGenerators/detailGenerators.js',
    './components/views/detailFeeders/detailFeeders.js',
    './components/views/configuration/configuration.js',
    './components/basics/simpleCard/simpleCard.js',
    './components/basics/totalCard/totalCard.js',
    './components/basics/averageCard/averageCard.js',
    './components/basics/diagramSgei/diagramSgei.js',
    './components/basics/charts/charts.js',
  
], 
function(angular, require, mainDashboard, detailAts, detailGenerators, detailFeeders, configuration, simpleCard, totalCard, averageCard, diagramSgei, charts) {
'use strict';

var phatilloModule = angular.module('phatilloModule', ['maUiApp']);

phatilloModule.component('phSimpleCard', simpleCard);
phatilloModule.component('phTotalCard', totalCard);
phatilloModule.component('phAverageCard', averageCard);
phatilloModule.component('phDiagramSgei', diagramSgei);
phatilloModule.component('phCharts', charts);

phatilloModule.component('phMainDashboard', mainDashboard);
phatilloModule.component('phDetailGenerators', detailGenerators);
phatilloModule.component('phDetailAts', detailAts);
phatilloModule.component('phDetailFeeders', detailFeeders);
phatilloModule.component('phConfiguration', configuration);



phatilloModule.config(['maUiMenuProvider', function(maUiMenuProvider) {
    maUiMenuProvider.registerMenuItems([
        {
			name: 'ui.mainDashboard',
			url: '/vista-general',
			template: '<ph-main-dashboard></ph-main-dashboard>',
            menuIcon: 'home',
            menuText: 'Vista General',
            weight: 994,
			params: {
                noPadding: false,
                hideFooter: false,
                dateBar: {
                    rollupControls: true,
    
                }
            },
        },
        {
			name: 'ui.detailGenerators',
			url: '/generadores',
			template: '<ph-detail-generators></ph-detail-generators>',
            menuIcon: 'developer_board',
            menuText: 'Generadores',
            weight: 996,
			params: {
                noPadding: false,
                hideFooter: false,
                dateBar: {
                    rollupControls: true
                }
            },
        },
        {
			name: 'ui.detailAts',
			url: '/ats',
			template: '<ph-detail-ats></ph-detail-ats>',
            menuIcon: 'brightness_auto',
            menuText: 'ATS',
            weight: 997,
			params: {
                noPadding: false,
                hideFooter: false,
                dateBar: {
                    rollupControls: true
                }
            },
        },
        {
			name: 'ui.detailFeeders',
			url: '/alimentadores',
			template: '<ph-detail-feeders></ph-detail-feeders>',
            menuIcon: 'group_work',
            menuText: 'Alimentadores',
            weight: 998,
			params: {
                noPadding: false,
                hideFooter: false,
                dateBar: {
                    rollupControls: true
                }
            },
        },
        {
			name: 'ui.configuration',
			url: '/configuration',
			template: '<ph-configuration></ph-configuration>',
            menuIcon: 'settings_applications',
            menuText: 'Configuración',
            weight: 999,
			params: {
                noPadding: false,
                hideFooter: false,
                dateBar: {
                    rollupControls: true
                }
                
            },
		}
	]);
}]);

return phatilloModule;

}); 