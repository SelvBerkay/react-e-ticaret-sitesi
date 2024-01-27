import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Categories() {
  const [catogeries, setCategories] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])
  return (
    <>
      <div className="list-group sticky-md-top">
        <Link
          to={`/urunler`}
          className="list-group-item list-group-item-action text-dark fw-bold"
        >
          TÜM ÜRÜNLER
        </Link>
        {
          catogeries.map((category, index) =>
            <Link
              key={index}
              to={`/urunler/category/${category}`}
              className="list-group-item list-group-item-action text-dark fw-bold"
            >
              {category.toUpperCase()}
            </Link>)
        }
      </div>
    </>
  )
}