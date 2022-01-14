import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import './hookform.css'
function HookForm() {

    const [name, setName] = useState("")
    console.log("name",name)

    const {register, handleSubmit,watch,reset, formState: { errors }} =  useForm();
    const dataSubmit= (formdata) =>{
        console.log('data',formdata)
        setName(formdata)
        // reset is used for form reset or clear
        reset()
    }
    console.log(watch("example"));

    return (
        <div className='hookform-div'>
            <p>
                This is react hook form and here i use useForm and form validation.
            </p>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form onSubmit={handleSubmit(dataSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} /> <br/><br/>

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <br/>
            <input {...register('firstName',{ required: true, minLength: 3,maxLength:8 })} />
            {errors.firstName  && <span>This field is required</span>}
            {errors.firstName && errors.firstName.type === "minLength" && <span>This field must be at least 3 characters</span>}
            {errors.firstName && errors.firstName.type === "maxLength" && <span>This field must be at most 8 characters</span>}
            <br/>
            <input  {...register('lastName',{ required: true, minLength: 3,maxLength:8 })} />
            {errors.lastName && errors.lastName.type === "required" && <span>This field is required</span>}
            {errors.lastName && errors.lastName.type === "minLength" && <span>This field must be at least 3 characters</span>}
            {errors.lastName && errors.lastName.type === "maxLength" && <span>This field must be at most 8 characters</span>}
            <br/>
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            {errors.age && errors.age.type === "min" && <span>You must be at least 18 years old</span>}
            {errors.age && errors.age.type === "max" && <span>You must be at most 99 years old</span>}
            <br/><br/>
            <input type="submit" />
            </form>
        </div>
    )
}

export default HookForm
