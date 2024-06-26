import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../service/api";

const AuthContext = createContext({})

function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@autodieta:user", JSON.stringify(user))
            localStorage.setItem("@autodieta:token", token)

            api.defaults.headers.authorization = `Bearer ${token}`

            setData({ user, token })

        }catch (error){
            throw error
    }
}

function signOut(){
    localStorage.removeItem("@autodieta:user")
    localStorage.removeItem("@autodieta:token")
    
    setData({})
}

async function updateProfile(user, avatarFile){
    try {
        if(avatarFile){
            const fileUploadForm = new FormData()
            fileUploadForm.append("avatar", avatarFile)

            const response = await api.patch("/users/avatar", fileUploadForm)
            user.avatar = response.data.avatar
        }
        await api.put("/users", user)
        localStorage.setItem("@autodieta:user", JSON.stringify(user))

        setData({ user, token:data.token })
    } catch (error) {
        throw error
    }
}

useEffect(() => {
    const user = localStorage.getItem("@autodieta:user")
    const token = localStorage.getItem("@autodieta:token")

    if(token && user){
        api.defaults.headers.common['authorization'] = `Bearer ${token}`

        setData({
            token,
            user: JSON.parse(user)
        })
    }
}, [])

    return(
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }
