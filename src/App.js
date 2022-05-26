import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Error404 from './Components/404error/Error404'
import Blog from './Components/Blogs/Blog'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Purchase from './Components/Purchase/Purchase'
import Requeir from './RequirAuth/Requeir'
import Portfolio from './Components/Portfolio/Portfolio'
import Orders from './Components/Orders/Orders'
import Myreviews from './Components/Myreviews/Myreviews'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="purchase/:id"
          element={
            <Requeir>
              <Purchase></Purchase>
            </Requeir>
          }
        ></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>

          <Route index element={<Orders></Orders>}></Route>
          <Route path='myreviews' element={<Myreviews></Myreviews>}></Route>
          <Route path='orders' element={<Orders></Orders>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
        </Route>
        <Route path='blogs' element={<Blog></Blog>}></Route>
        <Route path="Portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
