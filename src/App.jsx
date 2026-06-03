import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'
import logo from '/DragonBallLogo.png'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState (1)
  const [inputPage, setInputPage] = useState ("") 

  useEffect(() => {
    const carrega = async () => {
      try{
        const response = await api.get(`/characters`)
        setData(response.data.items)
      }catch{
        console.error("deu ruim")
      }
    } 
    carrega()
  }, [page])
  

  return (
    <>
    <div className={s.batata}> 
      <img className={s.logo} src={logo} alt="Logo Dragon Ball" />
    </div>
      <div>
        <label>Choose Page</label>
        <input min={1} max={42} type="number" placeholder='Type the page 1/42' value={inputPage} onChange={(e) => setInputPage(e.target.value)}/>
        <button onClick={() => setPage(Number(inputPage))}>buscar</button>
      </div>
      <main>
        {data.map((item) => {
          return(
            <div key={item.id} className={s.Card} >
              <Card nome={item.name} imagem={item.image} id={item.id} ki={item.ki} maxki={item.maxki} race={item.race} gender={item.gender} affiliation={item.affiliation} deletedAt={item.deletedAt} />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
