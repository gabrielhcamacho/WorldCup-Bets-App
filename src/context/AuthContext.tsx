import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession();

interface UserProps{
    name: string;
    avatarUrl: string
}

export interface AuthContextDataProps{
    user: UserProps;
    setIsUserLoading: boolean;
    signIn: () => Promise<void>;
}

interface AuthChildrenProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthChildrenProps){
    const [user, setUser] = useState<UserProps>({} as UserProps)
    const [isUserLoading, setIsUserLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '1078499508865-ijbkc9hg2du6b722224a7ke0rhfkas30.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
        scopes: ['profile', 'email'],
        // clientSecret: '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'
    })


    async function signIn(){
        try {
            setIsUserLoading(true)
            await promptAsync()
            
        } catch (error) {
            console.log(error)
            throw error;
        } finally{
            setIsUserLoading(false)
        }
    }

    async function signInWithGoogle(access_token: string){
        console.log('Token de autenticação ==> ', access_token)
    }

    useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken)
        }
    },[response])

    return(
    <AuthContext.Provider value={{
        signIn,
        setIsUserLoading,
        user,
    }}>
        {children}
    </AuthContext.Provider>
    )
}

