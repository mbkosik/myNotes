// WYŚWIETLANIE MODALA Z DODANIEM NOTATKI

const addModal = document.querySelector(".shadow__modal");
const addBtn = document.querySelector(".btn__add");
const cancelBtn = document.querySelector(".modal__cancel-btn");

const showModal = (e) => {
    if (e.target === addBtn) {
        addModal.classList.add("visible");
    } else if (e.target === cancelBtn || e.target === addModal) {
        addModal.classList.remove("visible");
    }
}

window.addEventListener("click", showModal);

// DODAWANIE NOTATKI

const selectedCategory = document.getElementById("category");
const noteContent = document.getElementById("notes");
const saveBtn = document.querySelector(".modal__save-btn");
const notesSection = document.querySelector(".notes");

const addNote = () => {
    const newNote = document.createElement("div");
    if (selectedCategory.value === "work") {
        newNote.classList.add("work");
    } else if (selectedCategory.value === "grocery") {
        newNote.classList.add("grocery");
    } else if (selectedCategory.value === "other") {
        newNote.classList.add("other");
    } else if (selectedCategory.value === "choose-category") {
        document.querySelector(".error").textContent = "Proszę wybrać kategorię notatki";
        return; 
    } 
    newNote.classList.add("note");
    newNote.innerHTML = `<p>${noteContent.value}</p>`;
    notesSection.prepend(newNote);
    addModal.classList.remove("visible");
    noteContent.value = "";
    selectedCategory.value = "choose-category";
}

saveBtn.addEventListener("click", addNote);

// USUWANIE NOTATEK

const deleteBtn = document.querySelector(".btn__delete");

const deleteNotes = () => {
    notesSection.innerHTML = "";
}

deleteBtn.addEventListener("click", deleteNotes);


