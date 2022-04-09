const screen=document.querySelector('.screen');
let a1=0;
let a2=0;
let temp = false;
let prevbutton;
function inputButton(val){
    if(!(isNaN(parseInt(val)))){
    if(temp==false){
        if(prevbutton=="="){a1=0;}
        a1=(a1*10)+parseInt(val);
        screen.innerText=a1;
    }
    else{
     a2=(a2*10)+parseInt(val);
     screen.innerText=a2;
    }
    }
    else if(val=="C"){
    if(temp==false){
        a1=0;
    screen.innerText=a1;
}
    else{
        a2=0;
     screen.innerText=a2;
    }
   }
    else if(val=="←"){
    if(temp==false){
        a1=parseInt(a1/10);  
    screen.innerText=a1;
    }
    else{
         a2=parseInt(a2/10);     
    screen.innerText=a2;
    }
    }
    else if(val=="="){
    if(temp==false){}
    else{
        if(prevbutton=="+"){
            screen.innerText=a1+a2;
            a1=a1+a2;
        }
        else if(prevbutton=="-"){
            screen.innerText=a1-a2;
            a1=a1-a2;
        }
        else if(prevbutton=="*"){
            screen.innerText=a1*a2;
            a1=a1*a2;
        }
        else if(prevbutton=="÷"){
            screen.innerText=a1/a2;
            a1=parseInt(a1/a2);
        }
        temp=false;
        a2=0;
        prevbutton="=";
    }
    }
    
    else {
        temp=true;
        prevbutton=val;
        screen.innerText=a1+val;
        }
}
function start(){
document.querySelector('.buttons').
addEventListener('click',function(event){
    inputButton(event.target.innerText);
});
}
start();