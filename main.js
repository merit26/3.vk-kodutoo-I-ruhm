(function($) {   //funktsioon läheb kohe tööle (an immediately-invoked function expression)
  "use strict";
  var GameLogic = (function(){
    var instance; //üks koopia klassist, ei kordu

    function init(){  //kogu funktsionaalsus on siin sees, ka muutujad
      var question = [];
      var totalAnswers = 0;  //algväärtus
      var correctAnswers = 0;
      var startTime;
      function newQuestion(){
        startTime= Date.now();
        question[0]=Math.floor(Math.random()*10 +1);
        question[1]=Math.floor(Math.random()*10 +1);
        $('h2').text(question[0] +'*'+question[1]);
      }
      function checkAnswer(){


      }
      return {
       newQuestion: newQuestion,
       checkAnswer: checkAnswer

     };
    }

    return {
      getInstance: function(){
        if(!instance){
          instance=init();
        }
        return instance;
      }
    };
  })();

  var logic=GameLogic.getInstance();
  logic.newQuestion();
  $('form').submit(function(e){   //jQuery funktsionaalsus
     e.preventDefault(); //et ei läheks mujale edasi
     logic.checkAnswer();
     logic.newQuestion();

  });

}(window.jQuery));
