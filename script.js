


const form = document.getElementById("note-form")
const input = document.getElementById("note-input");
const noteList = document.getElementById("note-list");


form.addEventListener("submit", function(e){
    e.preventDefault();
    const noteText = input.value.trim();

    if (noteText === "") {
        alert("Lütfen bir not girin.");
        return;
        
    }

    addNoteToDom(noteText);
    saveNoteToLocalStorage(noteText);
    input.value = "";   
});


function addNoteToDom(noteText) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = noteText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        deleteNote(noteText, li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn)
    noteList.appendChild(li);
}

function deleteNote(noteText,li) {
    li.remove();

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note !== noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

}

function saveNoteToLocalStorage(noteText) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes))
}

function loadNotesFromLocalStorage() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach(note => {
        addNoteToDom(note);
    });
}

loadNotesFromLocalStorage();
