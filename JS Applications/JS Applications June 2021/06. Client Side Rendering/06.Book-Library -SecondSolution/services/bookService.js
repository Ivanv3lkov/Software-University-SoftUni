import { jsonRequest } from '../helpers/jsonRequest.js';

let baseUrl = 'http://localhost:3030'; 

async function getAllBooks(){
    let url = baseUrl + '/jsonstore/collections/books';
    let books = await jsonRequest(url);
    return books;
}

async function getBook(id){
    let url = baseUrl + `/jsonstore/collections/books/${id}`;
    let book = await jsonRequest(url);
    return book;
}

async function createBook(book){
    let url = baseUrl + '/jsonstore/collections/books';
    let createdBook = await jsonRequest(url, 'Post', book);
    return createdBook;
}

async function editBook(id, book){
    let url = baseUrl + `/jsonstore/collections/books/${id}`;
    let editedBook = await jsonRequest(url, 'Put', book);
    return editedBook;
}

async function deleteBook(id){
    let url = baseUrl + `/jsonstore/collections/books/${id}`;
    let deleteResult = await jsonRequest(url, 'Delete');
    return deleteResult;
}

let booksService = {
    getAllBooks,
    getBook,
    createBook,
    editBook,
    deleteBook
}

export default booksService;
