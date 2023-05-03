// when player wins, the winning squares should be highlighted in some way
//have start button being "active" depending on whose turn it is
//or have a separate display for whose turn it is


var arrayClasses = [];
arrayClasses.push(document.querySelectorAll(".row-1"), document.querySelectorAll(".row-2"), document.querySelectorAll(".row-3"), document.querySelectorAll(".column-1"), document.querySelectorAll(".column-2"), document.querySelectorAll(".column-3"), document.querySelectorAll(".diagonal-1"), document.querySelectorAll(".diagonal-2") ); 
var currentTurn;


function start (side) {
    currentTurn = side;
}

function disableBtn () {
    document.getElementById("X-team").disabled = true;
    document.getElementById("O-team").disabled = true;
}


for (let a of arrayClasses) {
    for (let b of a) {
        b.onclick = function () { 

            if (b.innerHTML == "") {
    
                if (currentTurn == "X"){
                    b.innerHTML = "X";
                    currentTurn = "O";
                }
    
                else if (currentTurn == "O") {
                    b.innerHTML = "O";
                    currentTurn = "X";
                }  
                
    
            }

            for (var i = 0; i < arrayClasses.length; i++) {

                var xTally = 0;
                var oTally = 0;
                
                for (var j = 0; j < arrayClasses[i].length; j++) {


                    if (arrayClasses[i][j].innerHTML == "X") {
                        xTally += 1;
                    }

                    if (xTally == 3) {
                        setTimeout(function() { alert("X Wins!"); }, 500);
                        setTimeout(function() { location.reload(); }, 2000);
                        
                        
                    }

                    if (arrayClasses[i][j].innerHTML == "O") {
                        oTally += 1;
                    }

                    if (oTally == 3) {
                        setTimeout(function() { alert("O Wins!"); }, 500);
                        setTimeout(function() { location.reload(); }, 2000);
                    }


                }
                    
                
            }

            
            
        }

        
    }
    

    

} 

