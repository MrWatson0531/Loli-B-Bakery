import { useState } from 'react'
import './App.css'
import Background from "../assets/loli_B_assets/Background.jpg"
import Header from '../Header/Header'
import Main from '../Main/Main'

function App() {
  const [count, setCount] = useState(0)

  const handleNavClick = () => {
  }

  const handleCartClick = () => {
  }

  const handleAboutClick = () => {
  }

  const handleShopClick = () => {
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header handleNavClick={handleNavClick} handleCartClick={handleCartClick}/>
        <Main handleAboutClick={handleAboutClick}
        handleShopClick={handleShopClick}/>
      </div>
    </div>
  )
}

export default App
