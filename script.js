const table = document.querySelector("table");
const title = document.querySelector("#form-title");
const author = document.querySelector("#form-author");
const pages = document.querySelector("#form-pages");
const submit = document.querySelector("#submit");
const read = document.getElementsByName("read");
const arrRead = [...read]

const myLibrary = [];
console.log(myLibrary);
console.log(myLibrary.length);

function Book(title, author, pages) {
    this.title = title
    this.author = author;
    this.pages = pages;
    this.isRead = function() {
            for(let i = 0; i < arrRead.length; i++) {
            if(arrRead[i].checked) {
                return arrRead[i].value
            }
        }
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

let indexNumber = 0;

submit.addEventListener("click", (event) => {
    const book = new Book(title, author, pages);
    if(book.title.value === "" || book.author.value === "" || book.pages.value === "") {
        alert("Complete all fields");
        return "Complete all fields"
    }-
    addBookToLibrary(book);
    console.log(myLibrary);
    console.log(myLibrary.length);
    const row = document.createElement("tr");
    table.appendChild(row);
    const tdTitle = document.createElement("td");
    row.appendChild(tdTitle);
    tdTitle.textContent = book.title.value;
    const tdAuthor = document.createElement("td");
    row.appendChild(tdAuthor);
    tdAuthor.textContent = book.author.value;
    const tdPages = document.createElement("td");
    row.appendChild(tdPages);
    tdPages.textContent = book.pages.value;
    const tdRead = document.createElement("td");
    row.appendChild(tdRead);
    const tdReadButton = document.createElement("button");
    tdRead.appendChild(tdReadButton);
    tdReadButton.textContent = book.isRead();
    tdReadButton.setAttribute("style", "height: 50%; width; 50%; background-color: wheat; border: 1px solid black");
    const button = document.createElement("button");
    button.setAttribute("style", "position:relative; right: -1rem; bottom: -2.25rem");
    button.dataset.indexNumber = ++indexNumber;
    row.appendChild(button);
    button.textContent = "Remove";
    button.addEventListener("click", () => {
        row.textContent = "";
        const index = myLibrary.indexOf(button.dataset.indexNumber);
        const removeBook = myLibrary.splice(index, 1);
        return removeBook
    })
    event.preventDefault()
})