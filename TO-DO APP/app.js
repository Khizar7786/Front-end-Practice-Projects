
let tasklist = document.getElementById("task-list");
let inputfield = document.getElementById("input");
let addButton= document.getElementById("add-button");
let error = document.getElementById("error")
let editButton= document.getElementsByClassName("edit");
let deleteButton= document.getElementById("delete");
let taskDescription;
let editButtonclicked=false;
let targetEdit;

function edit(e){
    let newdes;
    newdes=prompt("Edit the task", e.target.parentElement.parentElement.innerText) 
    if(newdes=="" || newdes == undefined){
        e.target.parentElement.parentElement.remove();
    }
    else{
        e.target.parentElement.parentElement.firstChild.innerText= newdes;
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.parentElement);
    }
}
function edit(e){
    if(editButtonclicked==false){
        targetEdit= e.target.parentElement.parentElement.firstChild;
        // console.log(targetEdit);
        editButtonclicked=true;
        let oldDes= e.target.parentElement.parentElement.firstChild.innerText;
        inputfield.value=oldDes;
        inputfield.focus();
        addButton.innerText= "UPDATE";
    }
    else{
        targetEdit.innerText=inputfield.value;
        // console.log(inputfield.value);
        editButtonclicked=false;
        targetEdit=undefined;
        addButton.innerText="ADD";
        inputfield.value="";
        taskDescription="";
        console.log(taskDescription);
    }
}
function DEL(e){
    e.target.parentElement.parentElement.remove();
}
// editButton.addEventListener('click', edit);
//event that captures the input of the user
inputfield.addEventListener('input', (function(){
    taskDescription=this.value;
}))

//event to clear the input field when new task added
addButton.addEventListener('click', (function(){
    if(editButtonclicked==false){
        inputfield.value="";
    }
}))
//event that adds new task  
addButton.addEventListener('click', addTask);   
function addTask(){
if (editButtonclicked===false) {
        if(taskDescription==='' || taskDescription==undefined){
            error.style.display="block"
        }
        else{
            error.style.display="none";    
            let newTask = document.createElement('li');
            let para=document.createElement('p');
            para.innerText=taskDescription;
            newTask.appendChild(para);
            let bt1 = editButton[0].cloneNode(true);
            let bt2 = deleteButton.cloneNode(true);
            bt1.addEventListener("click", edit);
            bt2.addEventListener('click',DEL);
            newTask.appendChild(bt1);
            newTask.appendChild(bt2);
            tasklist.appendChild(newTask);
            taskDescription='';
        }
}
else{
    edit();
}
}