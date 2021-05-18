player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;
function send(){
    if(document.getElementById("word").value == ""){
        window.alert("Try writing a word with 5+ letters in that question box");
    }
    else{


get_word=document.getElementById("word").value;
//tolowercase function used to convert string into the lower case
word=get_word.toLowerCase();
console.log("word in lowercase is = "+word);
//charAt function used to get character at specificed index position .
//refer w3school website for these functions
charat1=word.charAt(1);
console.log(charat1);
middlecharacter_index=Math.floor(word.length/2);
charat2=word.charAt(middlecharacter_index);
console.log(charat2);
length_minus1=word.length-1;
charat3=word.charAt(length_minus1);
console.log(charat3);
//replace function is used to replace the character with the new character.
remove_charat1=word.replace(charat1,"_");
console.log(remove_charat1);
remove_charat2=remove_charat1.replace(charat2,"_");
console.log(remove_charat2);
remove_charat3=remove_charat2.replace(charat3,"_");
console.log(remove_charat3);
//create a dynamic html code to display question,inputbox,button.
question_word="<h4 id='word_display'>Q."+remove_charat3+"</h4>";
input_box="<br> Answer: <input type='text' id='check_box' >";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
}
function check(){
    get_answer=document.getElementById("check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lowercase is " + answer);
    if(answer == word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        { player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;}
    }
    else{
        window.alert("OOPS!!!! you answered wrong, Better Luck Next time");
    }
if(question_turn=="player1"){
question_turn="player2";
document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
}
else{
  
  question_turn="player1";
  document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
}

if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
    }
    else{
      
      answer_turn="player1";
      document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
    }
    document.getElementById("output").innerHTML="";   
}
