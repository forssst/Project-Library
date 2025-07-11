const bookshelf = document.querySelector(".bookshelf");
const addBookButton = document.querySelector('.addBook');
const dialog = document.querySelector('.dialog')

const myLibrary = [];


function Book(id,title,author,pages) {
    this.id = id
    this.author = author
    this.title = title
    this.pages = pages
    
}


function addBookToLibrary(author,title,pages) {
    
    let book = new Book(
    this.id = crypto.randomUUID(),
    this.author = author,
    this.title = title,
    this.pages = pages,)
    
    myLibrary.push(book)
    
}





addBookToLibrary('The Red Book','Carl Gustav Jung',400);
addBookToLibrary('Sun and Steel','Yukio Mishima',140);
addBookToLibrary('Crime and Punishment',' Fyodor Dostoevsky',550);
addBookToLibrary('Metamorphosis','Franz Kafka',100);
addBookToLibrary('The Stranger','Albert Camus',160);









for (let i in myLibrary) {
    bookshelf.innerHTML += `<div class="book">
    <div class="title">
        <p class="titleText">
        ${myLibrary[i].title} </p>
    </div>
     <div class="author">
         <p class="authorText"> ${myLibrary[i].author}</p>
     </div>
    <div class="pages">
        <p class="pagesText">pages: ${myLibrary[i].pages} </p> 
    </div>
    </div>`
}



addBookButton.addEventListener('click', (e) => {
    dialog.showModal()
})