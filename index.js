/*

Author: Richard Siska

This is a final project for CIS 130


*/


'use strict';


var myHeading = document.querySelector('h1');



var ftnCall = 0;
var DKraceDistance = 0;
var DAISYraceDistance = 0;



var raceWon = false;


function refreshPage(){
    
    
    
    
    location.reload();
}


function startRace(){
    
    //Change image on start of race
    document.getElementById("stopNgo").src = "GoStation.png";
    
    
    myHeading.textContent = "Starting Race!";
    
    raceWon = false;
    
    DKraceDistance = 0;
    DAISYraceDistance = 0;
        
    document.getElementById("DK").style.left = DKraceDistance.toString()+"px";
        
    document.getElementById("DAISY").style.left = DAISYraceDistance.toString()+"px";
    
    
    
    /*call interval function*/
    setInterval(displayUpDate,500);
    
    
}


//Determin who the winner is based on pixels traversed
function isWinner(){
    
       
    if(DKraceDistance >= 1100 || DAISYraceDistance >= 1100)
    {
        
        //Change image as someone has won the race
        document.getElementById("stopNgo").src = "StopandGoStationOtherStop.png";
        
        if(DKraceDistance >= 1100)
        {
            DKraceDistance =1110;
            document.getElementById("DK").style.left = DKraceDistance.toString()+"px";
            
            //Change heading 
            myHeading.textContent ="DK has won!";
            
            //Disply who won
            alert("DK has won!");
            
            
            raceWon = true;
           
        }
        if(DAISYraceDistance >=1100)
        {
        
            DAISYraceDistance = 1110;
            document.getElementById("DAISY").style.left = DAISYraceDistance.toString()+"px";
            
            //Change text
            myHeading.textContent ="Daisy has won!";
            //Display who won
            alert("Daisy has won!");
            
            
            
            raceWon = true;
               
        }
        
    }
      
}

function displayUpDate(){
    
    ftnCall+=1;
    
    
    //Check if race was won by anyone before processing moves
    
    if(raceWon === false)
    {
        DKraceDistance+= Math.floor((Math.random() * 50) + 1);; 
        
        document.getElementById("DK").style.left = DKraceDistance.toString()+"px";
        
       
        DAISYraceDistance+= Math.floor((Math.random() * 50) + 1);;
    
        
        document.getElementById("DK").style.left = DKraceDistance.toString()+"px";
        
 
        document.getElementById("DAISY").style.left = DAISYraceDistance.toString()+"px";
        
        //Check if there is a winner after every turn
        isWinner();
    
        
    
    
    }else{
        
        
        
        //Reset the once there is a winner
        refreshPage();
            
        
               
    }//End of else

    
    
}

//Once cliked the race will be triggered to begin
document.getElementById("stopNgo").onclick = startRace;



