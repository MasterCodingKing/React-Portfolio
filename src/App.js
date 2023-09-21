
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import MyNAv from './components/nav'
import MyHome from './components/Home'
import MyService from './components/service';
import AboutUS from './components/about.js';
import Footer from './components/footer.js';
import NotFound from './components/notPage';

function App() {
  return (
    <div className="App">
     <Router>
      <MyNAv/>
      <Routes>
        <Route path='/home' element={<MyHome/>}/>
        <Route path='/service' element={<MyService/>}/>
        <Route path='/About' element={<AboutUS/>}/>
        <Route path ='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
