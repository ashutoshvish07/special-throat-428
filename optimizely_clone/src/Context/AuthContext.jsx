import React, { useContext } from "react";

export const AuthContext = useContext()

export const AuthContextProvider = (children) =>{
     

    const login = () =>{
        return axios(
            
        )
    }


    return(
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    )
}
