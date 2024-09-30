
import './App.css'
import MyNavBar from "./components/MyNavBar"
import DashBoard from "./components/DashBoard"
import Footer from "./components/Footer"
import {Routes, Route} from 'react-router-dom';
import BookDetails from "./components/BookDetails.jsx"
import AuthorDetails from "./components/AuthorDetails.jsx"
import BooksList from "./pages/BooksList"
import AuthorsList from "./pages/AuthorsList"





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
     </Routes> 
     

     <Footer/>
      
    </>
  )
}

export default App
