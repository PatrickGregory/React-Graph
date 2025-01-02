import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
import TabPage from './pages/tabs/tabPage';
import MainPage from './pages/pagination/main-page';
import ProgressPage from './pages/progress/progress-page';
import SpinnerPage from './pages/spinners/spinner-page';
import TooltipPage from './pages/tooltip/tooltipPage';
import FormElement from './pages/form elements/elementPage';
import LayoutPage from './pages/form layout/layoutPage';
import ValidationPage from './pages/form validation/validationPage';
import TablePage from './pages/General Tables/TablePage';
import DataPage from './pages/Data Table/DataPage'; 
import ProfilePage from './pages/profile/profilePage';
import FaqPage from './pages/FAQ/faqPage';
import ContactPage from './pages/contact/ContactPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import BlankPage from './pages/blank/blankPage';
import FormEditor from './pages/form editor/formEditor';
import BsPage from './pages/Bootstrap/BsPage';
import RemixPage from './pages/Remix/RemixPage';
import BoxPage from './pages/Box/BoxPage';
import ChartPage from './pages/echarts/chartPage';
import ApexPage from './pages/apex/chartPage';
import ChartJsPage from './pages/chartjs/chartPage';

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
          <Route path='/tabs' element={<TabPage/>}/>
          <Route path='/pagination' element={<MainPage/>}/>
          <Route path='/progress' element={<ProgressPage/>}/>
          <Route path='/spinners' element={<SpinnerPage/>}/>
          <Route path='/tooltips' element={<TooltipPage/>}/>
          <Route path='/form_elements' element={<FormElement/>}/>
          <Route path='/form_layout' element={<LayoutPage/>}/>
          <Route path='/form_validation' element={<ValidationPage/>}/>
          <Route path='/general_table' element={<TablePage/>}/>
          <Route path='/data_table' element={<DataPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='/blank' element={<BlankPage/>}/>
          <Route path='/form_editor' element={<FormEditor/>}/>
          <Route path='/bootstrap' element={<BsPage/>}/>
          <Route path='/remix' element={<RemixPage/>}/>
          <Route path='/boxicons' element={<BoxPage/>}/>
          <Route path='/echart' element={<ChartPage/>}/>
          <Route path='/apex' element={<ApexPage/>}/>
          <Route path='/chartJs' element={<ChartJsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
