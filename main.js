let input = document.getElementById("input-task")
let addBtn = document.getElementById("add-btn")
let ol = document.querySelector("#ol-tag")


addBtn.addEventListener("click", listItems)

function listItems(){
//delete btn
let deleteBtn = document.createElement("span")
    deleteBtn.setAttribute("class", "delete")
let i = document.createElement("i")
    i.setAttribute("class", "far fa-trash-alt")
    deleteBtn.appendChild(i)
    //delete text when delete icon is clicked
        deleteBtn.onclick = deleteText = () => {
            if(li){
                li.style.display = "none"
            }else{
                li.style.display = "block"
            }
        }
//paragraph text
let text = document.createElement("p")
    text.setAttribute("class", "paragraph")
    text.textContent = input.value
//edit btn
let editBtn = document.createElement("span")
    editBtn.setAttribute("class", "edit")
let secI = document.createElement("i")
    secI.setAttribute("class", "far fa-edit")
    editBtn.appendChild(secI)
//check btn
let checkBtn = document.createElement("span")
    checkBtn.setAttribute("class", "check")
let thirdI = document.createElement("i")
        thirdI.setAttribute("class", "fas fa-check")
        checkBtn.appendChild(thirdI)
        //when checkIcon is clicked crossover text
            checkBtn.onclick = crossOver = () => {
                text.style.textDecorationLine = "line-through"
            }
//list
let li = document.createElement("li")
    li.setAttribute("class", "list-li")
//appending of multiple elements to list
let appendElem = [checkBtn, text, deleteBtn, editBtn]
    appendElem.forEach(elements => li.appendChild(elements))    
//appending of list to ol
ol.appendChild(li)

//erasing the text on the input tab 
input.value = "";
}



