import React, {useState} from "react";
export function Toggle(){
    var [switch1,toggle]=useState('On');
    var toggle1=()=>{
        if(switch1=='On'){
            toggle('Off')}
            else{
                toggle('On')
            }
        };
        return(<><button onClick={()=>toggle1()}>The Switch is{switch1}</button></>)
    }