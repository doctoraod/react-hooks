import { useState } from "react";

export default function useAuth () {
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function login() {
    setUsername("Aod")
    setIsLoggedIn(true)
  }
  function logout() {
    setUsername("")
    setIsLoggedIn(false)
  }
  return {username, isLoggedIn, login, logout}
}