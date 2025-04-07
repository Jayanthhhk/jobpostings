import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './components/Jobs';
import News from './components/News';
import LandingPage from './pages/LandingPage'
import Home from  './components/Home'
import Resume from './components/Resume';



import Internships from './components/Internships'
function App() {

  return (
    <>
     
    
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/internships' element={<Internships/>}/>
{/*       <Route path='/news' element={<News/>}/> */}
      <Route path='/home' element={<Home/>}/>



    </Routes>

  
    <LandingPage/>
    

    </>
  )
}

export default App
