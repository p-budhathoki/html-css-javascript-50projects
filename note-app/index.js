// target button and store the reference to the button object in the constant variable btnEl
const btnEl = document.getElementById("btn");
// target div element that contains the textarea and button
const appEl = document.getElementById("app");

// gets all the notes from the local storage. We loop through the notes using forEach
getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

//
function createNoteEl(id, content) {
  //   console.log(id, content);

  // target the textarea by creating a new element called element using the javascript method called createElement
  const element = document.createElement("textarea");
  // add class = note, placeholder = Empty note and set the value to content inside textarea element dynamically
  element.classList.add("note");
  element.placeholder = "Empty note";
  element.value = content;

  // delete note on double click. add event listener to listen to double click which calls delete functionality
  element.addEventListener("dblclick", () => {
    const warning = confirm("Are you sure you want to delete this note?");
    // if the answer is yes then delete the note by calling deleteNote function
    if (warning) {
      deleteNote(id, element);
    }
  });
  // add event listener to update the note. the event listener listens to everything that happens inside the input element and calls the function to update the note
  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => notes.id != id);
  saveNote(notes);
  appEl.removeChild(element);
}
function updateNote(id, content) {
  // get all the notes
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}

// create an object with id and  content as keys
function addNote() {
  // call a function called getNote and store inside the notes
  const notes = getNotes();
  // create an object with random id and an empty content
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  //   console.log(noteObj);
  // create a note element based on the object noteObj
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  // after the creation of the note it needs to be inserted into the DOM before the button. insertBefore javascript method is called to insert the note before the button but inside the div element
  appEl.insertBefore(noteEl, btnEl);
  // push noteObj inside the notes using javascript push method
  notes.push(noteObj);
  // save the note inside the local storage
  saveNote(notes);
}

// stores note inside the local storage
function saveNote(notes) {
  // save using setItem. use note-app as the key and note as the value for value. the array has to be converted into string before using it as the local storage does not allow the saving of array for safety reason
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  // convert the string into arrays
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// add event listener to the button element (btnEl), the event we want to add is 'click' event. The click event is going to call the function called addNote
btnEl.addEventListener("click", addNote);
