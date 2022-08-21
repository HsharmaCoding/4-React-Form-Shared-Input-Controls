import React from "react";

interface IProps{
    name:string;
    id:string;
    checked:boolean;
    onChange:any;
    label:string;
}
export const CheckBox=(props:IProps)=>{

    const convertToDefEventPara = (name:string, value:boolean) => ({
        target: {
            name, value
        }
    })

    return(
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                name={props.name}
                                id={props.id}
                                type="checkbox"
                                onChange={(e:any)=>props.onChange(convertToDefEventPara(props.name,e.target.checked))}
                            />
                        </td>
                    </tr>
                </tbody>               
            </table>
    )
}