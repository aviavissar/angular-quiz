'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quiz', {
    templateUrl: 'quiz/quiz.html',
    controller: QuizController,
    controllerAs: "$ctrl"
  });
}])

class QuizController {
  constructor(QustionsService) {
    this.myTime = 0;
    this.counterTime = {};
    this.isQuizMode = false;
    this.listIsReady = false;
    this.isQuizDone = false;
    QustionsService.getQustions().then((questions) => {
      this.questions = questions;
      this.listIsReady = true;
    })
  }

  onTimeChanged(time) {
    this.counterTime = time;
  }

  onStartTest() {
    this.isQuizMode = true; 
  }

  onQuestionsFinish() {
    this.isQuizDone = true;
  }


}