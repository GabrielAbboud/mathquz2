function addUser(){
    player1_name=document.getElementById("player1_name_input");
    player2_name=document.getElementById("player2_name_input");

    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);   

    window.location="gamePage.HTML";
}
