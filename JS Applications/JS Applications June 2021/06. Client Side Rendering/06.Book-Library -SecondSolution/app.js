import { render } from './../node_modules/lit-html/lit-html.js';
import booksService from './services/bookService.js'
import { allBooksTemplate, allFormsTemplate, bookLibraryTemplate, formTemplate } from './templates/bookTemplates.js';

let body = document.body;

let addForm = {
    id: 'add-form',
    type: 'add',
    title: 'Add Book',
    submitText: 'Submit',
    submitHandler: createBook
};

let editForm = {
    id: 'edit-form',
    type: 'edit',
    title: 'Edit Book',
    submitText: 'Save',
    class: 'hidden',
    submitHandler: editBook,
    idValue: '',
    authorValue: '',
    titleValue: ''
};

let forms = [addForm, editForm];

let books = [];

render(bookLibraryTemplate([], forms, loadBooks, prepareEdit), body);

async function loadBooks() {
    let booksContainer = document.getElementById('books-container');
    let booksObj = await booksService.getAllBooks();
    
    books = Object.entries(booksObj).map(([key, val]) => {
        val._id = key;
        return val;
    });
    render(allBooksTemplate(books, prepareEdit), booksContainer);
}

async function createBook(e){
    e.preventDefault();
    let booksContainer = document.getElementById('books-container');
    let form = e.target;
    let formData = new FormData(form);
    let newBook = {
        author: formData.get('author'),
        title: formData.get('title')
    }

    let createResult = await booksService.createBook(newBook);
    books.push(createResult);
    render(allBooksTemplate(books, prepareEdit), booksContainer);
}

async function prepareEdit(e){
    let book = e.target.closest('.book');
    let id = book.dataset.id;
    let bookSource = await booksService.getBook(id);
    
    editForm.class = 'undefined';
    editForm.idValue = id;
    editForm.authorValue = bookSource.author;
    editForm.titleValue = bookSource.title;
    addForm.class = 'hidden';
    render(bookLibraryTemplate(books, forms, loadBooks, editBook), body);
}

async function editBook(e){
    e.preventDefault();
    let booksContainer = document.getElementById('books-container');
    let form = e.target;
    let formData = new FormData(form);
    let id = formData.get('id');
    let newBook = {
        author: formData.get('author'),
        title: formData.get('title')
    }

    let createResult = await booksService.editBook(id, newBook);

    books = books.filter(x => x._id !== id);
    books.push(createResult);
    render(allBooksTemplate(books, prepareEdit), booksContainer);
}