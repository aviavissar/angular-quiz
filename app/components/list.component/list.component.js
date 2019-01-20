class ListController {
    constructor() {
        this.score = 0;
        this.index = 0;
        this.currentAnswerIndex = 0;
    }
    onButtonClick() {
        alert();
        this.onQuestionsFinish({ number: 5 });
    }
    shuffle(arra1) {
        var ctr = arra1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    $onInit() {
        this.arr = this.questionsData.questions;
        this.arrangeData();
    }


    checkeWhatChoose() {
        if (document.getElementById('answer0').checked) {
            this.scorePoints('answer0')
        } else if (document.getElementById('answer1').checked) {
            this.scorePoints('answer1')
        }
        else if (document.getElementById('answer2').checked) {
            this.scorePoints('answer2')
        }
        else if (document.getElementById('answer3').checked) {
            this.scorePoints('answer3')
        }
    }
    scorePoints(id) {
        this.score += parseInt(document.getElementById(id).value);
    }

    arrangeData() {
       
        let currentQuestion = this.questionsData.questions[this.currentAnswerIndex];
        this.questionOptions = this.shuffle(currentQuestion.questionOptions);
        this.questionText = currentQuestion.questionText;
    }

    onAnswerChoose() {
        if($('input[name=answer]:checked').length === 0) {
            alert("You must choose an answer");
            return;
        }
        this.currentAnswerIndex++;
        if(this.currentAnswerIndex >= this.questionsData.questions.length) {
            this.doCalcu();
            this.questionsAreFinished = true;
            this.onQuestionsFinish();
            return;
        }
        this.checkeWhatChoose();
        this.arrangeData();//to move next Questions
    }

    doCalcu(){
        if(this.score>=5 && this.score<=10){
            this.resolte= this.questionsData.results[0].text;
        }
       else if(this.score>=11 && this.score<=15){
        this.resolte= this.questionsData.results[1].text;
        }
      else if(this.score>=16 && this.score<=20){
        this.resolte= this.questionsData.results[2].text;
        }
     

    }
}

angular.module('myApp').component("listComponent", {
    controller: ListController,
    templateUrl: 'components/list.component/list.component.html',
    bindings: {
        onQuestionsFinish: "&",
        questionsData: "<",
        counterTime: "<"
    }
});
