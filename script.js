const table = document.querySelector("table");
const title = document.querySelector("#form-title");
const author = document.querySelector("#form-author");
const pages = document.querySelector("#form-pages");
const submit = document.querySelector("#submit");
const read = document.getElementsByName("read");
const arrRead = [...read]

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
}

Book.prototype.isRead = function() {
    for(let i = 0; i < arrRead.length; i++) {
        if(arrRead[i].checked) {
            return arrRead[i].value
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function submitBook() {
    submit.addEventListener("click", (event) => {
        const book = new Book(title, author, pages);
        if(book.title === "" || book.author === "" || book.pages === "" || book.isRead() === undefined) {
            alert("Complete all fields");
            return "Complete all fields"
        }
        addBookToLibrary(book);
        console.log(myLibrary);
        console.log(myLibrary.length);
        const row = document.createElement("tr");
        table.appendChild(row);
        const tdTitle = document.createElement("td");
        row.appendChild(tdTitle);
        tdTitle.textContent = book.title;
        const tdAuthor = document.createElement("td");
        row.appendChild(tdAuthor);
        tdAuthor.textContent = book.author;
        const tdPages = document.createElement("td");
        row.appendChild(tdPages);
        tdPages.textContent = book.pages;
        const tdRead = document.createElement("td");
        row.appendChild(tdRead);
        const tdReadButton = document.createElement("button");
        tdRead.appendChild(tdReadButton);
        tdReadButton.textContent = book.isRead();
        tdReadButton.setAttribute("style", "width: 100px; height: 25px; background-color: wheat; border: 1px solid black");
        tdReadButton.addEventListener("click", () => {
            if(tdReadButton.textContent === "I have read it") {
                tdReadButton.textContent = "Not read yet"
            } else {
                tdReadButton.textContent = "I have read it"
            }
        })
        const button = document.createElement("button");
        button.setAttribute("style", "position:relative; right: -1rem; bottom: -2.25rem");
        row.appendChild(button);
        button.textContent = "Remove";
        button.addEventListener("click", () => {
            row.textContent = "";
            let indexPos = myLibrary.indexOf(book);
            console.log(indexPos);
            let removeIndexPos = myLibrary.splice(indexPos, 1);
            console.log(removeIndexPos);
            console.log(myLibrary);
            return myLibrary
        })
        event.preventDefault()
    })
}

submitBook()