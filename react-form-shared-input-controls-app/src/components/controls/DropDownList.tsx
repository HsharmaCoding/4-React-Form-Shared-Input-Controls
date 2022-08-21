import React from "react";

interface IProps{
    onChange:any;
    items:any;
    name:string;
}
export const DropDownList=(props:IProps)=>{
    const convertToDefEventPara = (name:string, value:string) => ({
        target: {
            name, value
        }
    })

    return(
        <> 
            {
                <select name={props.name} id={props.name} onChange={props.onChange}>
                {
                    props.items.map((item:any)=>(
                        <option key={item.value} value={item.value}>{item.title}</option>            
                    ))
                }
                 </select>
            }
    
        </>
           
    )
}