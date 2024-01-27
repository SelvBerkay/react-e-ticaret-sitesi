import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/User";

export default function Navbar(props) {
  const { user, handleLogout, favsLength } = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
      <div className="container">
        <Link to="/" className="navbar-brand">M-STORE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
            <NavLink className="nav-link" to="/urunler">Ürünler</NavLink>
            <NavLink className="nav-link" to="/hakkimizda">Hakkımızda</NavLink>
            <NavLink className="nav-link" to="/iletisim">İletişim</NavLink>
            {
              user ?
                <>
                  <NavLink className="nav-link" to="/sepet">Sepetiniz ({favsLength})</NavLink>
                  <button className="nav-link" onClick={handleLogout}>Çıkış yap ({user.name})</button>
                </> :
                <>
                <NavLink className="nav-link" to="/login">Giriş Yap</NavLink>
                <NavLink className="nav-link" to="/signup">Kaydol</NavLink>
                </>
                
            }
          </div>
        </div>
      </div>
    </nav>
  )
}