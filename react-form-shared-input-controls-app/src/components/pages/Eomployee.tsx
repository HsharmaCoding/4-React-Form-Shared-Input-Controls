import React, { useState } from "react";
import { useForm} from "../../hooks";
import {IEmployee} from "../../interface";
import {Input,CheckBox,RadioGroup,DropDownList,Button} from "../controls";

// defining the initial state for the form
 const initialState:IEmployee = {
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: 'male',
    hireDate: "",
    isActive: false,
 };

 const genderItems = [
    { id: 'gender', name:'gender', title: 'Male',value:'Male'},
    { id: 'gender',name:'gender', title: 'Female',value:'Female' },
    { id: 'gender',name:'gender', title: 'Other',value:'Other' },
]


const cityItems = [
    { id: 'city', name:'city', title: '--select one--',value:'--select one--'},
    { id: 'city', name:'city', title: 'Ahmedabad',value:'ahmedabad'},
    { id: 'city',name:'city', title: 'Udaipur',value:'udaipur' },
    { id: 'city',name:'city', title: 'Kota',value:'kota' },
]


export const Eomployee=()=>{
    const validate = (fieldValues = values) => {
        let temp: any = { ...errors }
        if ('fullName' in fieldValues) {
            if (fieldValues.fullName) {
                if (!(/^[a-zA-Z]+$/).test(fieldValues.fullName)) {
                    temp.fullName = "Name should contain only alphabets not numbers or other special characters.";
                } else {
                    temp.fullName = "";
                }
            } else {
                temp.fullName = "This field is required.";
            }
        }
        if ('mobile' in fieldValues) {
            if (fieldValues.mobile) {
                if (!(/^\d{10}$/).test(fieldValues.mobile)) {
                    temp.mobile = "Phone number must be 10 digits.";
                } else {
                    temp.mobile = "";
                }
            } else {
                temp.mobile = "This field is required.";
            }
        }
        if ('email' in fieldValues) {
            if (fieldValues.email == "") {
                temp.email = "This field is required."
            }
            else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(fieldValues.email)) {
                temp.email = "Email is not valid."
            }
            else {
                temp.email = "";
            }
        }

        setErrors({
            ...temp
        })
        if (fieldValues == values) {
            if (temp.fullName == "" && temp.email == "" && temp.mobile == "" ) {
                return true;
            }
        }
    }

    // getting the event handlers from our custom hook
    const { onChange, values,errors,setErrors,resetForm } = useForm(
        initialState,
        true,
        validate,
        initialState
    );

    // a submit function
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(validate()){
            console.log(values)
        }
        else{
            console.log("Form Validation Error")
        }
    }

   const resetFormDetails=()=>{
        resetForm()
   }

   const tableBorder={
        borderWidth:'3px',
        borderColor:'white',
        borderStyle:'solid'
    }

    return (

        <form onSubmit={handleSubmit}>
            {/* <table style={{"borderWidth":"3px", 'borderColor':"white", 'borderStyle':'solid'}}> */}
            <table style={tableBorder}>
                <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>
                            <Input
                                name='fullName'
                                id='fullName'
                                type='text'
                                placeholder='Full Name'
                                onChange={onChange}
                                error={errors.fullName}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>
                            <Input
                                name='email'
                                id='email'
                                type='email'
                                placeholder='Email'
                                onChange={onChange}
                                error={errors.email}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Mobile</td>
                        <td>
                            <Input
                                name='mobile'
                                id='mobile'
                                type='text'
                                placeholder='Mobile Number'
                                onChange={onChange}
                                error={errors.mobile}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>City</td>
                        <td>
                            <DropDownList
                                name='city'
                                onChange={onChange}
                                items={cityItems}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Hire Date</td>
                        <td>
                            <Input
                                name='hireDate'
                                id='hireDate'
                                type='date'
                                placeholder='Hire Date'
                                onChange={onChange}
                                error={errors.hireDate}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Active</td>
                        <td>
                            <CheckBox
                                name='isActive'
                                id='isActive'
                                onChange={onChange}
                                checked={values.isActive}
                                label="Active"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Gender</td>
                        <td>
                            <RadioGroup
                                items={genderItems}
                                onChange={onChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><Button type="submit" name="Submit"/></td>
                        <td>
                         <Button type="button" name="ResetForm" onClick={resetFormDetails}/>
                        </td>
                    </tr>
                </tbody>           
            </table>        
        </form>
    );
}