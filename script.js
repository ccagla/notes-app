


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
    li.textContent = noteText;

    noteList.appendChild(li);
}

function saveNoteToLocalStorage(noteText) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes))
}