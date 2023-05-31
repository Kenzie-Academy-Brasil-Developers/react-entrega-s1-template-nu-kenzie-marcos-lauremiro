import { useState } from 'react'
import { Resetstaled } from './styles/ResetStaled'
import { GlobalStyled } from './styles/GlobalStyled'
import { Header } from './components/Header'
import { Assid } from './components/Assaid'
import { SectionCards } from './components/ScectionList'


function App() {

  const [list, setList] = useState([{descript:'carro', value: '400', type: 'saida'},{descript:'carr2', value: '4002', type: 'entrada'}])

  return (
    <>
      <Resetstaled />
      <GlobalStyled />
      <Header />
      <main>
        <Assid list={list}  setList={setList}/>
        <SectionCards />
      </main>
    </>
  )
}

export default App
