const bookshelf = document.querySelector(".bookshelf");
const addBookButton = document.querySelector('.addBook');
const dialog = document.querySelector('.dialog')
const submitButton = document.querySelector('.submitFormButton')
const cancelButton = document.querySelector('.cancelButton')
const bookTitleInput = document.querySelector(".bookTitleInput")
const bookAuthorInput = document.querySelector(".bookAuthorInput")
const bookPagesInput = document.querySelector(".bookPagesInput")
const bookReadInput = document.querySelector(".bookReadInput")




const myLibrary = [];


function Book(id,title,author,pages,read) {
    this.id = id
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    
}


function addBookToLibrary(author,title,pages,read) {
    
    let book = new Book(crypto.randomUUID(),author,title,pages,read,)
    myLibrary.push(book)
    
}





addBookToLibrary('The Red Book','Carl Gustav Jung',400,false);
addBookToLibrary('Sun and Steel','Yukio Mishima',140,false);
addBookToLibrary('Crime and Punishment',' Fyodor Dostoevsky',550,false);
addBookToLibrary('Metamorphosis','Franz Kafka',100,true);
addBookToLibrary('The Stranger','Albert Camus',160,true);











function renderBooks() {
    for (let i in myLibrary) {
    bookshelf.innerHTML += `<div class="book" data-id="${myLibrary[i].id}">
    <div class="title">
        <p class="titleText">
        ${myLibrary[i].title} </p>
    </div>
     <div class="author">
         <p class="authorText"> ${myLibrary[i].author}</p>
     </div>
    <div class="pages">
        <div class="bookButtons">
            <button class="readButton">${myLibrary.at(i).read  ? "Unread" : "Read"}</button>
            <button class="removeButton">Remove</button>
        </div>
        <p class="pagesText">pages: ${myLibrary.at(i).pages} ${myLibrary.at(i).read ? " ✔" : ""} </p> 
    </div>
    </div>`
}
}


function renderNewBooks() {

    bookshelf.innerHTML += `<div class="book" data-id="${myLibrary.at(-1).id}">
    <div class="title">
        <p class="titleText">${myLibrary.at(-1).title}</p>
    </div>
     <div class="author">
         <p class="authorText"> ${myLibrary.at(-1).author}</p>
     </div>
    <div class="pages">
        <div class="bookButtons">
            <button class="readButton">${myLibrary.at(-1).read ? "Unread" : "Read"}</button>
            <button class="removeButton">Remove</button>
        </div>
        <p class="pagesText">pages: ${myLibrary.at(-1).pages} ${myLibrary.at(-1).read ? " ✔" : ""}  </p> 
    </div>
    </div>`
}



function findBook(id,x) {
    return x.findIndex(e => e.id === id)
}


function closeDialog() {
    cancelButton.addEventListener('click', (e) => {
    dialog.close()
})
}


function openDialog() {
    addBookButton.addEventListener('click', (e) => {
    dialog.showModal()
})
}




function hoverOverBook() {  
const elemBook = document.querySelectorAll('.book')


elemBook.forEach(book => {

 const readButton = book.querySelector('.readButton')
 const removeButton = book.querySelector('.removeButton')



    book.addEventListener('mouseover', (e) => {
        readButton.classList.add('hoverButton')
        removeButton.classList.add('hoverButton')
    })

    book.addEventListener('mouseout', (e) => {
        readButton.classList.remove('hoverButton')
         removeButton.classList.remove('hoverButton')
    })


});
}


function deleteBook() {
    const elemBook = document.querySelectorAll('.book')


elemBook.forEach(book => {
 const removeButton = book.querySelector('.removeButton')

    removeButton.addEventListener('click', (e) => {
            let bookIndex = findBook(book.dataset.id,myLibrary)
            myLibrary.splice(bookIndex,0)
            console.log(myLibrary)
            console.log(myLibrary.splice(bookIndex,1))
            book.remove();

    })
});

}


function checkBookRead() {
    const elemBook = document.querySelectorAll('.book')
    

elemBook.forEach(book => {

 const readButton = book.querySelector('.readButton')
 const bookTitle = book.querySelector('.titleText')
 const bookPages = book.querySelector('.pagesText')

    readButton.addEventListener('click', (e) => {
        console.log('działa')

            
            console.log(book.dataset.id)
            let bookIndex = findBook(book.dataset.id,myLibrary)
          
            console.log(bookIndex)
            console.log(myLibrary)
           

            if(bookIndex !== -1) {
                myLibrary[bookIndex].read =  !myLibrary[bookIndex].read

                 readButton.textContent = myLibrary[bookIndex].read ? "Unread" : "Read";
            bookPages.innerText = `Pages: ${myLibrary[bookIndex].pages}${myLibrary[bookIndex].read ? " ✔" : ""}`;
            }
    
        
    })
});
}






function addNewBook() {

    submitButton.addEventListener('click', (e) => {
        addBookToLibrary(bookTitleInput.value,bookAuthorInput.value,Number(bookPagesInput.value),bookReadInput.checked);
        
        console.log(myLibrary)
         renderNewBooks()
         bookTitleInput.value = ''
         bookAuthorInput.value = ''
         bookPagesInput.value = ''
         bookReadInput.checked = false
         dialog.close()
         hoverOverBook()
            deleteBook()
         checkBookRead()
         

    })
}














function main() {
    openDialog()
    closeDialog()
    addNewBook()
    renderBooks()
    hoverOverBook()
    deleteBook()
    checkBookRead()
}


main()

