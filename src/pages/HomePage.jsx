import React, { useEffect, useState } from "react";
import {Navbar} from "../components/Navbar.jsx";

export const HomePage = () => {
  const [count, setCount] = useState(0)
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [duration, setDuration] = useState(1)
  useEffect(() => {
    fetch("https://shibe.online/api/shibes?count=10").then(async (response) => {
      const data = await response.json()
      setImages(data)
    })
    return () => {}
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(index => {
        if ((index + 1) === 10) return 0
        return index + 1
      });
    }, (duration * 1000));
    return () => clearInterval(interval);
  }, [duration])
  
  return (
    <>
      <Navbar/>
      <h1>Welcome to my homepage</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+1</button>
      <h2>Index: {currentIndex}</h2>
      <h2>Duration: {duration} seconds</h2>
      <input value={duration} onChange={(e) => setDuration(e.target.value)} />
      <img  src={images[currentIndex]} alt="" width={"300px"}/>
    </>
  )
}
