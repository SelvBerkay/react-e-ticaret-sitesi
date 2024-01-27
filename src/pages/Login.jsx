import { useContext } from "react";
import { UserContext } from "../context/User";

export default function Login() {
  const { handleLogin } = useContext(UserContext)
  return (
    <>
      <h1>Giriş yap</h1>
      <form onSubmit={(e) => {e.preventDefault(), handleLogin(e.target.username.value, e.target.password.value)}}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Kullanıcı adı</label>
          <input type="text" className="form-control" id="username" name="username"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password"/>
        </div>
        <button type="submit" className="btn btn-outline-dark">Giriş Yap</button>
      </form>
    </>
  )
}