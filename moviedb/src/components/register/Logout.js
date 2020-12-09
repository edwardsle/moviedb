  
import React,{Redirect} from 'react'
import Axios from 'axios'

export default function Logout() {
    React.useEffect(() => {
        Axios.get("http://localhost:3001/user/logout").then((response) => {
            console.log(response);
            if (response.data.loggedIn === true) {
                console.log("Logout successfully");
            }
        })
    }, []);

    return(
        <> 
        {/* <Redirect path="/" /> */}
        </>
    )
}