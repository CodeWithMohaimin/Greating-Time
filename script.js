//shokal 5 to 7 "Good Morning"
// dupur 13 to 18 "Good Afternoon"
// shondha 7 to 10 "Good Evining"
// function clickDate(){
//     alert("Good morner")
// } 

function greatingTime(){

    let time = new Date().getHours();
   

    if(time >= 5 && time <12){
        console.log("Goood morning")
    }else if(time >= 12 && time < 18){
        alert("Good Afternoon")
    }
    else{
        alert("Good Evening")
    }
}

