import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navigation from './components/navigation';
// import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/home';
import SiderMenu from './home/sider-menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home/>}/>
          <Route path='/test' element={<SiderMenu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
