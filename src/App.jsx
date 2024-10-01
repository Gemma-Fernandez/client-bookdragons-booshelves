
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




function App() {
 

  return (
   
    <>
     <MyNavBar />
     <Routes>
      <Route path={"/"} element={<DashBoard />} />
      <Route path={"/books"} element={<BooksList/>}/>
      <Route path={"/books/:bookId"} element={<BookDetails/>}/>
      <Route path={"/authors"} element={<AuthorsList/>}/>
      <Route path={"/authors/:authorId"} element={<AuthorDetails/>}/>
      <Route path={"*"} element= {<NotFound />} />
      <Route path={"/addBook"} element={<AddBook/>} />
      <Route path={"/books/:bookId/edit"} element={<EditForm />} />
     </Routes> 
     
    
     <Footer/>
      
    </>
  )
}

export default App
