import {useContext,createContext,useEffect,useState} from 'react'
import { getUser } from '@/types'
import service from '@/lib/server/helper';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const InitialUser = {
    id:"",
    username:"",
    email:"",
    mobile_no:""
}

const InitialState = {
    user: InitialUser,
    isLoading: false,
    isAuthenticated: false,
    setUser: ()=>{},
    setIsAuthenticated: ()=>{},
    checkAuthUser: async ()=> false as boolean
}

type contextType = {
    user: getUser,
    isLoading: boolean,
    isAuthenticated: boolean,
    setUser:  React.Dispatch<React.SetStateAction<getUser>>,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser: ()=> Promise<boolean>
}

const AuthContext = createContext<contextType>(InitialState)

export function AuthProvider({children}: {children: React.ReactNode}) {

    const [user,setUser] = useState<getUser>(InitialUser)
    const [isLoading,setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const checkAuthUser = async ()=>{
        setIsLoading(true)
        try {
            const currentUser = await service.getUserdata()
            // console.log(currentUser);
            
            if (currentUser) {
                setUser({
                    id: currentUser._id,
                    username: currentUser.username,
                    email: currentUser.email,
                    mobile_no: currentUser.mobile_no
                })
                setIsAuthenticated(true)
                return true
            }
            setIsAuthenticated(false)
            return false
        } catch (error) {
            console.log(error);
            return false
        } finally{
            setIsLoading(false)
        }
    }
    const navigate = useNavigate()
    useEffect(()=>{
        const cookie = Cookies.get('accessToken')

        if (cookie === "[]" 
        || cookie === null ||
        cookie === undefined
    ) {
            navigate("/sign-in")
        }
        // console.log(cookie);
        
        
        checkAuthUser()
    },[])

    const value ={
        user,
        isLoading,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        checkAuthUser
    }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useUserContext = ()=>useContext(AuthContext)