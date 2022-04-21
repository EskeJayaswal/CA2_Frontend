import facade from '../apiFacade'
import React, { useState,useEffect } from "react"
import '../styling/User.css'

const User = () => {

  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => { facade.fetchUserData( "admin" ).then(data=> setDataFromServer(data.msg));
  }, [])
 
  return (
    <div>
      <div className="container">
          <div className="frame">
            <h1>MOVIE TIME</h1>
            <h3>{dataFromServer}</h3>
          </div>
      </div>
    </div>
  )
}

export default User