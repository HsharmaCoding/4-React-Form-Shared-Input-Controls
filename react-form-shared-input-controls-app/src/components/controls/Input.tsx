import React from "react";

interface IProps{
    name:string;
    id:string;
    placeholder:string;
    type:string;
    onChange:any;
    error:string;
}
export const Input=(props:IProps)=>{
    return(
        <>
            <input
                name={props.name}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            <div className='error'>{props.error.toString()}</div>
        </>
    )
}