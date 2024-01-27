import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/User"

export default function Sepet() {
  const [favs, setFavs] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const { user, handleClick, favsLength ,setFavsLength } = useContext(UserContext)
  useEffect(() => {
    setFavs(user.favs ?? [])
    setPrice()
  }, [totalPrice])

  function setPrice() {
    let total = 0
    let totalFavs = 0
    favs?.map(item => {
      total = total + (item.price*item.count)
      totalFavs = totalFavs + (item.count)
    })
    setTotalPrice(total.toFixed(2))
    setFavsLength(totalFavs)
  }

  function handleRemoveClick(productId) {
    favs?.map(item => {
      if (item.id === productId) {
        if (item.count > 1) {
          let itemCount = item.count
          item.count = itemCount - 1
        } else {
          const itemIndex = favs.findIndex(favsItem => item.id === favsItem.id)
          favs.splice(itemIndex, 1)
        }
      }
    })
    setFavs(favs)
    setPrice()
    const userList = JSON.parse(localStorage.getItem("userList"))   
    userList.map(listUser => {
      if(listUser.isLogin) {
        listUser.favs = favs
      }
      localStorage.setItem("userList", JSON.stringify(userList))
    } )
    localStorage.setItem("user", JSON.stringify(user))
    setFavsLength(favsLength - 1)
  }
  return (
    <>
      <h1>Sepetiniz</h1>

      <div className="list-group">
        {
          favs?.map(item => {
            return (
                <div key={item.id} className="list-group-item list-group-item-action">
                  <img src={item.img} alt="" style={{width : "20%", height : "50%"}} />
                  <p className="fw-bolder mt-2 mx-2">{item.title.toUpperCase()} ({item.count}) {item.price} TL</p>
                  <Link to={`/urunler/${item.id}`} className="btn btn-dark mx-1">İncele</Link>
                  <button className="btn btn-outline-dark mx-2" onClick={() => {handleClick(item);setPrice()}}>Ekle</button>
                  <button className="btn btn-dark" onClick={() => handleRemoveClick(item.id)}>Sil</button> 
                </div>
            )
          }
          )
        }
      </div>
      {

      }
      <h1 className="mt-2">
        {
          totalPrice > 0 ? <span>Toplam Fiyat : {totalPrice} TL</span> : "Sepetiniz Boş..."
        }
      </h1>
    </>
  )
}