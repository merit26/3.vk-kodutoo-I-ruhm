(function($) {   //funktsioon läheb kohe tööle (an immediately-invoked function expression)
  "use strict";
  var GameLogic = (function(){
    var instance; //üks koopia klassist, ei kordu

    function init(){  //kogu funktsionaalsus on siin sees
      var kamarajura = 1;
      var hidden = 12;  //peidetud muutuja


     return {
       general: kamarajura
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

  var copy1 = GameLogic.getInstance();
  console.log(copy1.general);  //selle saame kätte
  console.log(copy1.hidden);  // seda ei saa kätte
  copy1.general=10;
  var copy2 = GameLogic.getInstance();
  console.log(copy2.general);
  copy2.general = 20;
  console.log(copy1.general);
}(window.jQuery));
