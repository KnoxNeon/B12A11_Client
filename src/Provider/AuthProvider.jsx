import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config"
import axios from "axios"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [roleLoading, setRoleLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState('')
    const [userStatus, setUserStatus] = useState('')

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
        axios.get(`donatebloodserver.vercel.app/users/role/${user.email}`)
        .then(res =>{
                setRole(res.data.role)
                setUserStatus(res.data.status)
                setRoleLoading(false)
            })
      },[user])

  const authData = { 
    registerWithEmailPassword,
    user,
    setUser,
    loading,
    role,
    roleLoading,
    userStatus 
  }

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider
