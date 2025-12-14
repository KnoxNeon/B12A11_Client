import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config"
import axios from "axios"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState('')

    const registerWithEmailPassword = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
   
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false) 
      })
        return ()=>{
            unsubscribe()
        }
    }, [])

     useEffect(() => {
        if(!user) return
        axios.get(`http://localhost:3000/users/role/${user.email}`)
        .then(res =>{
                setRole(res.data.role)
            })
      },[user])

      console.log(role)
    

  const authData = { registerWithEmailPassword, user, setUser, loading }
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider
