let a = prompt("whats your age");
a = Number.parseInt(a)//converting a string into a number
if(a>0){
    alert("This is a valid age");
}
else if(a<9){
    alert("You are kid");
}
else if(a<18 && a>=9){
    alert("you are always kid");
}
else{
    alert("this is an invalid age");
    
}
console.log("Done")
console.log("you can drive", (a<18? "note drive" :"drive"))
