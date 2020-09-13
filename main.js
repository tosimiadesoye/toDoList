let input = document.getElementById("input-task")
let addBtn = document.getElementById("add-btn")
let ol = document.querySelector("#ol-tag")


addBtn.addEventListener("click", listItems)

function listItems(event){
event.preventDefault();
//delete btn
let deleteBtn = document.createElement("span")
    deleteBtn.setAttribute("class", "delete")
let i = document.createElement("i")
    i.setAttribute("class", "far fa-trash-alt")
    deleteBtn.appendChild(i)
    //delete text when delete icon is clicked
        deleteBtn.onclick = deleteText = () => {
            ol.removeChild(li)
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
    editBtn.onclick = editText = () => {
        let text = li.firstElementChild
        let editInput = document.createElement("input")
            editInput.setAttribute("class", "editInput")
            editInput.type = "text"
            editInput.value = text.textContent 
            li.insertBefore(editInput, text) 
            li.removeChild(text)  
            li.replaceChild(saveBtn, editBtn)
            if(editBtn){
                saveBtn.className = ""
            }else {
                saveBtn.className = "save"
            }
        }

    //save btn
    /**create a new span and a save icon
 * and then append the save icon to it
 * then replace the edit icon with the saved icon 
 * and then create what that save icon does  
 */
let saveBtn = document.createElement("span")
    saveBtn.setAttribute("class", "save")
let saveI = document.createElement("i")
    saveI.setAttribute("class", "far fa-save")
    saveI.style.color = "black"       
    saveBtn.appendChild(saveI)
        saveBtn.onclick = saveText = () => {
        let text = li.firstElementChild
            saveBtn.textContent = text.value
           li.insertBefore(saveBtn, text)
            li.removeChild(text)     
        }
//check btn
let checkBtn = document.createElement("span")
    checkBtn.setAttribute("class", "check")
let thirdI = document.createElement("i")
        thirdI.setAttribute("class", "fas fa-check")
        checkBtn.appendChild(thirdI)
        //when checkIcon is clicked crossover text
        
           checkBtn.onclick = crossOver = () => {
               if(text){
                    text.style.textDecorationLine = "line-through"
              }
            }

//list
let li = document.createElement("li")
    li.setAttribute("class", "list-li")
//appending of multiple elements to list
let appendElem = [text, checkBtn,deleteBtn, editBtn, saveBtn]
    appendElem.forEach(elements => li.appendChild(elements))    
console.log(li)
    //appending of list to ol
ol.appendChild(li)

//erasing the text on the input tab 
input.value = "";
}



