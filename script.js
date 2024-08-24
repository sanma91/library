const table = document.querySelector("table");

const title = document.querySelector("#form-title");
const author = document.querySelector("#form-author");
const pages = document.querySelector("#form-pages");
const submit = document.querySelector("#submit");
const myLibrary = [];
console.log(myLibrary);
console.log(myLibrary.length);

function Book(title, author, pages) {
    this.title = title
    this.author = author;
    this.pages = pages
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

submit.addEventListener("click", (event) => {
    const book = new Book(title, author, pages);
    addBookToLibrary(book);
    console.log(myLibrary);
    console.log(myLibrary.length);
    console.log(book.title.value);
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
    const button = document.createElement("button");
    row.appendChild(button)
    button.textContent = "Remove";
    button.addEventListener("click", () => {
        row.textContent = ""
    })
    event.preventDefault()
})