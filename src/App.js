import React, { useState } from 'react'

export default function App() {
  const[name , setName] = useState("");
  const [ tnc , setTnc ]= useState(false);
  const[ inter , setInter]= useState("");

  function getformData(e)
    
  {
     console.warn(name,tnc,inter)
      e.prevantDefault()
  }
  return (
    <div className='app' >
      <h1  > Handle form in React </h1>
       <form pnSubmit={getformData} > 

        <input type="text"  placeholder='enter out name' onChange={(e)=> setName(e.target.value) }    />  <br/> <br/>
        <select onChange={(e)=> setInter(e.target.value)} >
        < option> select option </option>
          < option> Ayyaz </option>
          < option> faiz </option>  
        </select><br/> <br/>
        <input   type="checkbox" onChange={(e)=> setTnc(e.target.checked) }   /><span> Accepet Terms nad condition </span>
        <br/>
        <br/>
        <button type='submit' > submits </button>
       </form>

    </div>
  )
}
