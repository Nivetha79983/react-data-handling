import React from 'react'


function Card({items}) {
    const mysh =  {
        border : "2px solid black",
        boxShadow:"5px 5px 10px rgba(0,0,0,.7)",
        borderRadius:"10px",
        transition:'1s '
    }
     
      return (
    <div className='container '>
        <div className="row justify-content-evenly ">
        {items.map((myvar)=>(
            <>
        
                    <div className="col-12 col-lg-5 g-5  " style={mysh}>
                        <div className="card">
                        <h1 className='text-center'>{myvar.title}</h1>
                        <img src={myvar.img} class="card-img-top" alt={myvar.title} />
                        <div class="card-body">
                            <h5 className='text-center ' style={{color:'red'}} >Price:{myvar.price}</h5>
                           <p class="card-text">{myvar.desc}</p>
                        </div>
                        </div>
                    </div>
               
            {/* <h1>{myvar.title}:{myvar.price}</h1> <br />
            <img src={myvar.img} alt={myvar.title} /> <br/>

            <p>{myvar.desc}</p> */}

            </>
        ))}

        </div>
       

    </div>
  )
}

export default Card