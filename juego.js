let lista=["Lobezno","Hulk","Alien","Frankestein","Saw","Kraken"];
let player1={
vidas: 2,
nivel: 1,
name: 'jugador'
};

let player2={
};
player2.name=lista[aleatorio(6)];
images();

function aleatorio(numero){
 return Math.floor(Math.random()*numero);
}

    function images(){
if (player2.name==="Lobezno") $('.personaje2').append("<img src='images/superheroe.svg'>");
else if (player2.name==="Hulk") $('.personaje2').append("<img src='images/hulk.svg'>");
else if (player2.name==="Alien") $('.personaje2').append("<img src='images/monster.svg'>");
else if (player2.name==="Frankestein") $('.personaje2').append("<img src='images/frankenstein.svg'>");
else if (player2.name==="Saw") $('.personaje2').append("<img src='images/villian.svg'>");
else if (player2.name==="Kraken") $('.personaje2').append("<img src='images/kraken.svg'>")
}

      $(function dice(){
        $("#dice").dice();
        $("#dice, #btn_randRoll").click(function dice(){
          $("#dice").dice("roll");
        });
        $("#btn_roll").click(function dice(){
          $("#dice").dice("roll", $("#rollValue").val());
        });

        $("#btn_setSize").click(function dice(){
          $("#dice").dice("option", {diceSize:$("#dsize").val()});
        });

        $("#btn_setDuration").click(function dice(){
          $("#dice").dice("option", {duration: parseInt($("#dur").val())});
        });
      });
       $(function dice2(){
        $("#dice2").dice();
        $("#dice2, #btn_randRoll").click(function dice2(){
          $("#dice2").dice("roll");
        });
        $("#btn_roll").click(function dice2(){
          $("#dice2").dice("roll", $("#rollValue").val());
        });

        $("#btn_setSize").click(function dice2(){
          $("#dice2").dice("option", {diceSize:$("#dsize").val()});
        });

        $("#btn_setDuration").click(function dice2(){
          $("#dice2").dice("option", {duration: parseInt($("#dur").val())});
        });
      });