import { useState } from 'react'
import { Resetstaled } from './styles/ResetStaled'
import { GlobalStyled } from './styles/GlobalStyled'
import { Header } from './components/Header'
import { Assid } from './components/Assaid'
import { SectionCards } from './components/ScectionList'


function App() {

  const [list, setList] = useState([])

  return (
    <>
      <Resetstaled />
      <GlobalStyled />
      <Header />
      <main>
        <Assid list={list}  setList={setList}/>
        <SectionCards list={list} setList={setList}/>
      </main>
    </>
  )
}

export default App
