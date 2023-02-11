// get the form element, input element, unordered list
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

console.log(inputEl);
// add event listener to catch the contents of the input element
formEl.addEventListener("submit", (event) => {
  // prevent the page from refreshing when the form is submitted
  event.preventDefault();
  //   console.log(inputEl.value);
  // call the toDoList function
  toDoList();
});

function toDoList(task) {
  // get the value from the input element and store it in the newTask variable
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }
  // create a new li element to store the newTask value
  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  // set the value of newTask to the new li element
  liEl.innerText = newTask;
  // append the li element to the .list class of ul
  ulEl.appendChild(liEl);

  // clear the input element after it has been added to the list by hitting enter
  inputEl.value = "";
  // add the checkbox and delete button beside the list using a div
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fas fa-check-square">`;
  liEl.appendChild(checkBtnEl);

  // add the delete icon to the list
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(trashBtnEl);

  // add eventlistener to the list element so that it can be checked and unchecked
  checkBtnEl.addEventListener("click", () => {
    // toggle the checkbox
    liEl.classList.toggle("checked");
    // update the local storage
    updateLocalStorage();
  });

  // add eventlistener to the list element so that it can be removed by clicking the trash icon
  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    // update the local storage
    updateLocalStorage();
  });
  // update the local storage
  updateLocalStorage();
}

// updating the local storage
function updateLocalStorage() {
  // get all the li elements
  const liEls = document.querySelectorAll("li");
  // store the li elements in the variable called list
  const list = [];
  liEls.forEach((liEl) => {
    // push the elements and its contents into list
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  // convert array of list to the string using json and store in localStorage
  localStorage.setItem("list", JSON.stringify(list));
}
