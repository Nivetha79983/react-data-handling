import React,{useState} from "react"
import Card from "./Components/Card"
import Data from './Components/Data'
import Button from "./Components/Button"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [items, setitems] = useState(Data)
  const menuitems=[...new Set(Data.map(val=>val.category))]  
  const Filter=(cat)=>{
    const newmenu=Data.filter(ename=>
      ename.category===cat
    )
    setitems(newmenu)
  }                                                                                                        

  

  return (
    <>
    <h1 className="text-center">Food Menu</h1>
    <Button  menuitems={menuitems} Filter={Filter} setitems={setitems}/>
    <Card items={items} />
    </>
  )
}

export default App
