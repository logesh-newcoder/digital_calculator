var a=document.getElementById("inputs")
function add(val){
    a.value += val;
    console.log(a.value);
}
function equ(){
    try{
        a.value=eval(a.value);
        console.log(a.value);    
    }
    catch(error){   
        a.value="error";
        console.log(a.value);    
    }
}
function cle(){
    a.value="";
    console.log(a.value);
}
