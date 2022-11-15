//clear 
document.querySelector("#clear").addEventListener("click",()=>
{
    if(!document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "";
        document.getElementById("message").style.visibility = "visible";
        document.querySelector("#message").innerHTML = "INPUTS CLEARED";
        document.getElementById("message").style.color="#29ab87";
    }

}
)
var flag = true;
//one click
document.querySelector("#one").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "1";

    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "1";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "1";
        flag= true;
    }
});
//two click
document.querySelector("#two").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "2";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "2";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "2";
        flag= true;
    }
});
//three click
document.querySelector("#three").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "3";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "3";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "3";
        flag= true;
    }
});
//three click
document.querySelector("#four").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "4";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "4";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "4";
        flag= true;
    }
   
});
//three click
document.querySelector("#five").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "5";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "5";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "5";
        flag= true;
    }
});
//three click
document.querySelector("#six").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "6";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "6";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "6";
        flag= true;
    }
});
//three click
document.querySelector("#seven").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "7";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "7";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "7";
        flag= true;
    }
});
//three click
document.querySelector("#eight").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "8";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "8";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "8";
        flag= true;
    }
});
//three click
document.querySelector("#nine").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "9";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "9";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "9";
        flag= true;
    }
});
document.querySelector("#zero").addEventListener("click",()=>
{
    if(document.querySelector("#inputs").value == ""){
        document.querySelector("#inputs").value = "0";
    }else{
        document.querySelector("#inputs").value = document.querySelector("#inputs").value + "0";
    }
    if(flag==false){
        document.querySelector("#inputs").value = "0";
        flag= true;
    }
});
document.querySelector("#equal").addEventListener("click",()=>
{
    var outter = eval(forms.inputs.value);
    if (outter == "Infinity") {
        flag = false;
        document.forms.inputs.value = "Error !";
        document.getElementById("message").style.visibility = "visible";
        document.querySelector("#message").innerHTML = "Your input is NOT valid !";
        document.getElementById("message").style.color="#dc143c ";
    }else{
        if(eval(forms.inputs.value) == undefined){
            document.forms.inputs.value = "";
            document.getElementById("message").style.visibility = "visible";
            document.querySelector("#message").innerHTML = "No inputs !";
            document.getElementById("message").style.color="#dc143c ";
        }
        else{
            document.forms.inputs.value = eval(forms.inputs.value);
            flag = true;
        }
    }
});
//three click

document.querySelector("#dot").addEventListener("click",()=>
{   

if(document.querySelector("#inputs").value == ""){
    document.querySelector("#inputs").value = "0.";
}else{
    document.querySelector("#inputs").value = document.querySelector("#inputs").value + ".";
}
if(flag==false){
    document.querySelector("#inputs").value = ".";
    flag= true;
}
counter++;

});
document.getElementById('inputs').onclick = reset;
document.getElementById('one').onclick = reset;
document.getElementById('two').onclick = reset;
document.getElementById('three').onclick = reset;
document.getElementById('four').onclick = reset;
document.getElementById('five').onclick = reset;
document.getElementById('six').onclick = reset;
document.getElementById('seven').onclick = reset;
document.getElementById('eight').onclick = reset;
document.getElementById('nine').onclick = reset;
document.getElementById('zero').onclick = reset;

function reset() {
    document.getElementById("message").style.visibility = "hidden";
}


