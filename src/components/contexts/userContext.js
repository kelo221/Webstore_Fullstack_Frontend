import React, { createContext, useState } from 'react'
export const UserContext = createContext(undefined)
const UserContextProvider = (props) => {

    const [userInfo, setUserInfo] = useState({
        "Email": null,
        "IsAdmin": false,
        "_Id": null,
        "Avatar": "/img/users/noImage.jpg"
    });


    return (
        <UserContext.Provider
            value={{
                userInfo, setUserInfo
            }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider