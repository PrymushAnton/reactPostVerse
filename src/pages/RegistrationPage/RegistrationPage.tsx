import "./RegistrationPage.css"
import { useForm } from "react-hook-form"

interface IRegistrationForm {
    username: string,
    email: string,
    password: string
}


export function RegistrationPage() {

    const {register, handleSubmit, formState} = useForm <IRegistrationForm>({
        mode: "onSubmit"
    })

    function submit(data: IRegistrationForm){
        console.log(data)
    }

    return (
        <div id="registrationFormContainer">
            <form id="registrationForm" onSubmit={handleSubmit(submit)}>
                
                <div id="usernameInputRegistrationContainer">
                    <label htmlFor="usernameInputRegistration">Username</label>
                    <input id="usernameInputRegistration" type="text" {...register("username", {
                        required: {value: true,  message: "This field is required"},
                        maxLength: {value: 20, message: "The length of this field should not be bigger than 20 symbols"},
                        minLength: {value: 3, message: "The length of this field should not be less than 3 symbols"}
                    })} />
                    <p>{formState.errors.username?.message}</p>
                </div>
                
                
                <div id="emailInputRegistrationContainer">
                    <label htmlFor="emailInputRegistration">Email</label>
                    <input id="emailInputRegistration" type="email" {...register("email", {
                        required: {value: true,  message: "This field is required"},
                        maxLength: {value: 20, message: "The length of this field should not be longer than 20 symbols"},
                        minLength: {value: 3, message: "The length of this field should not be less than 3 symbols"}
                    
                    })} />
                    <p>{formState.errors.email?.message}</p>
                </div>
                
                <div id="passwordInputRegistrationContainer">
                    <label htmlFor="passwordInputRegistration">Password</label>
                    <input id="passwordInputRegistration" type="password" {...register("password", {
                        required: {value: true,  message: "This field is required"},
                        maxLength: {value: 20, message: "The length of this field should not be longer than 20 symbols"},
                        minLength: {value: 3, message: "The length of this field should not be less than 3 symbols"}
                    })} />
                    <p>{formState.errors.password?.message}</p>
                </div>
                

                <button id="buttonSubmitRegistration" type="submit">Submit</button>
            </form>
        </div>
        
    )
}