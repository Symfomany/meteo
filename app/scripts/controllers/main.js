(function() {

    'use strict';

    angular
        .module('myApp', [])
        .controller('myCtrl', myCtrl)

    function myCtrl($scope, $log) {
        var vm = this; //scope this
        vm.nombre = 1;
        vm.increase = increase;
        vm.decrease = decrease;
        vm.classMeteo = 'wi wi-day-sunny';
        vm.classTemp = 'has-success';

        function increase() {
            vm.nombre = vm.nombre + 1;
        }

        function decrease() {
            vm.nombre--;
        }


        $scope.$watch('main.nombre', function(current, original) {
            if (isNaN(current)) {
                vm.classMeteo = "wi na";
                vm.classTemp = 'has-error';
            } else if (current < -10) {
                vm.classMeteo = "wi wi-day-windy";
                vm.classTemp = 'has-warning';
            } else if (current >= 0 && current < 10) {
                vm.classMeteo = "wi wi-day-rain-mix";
            } else if (current >= 10 && current < 20) {
                vm.classTemp = 'has-info';
                vm.classMeteo = "wi wi-day-hail";
            } else if (current >= 20 && current < 30) {
                vm.classMeteo = "wi wi-day-cloudy";
                vm.classTemp = 'has-success';
            } else {
                vm.classMeteo = "wi wi-day-sunny";
                vm.classTemp = 'has-success';
            }
            $log.info('vm.nombre was %s', original);
            $log.info('vm.nombre is now %s', current);
        });

    }



})();