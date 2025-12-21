import { createContext, useState} from "react";

// export const UserContext = createContext(null)

export const UserProvider = ({children})=>{
  const [user, setUser] =  useState({
    name:"Dummy",
    email:"abhi@gmail.com"
  })
  return <UserContext.Provider value = {{user, setUser}}>
    {children}
  </UserContext.Provider> 
}

