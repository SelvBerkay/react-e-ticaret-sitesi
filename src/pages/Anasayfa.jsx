import { useEffect, useState } from "react";
import CarouselBt from "../components/CarouselBt";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import StyledCards from "../components/StyledCards";

export default function Anasayfa(props) {
  const [lastThree, setLastThree] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then(res => res.json())
      .then(data => setLastThree(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 border border-3 p-3 border-secondary-subtle border-end-0 rounded-start">
            <CarouselBt lastThree={lastThree} />
          </div>
          <div className="col-md-6 border-3 p-3 border-secondary-subtle border border-start-0 d-flex flex-column align-items-center justify-content-center text-dark rounded-end">
            <h1>HOŞGELDİNİZ...</h1>
            <h3>Bir markadan çok daha fazlası...</h3>
            <Link to="/urunler" className="btn btn-secondary mt-2">Ürünleri görmek için tıklayınız</Link>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center fw-bold fs-1" style={{
              backgroundImage: `url("https://img.freepik.com/premium-vector/white-abstract-background-with-electronics-circuit-board_10307-543.jpg?w=2000")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"
            }}>
              <TypeAnimation
                sequence={[
                  'Electronics',
                  1000,
                  'Jewelery',
                  1000,
                  "Men's Clothing",
                  1000,
                  "Women's Clothing",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="col-lg-6 mt-2 d-flex flex-wrap justify-content-center align-items-center">
            <StyledCards/>
          </div>
        </div>
      </div>
    </>
  )
}