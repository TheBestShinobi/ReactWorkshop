import { useState } from 'react'
import './App.css'
// NOTE: import "Card" should match with the functions name (which we named 'Card')
import Card from './components/card'
import cardsData from '/assets/cardsData'

function App() {

  return (
    <>
      <h1> Projects </h1>

      <div className='cards'>

        {cardsData.map((card, index) => (

        <Card
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
        />

        ))}

      </div>
    </>
  )
}

export default App
