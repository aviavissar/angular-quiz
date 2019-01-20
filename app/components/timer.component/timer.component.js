class TimerComponent {
    constructor($scope) {
        this.$scope = $scope;
    }
    $onInit() {
        this.timeString = "00:00:00";
        this.initTimer();
    }

    $onChanges({isQuizDone}) {
        if(isQuizDone && !!isQuizDone.currentValue) {
            this.timer.stop();
        }
    }

    initTimer() {
        this.timer = new Timer();
        this.timer.start();
        this.timer.addEventListener('secondsUpdated', () => {
            const timeValues = this.timer.getTimeValues();
            this.onTimeChanged({time: {
                seconds: timeValues.seconds,
                minutes: timeValues.minutes
            }});
            this.timeString = this.timer.getTimeValues().toString();
            this.$scope.$digest();
        });
    }
}

angular.module('myApp').component("timerComponent", {
    controller: TimerComponent,
    templateUrl: 'components/timer.component/timer.component.html',
    bindings: {
        onTimeChanged: "&",
        isQuizDone: "<"
    }
});