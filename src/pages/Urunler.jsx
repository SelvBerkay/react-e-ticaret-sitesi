import { Outlet } from "react-router-dom";
import Categories from "../Product/Categories";

export default function Urunler(props) {
  return (
    <>
      <h1 className="text-center">Ürünler</h1>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3 mb-2">
            <Categories />
          </div>
          <div className="col-md-9 d-flex flex-row flex-wrap">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}