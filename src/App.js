import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/home';
import Alerts from './pages/alert/alerts';
import AccordionPage from './pages/accordion/accordion-page';
import BadgePage from './pages/badges/badges-page';
import BreadcrumbPage from './pages/breadcrumb/breadcrumb-page';
import ButtonPage from './pages/button/button-page';
import CarouselPage from './pages/carousel/carousel-page';
import CardPage from './pages/card/card-page';
import ListPage from './pages/list group/listpage';
import ModalPage from './pages/modal/modal-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home/>}/>
          <Route path='/alert' element={<Alerts/>}/>
          <Route path='/accordion' element={<AccordionPage/>}/>
          <Route path='/badges' element={<BadgePage/>}/>
          <Route path='/breadcrumb' element={<BreadcrumbPage/>}/>
          <Route path='/buttons' element={<ButtonPage/>}/>
          <Route path='/carousel' element={<CarouselPage/>}/>
          <Route path='/cards' element={<CardPage/>}/>
          <Route path='/lists' element={<ListPage/>}/>
          <Route path='/modal' element={<ModalPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
