import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function Products() {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setAllProducts(data))
  }, [])

  return (
    <>
      {
        allProducts.map(product => <ProductCard product={product} key={product.id} />)
      }
    </>
  )
}