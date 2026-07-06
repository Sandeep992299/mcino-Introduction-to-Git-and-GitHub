// general.js - Express Book Review Application
// This file contains the implementation for retrieving books and their details

const axios = require('axios');

// Base URL for the book service API
// Replace with your actual server URL if different
const BOOK_SERVICE_URL = 'http://localhost:5000';

/**
 * Retrieves all books from the database
 * Uses async/await with Axios to fetch data
 * 
 * @returns {Promise<Array>} - Array of all book objects
 */
async function getAllBooks() {
    try {
        const response = await axios.get(`${BOOK_SERVICE_URL}/`);
        console.log('All books retrieved successfully');
        return response.data;
    } catch (error) {
        console.error('Error retrieving all books:', error.message);
        throw error;
    }
}

/**
 * Retrieves a book by its ISBN
 * 
 * @param {string} isbn - The ISBN of the book to retrieve
 * @returns {Promise<Object>} - The book object
 */
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BOOK_SERVICE_URL}/isbn/${isbn}`);
        console.log(`Book with ISBN ${isbn} retrieved successfully`);
        return response.data;
    } catch (error) {
        console.error(`Error retrieving book with ISBN ${isbn}:`, error.message);
        throw error;
    }
}

/**
 * Retrieves all books by a specific author
 * 
 * @param {string} author - The author name to search for
 * @returns {Promise<Array>} - Array of books by the author
 */
async function getBooksByAuthor(author) {
    try {
        const encodedAuthor = encodeURIComponent(author);
        const response = await axios.get(`${BOOK_SERVICE_URL}/author/${encodedAuthor}`);
        console.log(`Books by ${author} retrieved successfully`);
        return response.data;
    } catch (error) {
        console.error(`Error retrieving books by ${author}:`, error.message);
        throw error;
    }
}

/**
 * Retrieves a book by its title
 * 
 * @param {string} title - The title of the book to retrieve
 * @returns {Promise<Object>} - The book object
 */
async function getBookByTitle(title) {
    try {
        const encodedTitle = encodeURIComponent(title);
        const response = await axios.get(`${BOOK_SERVICE_URL}/title/${encodedTitle}`);
        console.log(`Book with title "${title}" retrieved successfully`);
        return response.data;
    } catch (error) {
        console.error(`Error retrieving book with title "${title}":`, error.message);
        throw error;
    }
}

/**
 * Alternative implementation using Promise callbacks instead of async/await
 * This demonstrates both approaches as required by the assignment
 */

/**
 * Retrieves all books using Promise callbacks
 * 
 * @param {function} callback - Callback function to handle the result
 */
function getAllBooksPromise(callback) {
    axios.get(`${BOOK_SERVICE_URL}/`)
        .then(response => {
            console.log('All books retrieved successfully (Promise)');
            callback(null, response.data);
        })
        .catch(error => {
            console.error('Error retrieving all books (Promise):', error.message);
            callback(error, null);
        });
}

/**
 * Retrieves a book by ISBN using Promise callbacks
 * 
 * @param {string} isbn - The ISBN of the book to retrieve
 * @param {function} callback - Callback function to handle the result
 */
function getBookByISBNPromise(isbn, callback) {
    axios.get(`${BOOK_SERVICE_URL}/isbn/${isbn}`)
        .then(response => {
            console.log(`Book with ISBN ${isbn} retrieved successfully (Promise)`);
            callback(null, response.data);
        })
        .catch(error => {
            console.error(`Error retrieving book with ISBN ${isbn} (Promise):`, error.message);
            callback(error, null);
        });
}

/**
 * Retrieves all books by a specific author using Promise callbacks
 * 
 * @param {string} author - The author name to search for
 * @param {function} callback - Callback function to handle the result
 */
function getBooksByAuthorPromise(author, callback) {
    const encodedAuthor = encodeURIComponent(author);
    axios.get(`${BOOK_SERVICE_URL}/author/${encodedAuthor}`)
        .then(response => {
            console.log(`Books by ${author} retrieved successfully (Promise)`);
            callback(null, response.data);
        })
        .catch(error => {
            console.error(`Error retrieving books by ${author} (Promise):`, error.message);
            callback(error, null);
        });
}

/**
 * Retrieves a book by title using Promise callbacks
 * 
 * @param {string} title - The title of the book to retrieve
 * @param {function} callback - Callback function to handle the result
 */
function getBookByTitlePromise(title, callback) {
    const encodedTitle = encodeURIComponent(title);
    axios.get(`${BOOK_SERVICE_URL}/title/${encodedTitle}`)
        .then(response => {
            console.log(`Book with title "${title}" retrieved successfully (Promise)`);
            callback(null, response.data);
        })
        .catch(error => {
            console.error(`Error retrieving book with title "${title}" (Promise):`, error.message);
            callback(error, null);
        });
}

// Export all functions for use in other modules
module.exports = {
    // Async/Await versions
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBookByTitle,
    
    // Promise callback versions
    getAllBooksPromise,
    getBookByISBNPromise,
    getBooksByAuthorPromise,
    getBookByTitlePromise,
    
    // Export base URL for reference
    BOOK_SERVICE_URL
};
