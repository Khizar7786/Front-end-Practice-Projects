let display = document.getElementById("display");
let string= " ";
let buttons = document.querySelectorAll(".button");
let buttonClicked = (e)=> {
    if(e.target.getAttribute("value")== '=' ){
        if(display.value != " "){
        display.value = eval(string);
        string='';
        }
        else{
            display.value="";
            string=" ";
        }
    }
    else if (e.target.getAttribute("value")== 'AC' || e.target.getAttribute("value")== 'DE'){
        display.value="";
        string="";
    }
    else{
        string += e.target.getAttribute("value");
        display.value =string;
    }
   console.log( e.target.getAttribute("value"))
}
buttons.forEach(element => {
element.addEventListener('click' , buttonClicked);    
});