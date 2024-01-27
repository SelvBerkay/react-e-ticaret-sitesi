import { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Anasayfa from './pages/Anasayfa'
import Urunler from './pages/Urunler'
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'
import Sayfabulunamadi from './pages/Sayfabulunamadi'
import Category from './Product/Category'
import Products from './Product/Products'
import Footer from './components/Footer'
import Product from './Product/Product'
import Login from './pages/Login'
import Sepet from './pages/Sepet'
import PrivateRouteFavs from './private-routes/PrivateRouteFavs'
import Signup from './pages/Signup'
import PrivateRouteLogin from './private-routes/PrivateRouteLogin'
import PrivateRouteSignUp from './private-routes/PrivateRouteSignUp'


function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Routes>
              <Route path='/*' element={<Sayfabulunamadi />} />
              <Route path='/' element={<Anasayfa />} />
              <Route path='/urunler' element={<Urunler />}>
                <Route index={true} element={<Products />} />
                <Route path='category/:categoryName' element={<Category />} />
                <Route path=':productId' element={<Product />} />
              </Route>
              <Route path='/hakkimizda' element={<Hakkimizda />} />
              <Route path='/iletisim' element={<Iletisim />} />
              <Route path='/login' element={<PrivateRouteLogin><Login/></PrivateRouteLogin>} />
              <Route path='/signup' element={<PrivateRouteSignUp><Signup/></PrivateRouteSignUp>} />
              <Route path='/sepet' element={<PrivateRouteFavs><Sepet /></PrivateRouteFavs>} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
