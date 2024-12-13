import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import ArticleListPage from './Pages/ArticleListPage';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundpage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
          <div id="page-body">
            <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage/>}/>
            <Route path="/articles/:articleId" element={<ArticlePage/>} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
