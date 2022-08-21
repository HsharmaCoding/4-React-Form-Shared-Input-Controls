import React from "react";

interface IProps{
    onChange:any;
    items:any;
}
export const RadioGroup=(props:IProps)=>{
    const convertToDefEventPara = (name:string, value:string) => ({
        target: {
            name, value
        }
    })

    return(
        <> 
             <table>
                <tbody>
                    {
                            props.items.map((item:any)=>(
                                <tr key={item.value}>
                                    <td>
                                        <input 
                                            type="radio" 
                                            value={item.value} 
                                            name={item.name}
                                            id={item.id}
                                            onChange={(e:any)=>props.onChange(convertToDefEventPara(item.id,e.target.value))}
                                        />
                                    </td>
                                    <td> {item.title}</td>
                                </tr>                
                            ))
                        }
                </tbody>                
            </table>       
        </>
           
    )
}