# BookDragon's Bookshelves
<img src="./src/images/dragon.png" alt="logo" width="200px" height="auto">

## [See the App!](https://bookdragons-bookshelves.netlify.app/)


## Description

**BookDragon's Bookshelves** is a web app for managing books and authors. Users can add new books, leave reviews, and search for authors or books.

#### [Client Repo here](https://github.com/NuriaSoley/client-bookdragons-booshelves)
#### [Server Repo here](https://github.com/Gemma-Fernandez/bookdragons-bookshelves/tree/master)

## Technologies, Libraries & APIs used

- HTML
- CSS
- JavaScript (ES6+)
- React
- React Router
- Axios
- Vite
- Bootstrap

## Backlog Functionalities

- User authentication system (login, signup, logout)
- Personalized recommendations based on reviews.
- Dark mode UI toggle.

# Client Structure

## User Stories

- **404** - As a user, I want to see a custom 404 page when I navigate to a non-existent page.
- **500** - As a user, I want to see a custom error page for server-side issues.
- **homepage** - As a user, I want to access the homepage to learn what the app offers and log in or sign up.
- **books list** - As a user, I want to browse through a list of books available in the app.
- **authors list** - As a user, I want to explore all the authors listed in the app.
- **book details** - As a user, I want to see detailed information about a specific book.
- **author details** - As a user, I want to view detailed information about a specific author.
- **add book** - As a user, I want to add new books to the platform.
- **add review** - As a user, I want to leave reviews for the books I’ve read.
- **edit author** - As an admin, I want to edit details of authors already in the system.
- **edit book** - As an admin, I want to update book details in the app.
- **search books** - As a user, I want to search for books by title, author, or genre so that I can quickly find what interests me.

## Client Routes

## React Router Routes (React App)

| Path                          | Page              | Components          | Behavior                                                       |
| --------------------          | ----------------- | ------------------- | ------------------------------------------------------------   |
| `/`                           | Dashboard         |                     | Home page with a list of books and login/signup options        |
| `/authors`                    | AuthorsList       | AuthorCard          | Displays all authors in the system                                              |
| `/authors/:authorId`          | AuthorDetails     |                     | Displays details for a specific author                          |
| `/books`                      | BooksList         | BookCard            | Shows a list of all available books                                               |
| `/books/:bookId`              | BookDetails       |                     | Displays details for a specific book                                                |
| `/addbook`                    | AddBook           |                     | Form to add a new book                                                |
| `/books/:bookid/editBook`     | EditBook          | EditForm            | Form to edit a specific book                                                |
| `/reviews`                    | AddReview         |                     | Form to add a new review for a specific book                                       |
| `/authors/:bookId/editAuthor` | EditAuthor        | EditForm            | Form to edit author content                         
| `/not-found`                  | NotFound          |                     | 404 Page for non-existent routes                                              |

## Other Components

- **Navbar**: Main navigation bar with links to different sections
- **Footer**: Always visible at the bottom of the page

## Links

### Collaborators

- Gemma Fernández (https://github.com/Gemma-Fernandez)
- Núria Soley (https://github.com/NuriaSoley)

### Project

- [Repository Link Client](https://github.com/NuriaSoley/client-bookdragons-booshelves)
- [Repository Link Server](https://github.com/Gemma-Fernandez/bookdragons-bookshelves/tree/master)
- [Deploy Link](https://bookdragons-bookshelves.netlify.app/)

### Slides

- [Slides Link](www.your-slides-url-here.com)
