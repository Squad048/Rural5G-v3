import React from 'react'
import Carrosel from '../../components/carrosel/Carrosel'
import "./assets/style.css"

const Home = () => {
  return (
    <main>
      <div>
        <img id='bg' src='https://cdn.discordapp.com/attachments/1028712344110514176/1039862732222124033/fundo.png' alt='img' />
      </div>
      <div>
        <Carrosel />
      </div>
    </main>
  )
}

export default Home