import React from "react";

interface IProps{
   type:"button" | "submit" | "reset" | undefined;
   name:string;
   onClick?:()=>void;
}
export const Button=(props:IProps)=>{

    return(
            <button type={props.type} onClick={props.onClick}>
                {props.name}
            </button>
            
    )
}