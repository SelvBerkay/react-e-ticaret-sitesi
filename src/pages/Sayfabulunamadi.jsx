import { Link } from "react-router-dom";

export default function Sayfabulunamadi() {
  return (
    <>
      <h1>Aradığınız sayfa bulunamadı...</h1>
      <Link to="/" className="btn btn-dark">Ana sayfaya dönmek için tıklayınız.</Link>
    </>
  )
}