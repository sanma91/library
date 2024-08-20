const body = document.querySelector("body");
const table = document.querySelector("table");
const library = document.querySelector("#showLibrary");
const addBook = document.querySelector("#addBook");
const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const lotr = new Book("The Lord of the Rings", "John Ronald Reuel Tolkien", "1200");
const hp = new Book("Harry Potter", "Joanne Rowling", "400");
addBookToLibrary(lotr);
addBookToLibrary(hp);

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement("tr");
        table.appendChild(row);
        const tdTitle = document.createElement("td");
        row.appendChild(tdTitle);
        tdTitle.textContent = myLibrary[i].title;
        const tdAuthor = document.createElement("td");
        row.appendChild(tdAuthor);
        tdAuthor.textContent = myLibrary[i].author;
        const tdPages = document.createElement("td");
        row.appendChild(tdPages);
        tdPages.textContent = myLibrary[i].pages;
        const button = document.createElement("button");
        button.textContent = "Remove";
        row.appendChild(button)
        button.addEventListener("click", () => {
            row.textContent = ""
        })
    }
}

function showLibrary() {
    library.addEventListener("click", () => {
        displayLibrary()
    })
}
showLibrary()

function newBook() {

}