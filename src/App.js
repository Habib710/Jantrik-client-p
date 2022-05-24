
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Error404 from './Components/404error/Error404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';



function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={
        <Login>
      </Login>
        }>
        </Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>

     
    </div>
  );
}

export default App;
