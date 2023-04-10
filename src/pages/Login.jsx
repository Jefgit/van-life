import React from "react"
import { useLoaderData, useActionData,Form, redirect, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const url = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try{
        const data = await loginUser({email, password})
        localStorage.setItem('loggedin', JSON.stringify(true))
        return redirect(url, {replace : true})
    }
    catch(err){
        return err.message
    }
}

export function loginLoader({request}){
    return new URL(request.url).searchParams.get("message")
}
export default function Login(){
    const message = useLoaderData()
    const errorMessage = useActionData()
    const status = useNavigation().state
    
    return(
        <main className="login-page">
            <h1 className="login--text">Sign in to your account</h1>
            {errorMessage && <h3 className="message--text">{errorMessage}</h3>}
            {message && <h3 className="message--text">{message}</h3>}
            <Form method="post" className="login--form" replace>
                <input 
                    className="username--input" 
                    name="email"
                    type="email" 
                    placeholder="Email address"
                />
                <input 
                    className="password--input" 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                />
                <button 
                    className="signin--button"
                    disabled={status==="submitting"}
                >{status==="submitting"
                    ? "Logging in..." 
                    : "Sign in"
                }
                </button>
            </Form>
            <p className="no-account-text">Don't have an account? <span className="create-account-link">Create one now</span></p>
        </main>
    )
}