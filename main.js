if(confirm("¿Quieres jugar una TRIVIA?")){
   alert("!Vamos a Jugar!");

   var  name= prompt("Ingresa tu nombre").toUpperCase();
   console.log(name);

   var tituloId = document.getElementById("titulo");
   tituloId.textContent = "Bienvenida " + name;


   function check(){

	  var question1 = document.quiz.question1.value;
	  var question2 = document.quiz.question2.value;
	  var question3 = document.quiz.question3.value;
	  var correct = 0;

  	if (question1 == "Azul") {
		   correct++;
       }
  	if (question2 == "Verde") {
	    	correct++;
        }
	  if (question3 == "Lima") {
	    	correct++;
	      }

	  var pictures = ["GANE.gif", "MEDIA.gif", "TRISTE.gif"];
	  var messages = ["¡Excelente!", "Puedes mejorar", "¡Que mal!"];
    var answer = ["Azul" , "Verde" , "Lima"];
	  var score;

	  if (correct == 0) {
		    score = 2;
	      }

	  if (correct > 0 && correct < 3) {
	    	score = 1;
	      }

	  if (correct == 3) {
		    score = 0;
	      }

			document.getElementById("after_submit").style.visibility = "visible";
      document.getElementById("message").innerHTML = messages[score];
			document.getElementById("number_correct").innerHTML = "Tienes " + correct + " correctas.";
			document.getElementById("picture").src = pictures[score];

      document.getElementById("titulo2").innerHTML = "RESPUESTAS";
      document.getElementById("answer1").innerHTML = answer[0];
      document.getElementById("answer2").innerHTML = answer[1];
      document.getElementById("answer3").innerHTML = answer[2];
	}
	 }

	 else {
		 alert("!Adios!");
	 }
