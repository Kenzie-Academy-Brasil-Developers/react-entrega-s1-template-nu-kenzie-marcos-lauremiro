import { useState } from 'react'
import { Resetstaled } from './styles/ResetStaled'
import { GlobalStyled } from './styles/GlobalStyled'
import { Header } from './components/Header'
import { Assid } from './components/Assaid'
import { SectionCards } from './components/ScectionList'


function App() {
  return (
    <>
      <Resetstaled />
      <GlobalStyled />
      <Header />
      <main>
        <Assid />
        <SectionCards />
      </main>
    </>
  )
}

export default App
