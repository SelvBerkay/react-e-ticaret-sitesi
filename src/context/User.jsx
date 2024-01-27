import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

function UserContextProvider({ children }) {
  const exUserList = [
    {
      id: 1,
      name: "lorem",
      password: "123456",
      favs: [],
      isLogin: false
    },
    {
      id: 2,
      name: "ipsum",
      password: "123456",
      favs: [],
      isLogin: false
    },
    {
      id: 3,
      name: "dolor",
      password: "123456",
      favs: [],
      isLogin: false
    }
  ]
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [favsLength, setFavsLength] = useState()
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("userList")) ?? exUserList
    localStorage.setItem("userList", JSON.stringify(list))
    setUser(JSON.parse(localStorage.getItem("user")) ?? null)
  }, [])

  useEffect(() => {
    let totalFavs = 0
    user?.favs.map(item => {
      totalFavs = totalFavs + (item.count)
    })
    setFavsLength(totalFavs)  
  }, [favsLength])

  const handleLogin = (username, password) => {
    const userList = JSON.parse(localStorage.getItem("userList"))
    let getUser = userList.filter(listUser => listUser.name === username)
    if (getUser.length > 0) {
      if (getUser[0].password === password) {
        userList[userList.indexOf(getUser[0])].isLogin = true
        setUser(userList[userList.indexOf(getUser[0])])
        localStorage.setItem("user", JSON.stringify(userList[userList.indexOf(getUser[0])]))
        localStorage.setItem("userList", JSON.stringify(userList))
        navigate("/")
      } else {
        alert("Şifreniz yanlış")
      }
    } else {
      alert("Böyle bir kullanıcı bulunmamaktadır.")
    }
  }

  const handleSignUp = (newUsername, newPassword) => {
    const userList = JSON.parse(localStorage.getItem("userList"))
    for (let index = 0; index < userList.length; index++) {
      const element = userList[index];
      if (element.name == newUsername) {
        alert("Lütfen farklı bir kullanıcı adı giriniz.")
        return
      }
    }
    const newUser = {
      id: userList.length + 1,
      name: newUsername,
      password: newPassword,
      favs: []
    }
    userList.push(newUser)
    localStorage.setItem("userList", JSON.stringify(userList))
    navigate("/login")
  }

  const handleLogout = () => {
    const userList = JSON.parse(localStorage.getItem("userList"))
    userList.map(user => {
      if (user.isLogin) {
        user.isLogin = false
      }
      localStorage.setItem("userList", JSON.stringify(userList))
    })
    setUser(null)
    navigate("/")
    localStorage.removeItem("user")
  }

  function handleClick(product) {
    let userFavs = user.favs ?? []
    const itemIndex = userFavs.findIndex(userItem => product.id === userItem.id)
    if (itemIndex >= 0) {
      userFavs.map(item => {
        if (item.id === product.id) {
          let itemCount = item.count
          item.count = itemCount + 1
          item.price = product.price
          setFavsLength(favsLength + 1)
        }
      })
    } else {
      userFavs.push({ id: product.id, title: product.title, count: 1, price: product.price, img: product.image })
      setFavsLength(favsLength + 1)
    }
    const userList = JSON.parse(localStorage.getItem("userList"))
    userList.map(listUser => {
      if (listUser.isLogin) {
        listUser.favs = userFavs
      }
      localStorage.setItem("userList", JSON.stringify(userList))
    })
    localStorage.setItem("user", JSON.stringify(user))
  }

  return <UserContext.Provider value={{ user, handleSignUp, handleLogin, handleLogout, handleClick, favsLength, setFavsLength }}>
    {children}
  </UserContext.Provider>
}

export { UserContext, UserContextProvider }