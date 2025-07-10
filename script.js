const bookshelf = document.querySelector(".bookshelf")

const myLibrary = [];


function Book(id,title,author,pages) {
    this.id = id
    this.author = author
    this.title = title
    this.pages = pages
    
}


function addBookToLibrary(title,author,pages) {
    
    let book = new Book(
    this.id = crypto.randomUUID(),
    this.author = author,
    this.title = title,
    this.pages = pages,)
    
    myLibrary.push(book)
    
}


console.log()


addBookToLibrary('green moutain','boby rich',122);
addBookToLibrary('watchdog','willy sams',232);


for (let i in myLibrary) {
    bookshelf.innerHTML += `<div class="book"> ${myLibrary[i].title} 
     \n  ${myLibrary[i].author}
       \n  ${myLibrary[i].pages} </div>`
}
console.log(myLibrary[1].title)