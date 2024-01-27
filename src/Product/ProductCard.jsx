import { useContext, useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";
export default function ProductCard({ product }) {
  const productUrl = `/urunler/${product.id}`
  const { user, handleClick } = useContext(UserContext)


  return (
    <>
      <div className="card shadow-lg p-3 mx-2 mb-2 justify-content-center col-lg-3" style={{maxHeight : "500px"}}>
        <img src={product.image} className="card-img-top" alt="..." style={{ height: "30%" }} />
        <div className="card-body" style={{maxHeight : "200px"}}>
          <h6 className="card-title fw-bold">{product.title.toUpperCase().substring(0, 7)}...</h6>
          <p className="card-text">{product.description.toUpperCase().substring(0, 5)}...</p>
          <p className={"d-flex gap-1 align-items-center " + (product.rating.rate > 4 ? 'text-success' : 'text-warning')}><FaRegStar />{product.rating.rate}/5</p>
          <p className="text-bold"><strong>{product.price} TL</strong></p>
        </div>
        <div className="btn-group d-flex flex-column">
            <Link to={productUrl} className="btn btn-dark">İncele</Link>
            {user ? <button className="btn btn-outline-dark mt-2" onClick={() => handleClick(product)}>Sepete Ekle</button> : <p className="mt-2 fw-bolder text-danger">Sepete eklemek için giriş yapınız.</p>}
          </div>
      </div>
    </>
  )
}