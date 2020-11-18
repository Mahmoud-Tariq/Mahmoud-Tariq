let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".content");
let noTaskMsg = document.querySelector(".empty")

window.onload = function () {
  theInput.focus();
};
theAddButton.onclick = function() {
  if (theInput.value==='') {
    console.log("please enter a task!");
    alert("please enter a task!");
  }
  else{
    noTaskMsg.remove();
    console.log(theInput.value);
let mainSpan = document.createElement("span");
let deleteElement = document.createElement("span");
let text = document.createTextNode(theInput.value);
let deleteText = document.createTextNode("Delete");
mainSpan.appendChild(text);
mainSpan.className = 'task-box' ;
deleteElement.appendChild(deleteText);
deleteElement.className = 'Delete';
mainSpan.appendChild(deleteElement);
tasksContainer.appendChild(mainSpan);
theInput.value = '';
theInput.focus();
}

document.addEventListener('click', function (e) {
  
  if (e.target.classList.contains ('task-box')) {
    e.target.classList.toggle("checked");
  }
   if (e.target.className == 'Delete') {
    e.target.parentNode.remove();
  }

})}