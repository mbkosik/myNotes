// WYŚWIETLANIE MODALA Z DODANIEM NOTATKI

const addModal = document.querySelector(".shadow__modal");
const addBtn = document.querySelector(".btn__add");
const cancelBtn = document.querySelector(".modal__cancel-btn");

const showModal = (e) => {
    if (e.target === addBtn) {
        addModal.classList.add("visible");
    } else if (e.target === cancelBtn || e.target === addModal) {
        removeModal();
    }
}

window.addEventListener("click", showModal);

// DODAWANIE NOTATKI

const saveBtn = document.querySelector(".modal__save-btn");
const deleteBtn = document.querySelector(".btn__delete");
const notesSection = document.querySelector(".notes");

const createNote = () => {
    const noteContent = document.getElementById("notes");
    const selectedCategory = document.getElementById("category");
    const newNote = document.createElement("div");
    const removeNoteBtn = document.createElement("button");
    let checking = checkNote(newNote, noteContent, selectedCategory);

    checkNote(newNote, noteContent, selectedCategory);
    if (checking === "stop") return;
    addNote(newNote, noteContent, removeNoteBtn);
    removeModal(noteContent, selectedCategory);
    removeThisBtn(removeNoteBtn);
}

const checkNote = (note, content, category) => {
    if (category.value === "work") {
        note.classList.add("work");  
    } else if (category.value === "grocery") {
        note.classList.add("grocery");
    } else if (category.value === "other") {
        note.classList.add("other");
    } else if (category.value === "choose-category") {
        document.querySelector(".error").textContent = "Proszę wybrać kategorię notatki";
        return "stop"; 
    } 
    if (content.value === "") {
        document.querySelector(".error").textContent = "Proszę uzupełnić treść notatki";
        return "stop"; 
    }
}

const addNote = (note, content, removeBtn) => {
    note.classList.add("note");
    note.innerHTML = `<p>${content.value}</p>`;
    removeBtn.classList.add("btn");
    removeBtn.classList.add("btn--in-note");
    removeBtn.innerHTML = `<i class="fas fa-trash-alt btn__delete-icon"></i>`;
    note.appendChild(removeBtn);
    notesSection.prepend(note);
}

// USUWANIE NOTATEK

// MODALA

const removeModal = (content, category) => {
    addModal.classList.remove("visible");
    content.value = "";
    category.value = "choose-category";
    document.querySelector(".error").textContent = "";
}

// WSZYSTKIE NA RAZ


const deleteNotes = () => {
    notesSection.innerHTML = "";
}

// POJEDYNCZE

const removeThisBtn = (inNoteBtn) => {
    inNoteBtn.addEventListener("click", () => inNoteBtn.parentNode.remove());
}

saveBtn.addEventListener("click", createNote);
deleteBtn.addEventListener("click", deleteNotes);




