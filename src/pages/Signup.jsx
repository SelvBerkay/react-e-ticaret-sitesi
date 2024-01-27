import { useContext } from "react";
import { UserContext } from "../context/User";

export default function Signup() {
  const { handleSignUp } = useContext(UserContext)
  return (
    <>
      <h1>Kayıt Ol</h1>
      <form onSubmit={(e) => {e.preventDefault(), handleSignUp(e.target.username.value, e.target.password.value)}}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Kullanıcı adı</label>
          <input type="text" className="form-control" id="username" name="username"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="text" name="password" className="form-control" id="password"/>
        </div>
        <button type="submit" className="btn btn-outline-dark">Kaydol</button>
      </form>
    </>
  )
}