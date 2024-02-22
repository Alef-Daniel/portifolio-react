
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RoutesApp/>
      <Footer/>
    </BrowserRouter>
    
  )}


export default App;
