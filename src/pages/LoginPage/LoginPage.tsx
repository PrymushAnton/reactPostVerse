import "./LoginPage.css"
import { useForm } from "react-hook-form"

interface IForm {
    email: string,
    password: string
}


export function LoginPage() {

    const {register, handleSubmit, formState} = useForm <IForm>({
        mode: "onSubmit"
    })

    function submit(data: IForm){
        console.log(data)
    }

    return (
        <div id="loginFormContainer">
            <form id="loginForm" onSubmit={handleSubmit(submit)}>
                
                
                <div id="emailInputLoginContainer">
                    <label htmlFor="emailInputLogin">Email</label>
                    <input id="emailInputLogin" type="email" {...register("email", {
                        required: {value: true,  message: "This field is required"},
                        maxLength: {value: 20, message: "The length of this field should not be longer than 20 symbols"},
                        minLength: {value: 3, message: "The length of this field should not be less than 3 symbols"}
                    
                    })} />
                    <p>{formState.errors.email?.message}</p>
                </div>
                
                <div id="passwordInputLoginContainer">
                    <label htmlFor="passwordInputLogin">Password</label>
                    <input id="passwordInputLogin" type="password" {...register("password", {
                        required: {value: true,  message: "This field is required"},
                        maxLength: {value: 20, message: "The length of this field should not be longer than 20 symbols"},
                        minLength: {value: 3, message: "The length of this field should not be less than 3 symbols"}
                    })} />
                    <p>{formState.errors.password?.message}</p>
                </div>
                

                <button id="buttonSubmitLogin" type="submit">Submit</button>
            </form>
        </div>
        
    )
}