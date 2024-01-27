import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(err => console.error(err))
  }, [productId])

  if (!product) {
    return <></>
  }

  return (
    <>
      <div className="card p-3 mx-3 mb-2 d-flex  col-sm-12">
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{product.title.toUpperCase()}</h5>
          <p className="card-text">{product.description}</p>
          <p className={"d-flex gap-1 align-items-center " + (product.rating.rate > 4 ? 'text-success' : 'text-warning')}><FaRegStar />{product.rating.rate}/5</p>
          <p className="text-bold"><strong>{product.price} TL</strong></p>
          <Link to="/urunler" className="btn btn-dark">Geri dönmek için tıklayınız</Link>
        </div>
      </div>
    </>
  )
}