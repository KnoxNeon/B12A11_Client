import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config"



export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

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
    

  const authData = { registerWithEmailPassword, user, setUser, loading }
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider
