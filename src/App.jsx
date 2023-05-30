import { useState } from 'react'
import { Resetstaled } from './styles/ResetStaled'
import { GlobalStyled } from './styles/GlobalStyled'
import { Header } from './components/Header'
import { Assid } from './components/Assaid'


function App() {
  return (
    <>
      <Resetstaled />
      <GlobalStyled />
      <Header />
      <main>
        <Assid />
      </main>
    </>
  )
}

export default App
