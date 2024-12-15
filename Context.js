import { userContext } from "./Callc";
import { useContext } from "react";


function Context(){
    return(<>
    <h1>Component2</h1>
    <Component3/>
    </>)
}
function Component3(){
    return(<>
    <h1>Component3</h1>
    <Component4/>
    </>)
}
function Component4(){
    return(<>
        <h1>Component4</h1>
        <Component5/>
        </>)
}
function Component5(){
    const user = useContext(userContext)
    return(<>
        <h1>Hi {user}</h1>
        <Component4/>
        </>)
}

export default Context