
import './App.css'
import MyNavBar from "./components/MyNavBar"
import DashBoard from "./components/DashBoard"
import Footer from "./components/Footer"
import {Routes, Route} from 'react-router-dom';
import BookDetails from "./components/BookDetails.jsx"
import AuthorDetails from "./components/AuthorDetails.jsx"
import BooksList from "./pages/BooksList"
import AuthorsList from "./pages/AuthorsList"
import NotFound from "./pages/NotFound"
import AddBook from "./pages/AddBook"
import EditForm from "./pages/EditForm.jsx"
import SearchBarResults from './components/SearchBarResults.jsx';
import { useState } from 'react';




function App() {
 
const [searchValue, setSearchValue] = useState("")

  return (
   
    <>
     <MyNavBar searchValue={searchValue} setSearchValue={setSearchValue}/>
     <Routes>
      <Route path={"/"} element={<DashBoard />} />
      <Route path={"/books"} element={<BooksList/>}/>
      <Route path={"/books/:bookId"} element={<BookDetails/>}/>
      <Route path={"/authors"} element={<AuthorsList/>}/>
      <Route path={"/authors/:authorId"} element={<AuthorDetails/>}/>
      <Route path={"*"} element= {<NotFound />} />
      <Route path={"/addBook"} element={<AddBook/>} />
      <Route path={"/books/:bookId"} element={<EditForm />} />
      <Route path={"/books/results"} element={<SearchBarResults searchValue={searchValue}/>}/>
     </Routes> 
     
    
     <Footer/>
      
    </>
  )
}

export default App
