import { useContext, useState } from "react";
import {NavLink} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const {username, isLoggedIn, login, logout} = useContext(AuthContext)
  
  return (
    <>
      <div className={'nav-container'}>
        <div>React Hooks</div>
        <div>{username}</div>
        <nav id="sidebar" className={'nav-item-container'}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          {!isLoggedIn && <button onClick={login}>Login</button>}
          {isLoggedIn && <button onClick={logout}>Logout</button>}
        </nav>
      </div>
      <hr/>
    </>
  )
}