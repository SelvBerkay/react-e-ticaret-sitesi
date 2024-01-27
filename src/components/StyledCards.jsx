import { Link } from "react-router-dom"
import "../css/styledcard.css"

export default function StyledCards() {
  return (
    <>
      {/* Women's clothing */}
      <div className="col-sm-6">
        <div className="styledCard" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais")' }}>
          <div className="styledCard-content">
            <h5 className="styledCard-title">Women's Clothing</h5>
            <p className="styledCard-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
            </p>
            <Link to={"/urunler/category/women's%20clothing"} className="btn btn-light">Ürünleri gör</Link>
          </div>
        </div>
      </div>
      {/* Men's Clothing */}
      <div className="col-sm-6">
        <div className="styledCard" style={{ backgroundImage: 'url("https://bridgeandstitch.com/wp-content/uploads/2022/06/DSC_6565-copy-1-scaled-e1655571996211-1000x760.jpg")' }}>
          <div className="styledCard-content">
            <h5 className="styledCard-title">Men's Clothing</h5>
            <p className="styledCard-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
            </p>
            <Link to={"/urunler/category/men's%20clothing"} className="btn btn-light">Ürünleri gör</Link>
          </div>
        </div>
      </div>
      {/* Electronics */}
      <div className="col-sm-6">
        <div className="styledCard" style={{ backgroundImage: 'url("https://www.covue.com/wp-content/uploads/2023/04/Electronics-in-Japan-1024x576.png")' }}>
          <div className="styledCard-content">
            <h5 className="styledCard-title">Electronics</h5>
            <p className="styledCard-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
            </p>
            <Link to={"/urunler/category/electronics"} className="btn btn-light">Ürünleri gör</Link>
          </div>
        </div>
      </div>
      {/* Jewelery */}
      <div className="col-sm-6">
        <div className="styledCard" style={{ backgroundImage: 'url("https://www.stratasys.com/contentassets/3522e62e996441ebb08470652b0311b3/corallo.png?v=48fd08&width=896&mode=crop")' }}>
          <div className="styledCard-content">
            <h5 className="styledCard-title">Jewelery</h5>
            <p className="styledCard-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
            </p>
            <Link to={"/urunler/category/jewelery"} className="btn btn-light">Ürünleri gör</Link>
          </div>
        </div>
      </div>
    </>
  )
}