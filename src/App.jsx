import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/HomePage.jsx";
import {GuessNumberPage} from "./pages/GuessNumberPage.jsx";
import {ChallengePage} from "./pages/ChallengePage.jsx";
import { AuthContext } from './contexts/AuthContext';
import useAuth from './hooks/useAuth'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/game",
    element: <GuessNumberPage/>,
  },
  {
    path: "/challenge",
    element: <ChallengePage/>,
  },
]);

function App() {
  const auth = useAuth()
  return (
    <AuthContext.Provider value={auth}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
