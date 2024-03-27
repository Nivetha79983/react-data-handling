import React from 'react'
import Data from '../Components/Data'

function Button({menuitems,Filter,setitems}) {
  return (
    <div className='container d-flex justify-content-center align-items-center '>
        {menuitems.map((myvar)=>(
            <button className='btn btn-outline-dark m-2 ' onClick={()=>Filter(myvar)}>{myvar}</button>
        ))}
        <button className='btn btn-outline-dark' onClick={()=>setitems(Data)}>All</button>

    </div>
  )
}

export default Button