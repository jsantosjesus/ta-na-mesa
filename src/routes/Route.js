import { Route, Redirect } from "react-router-dom";
import { useContext, useState } from "react";


export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){

    // const { loading } = useContext(AuthContext);
    const { signed, setSigned} = useState(false);

    function Logar(){
        setSigned = true;
    }

    // if(loading){
    //     return(
    //         <div>

    //         </div>
    //     )
    // }

    if(!signed && isPrivate){
        return <Redirect to="/" />
    }

    if(signed && !isPrivate){
        return <Redirect to="/cardapio" />
    }

    return(
        <Route 
        {...rest}
        render={ props =>(
            <Component {...props}/>
        )}
        />
    )
}


