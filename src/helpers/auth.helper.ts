import { ILoginProps, IRegisterProps } from "@/interfaces/Types"

const APIURL=process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            return response.json();
        } else {
            throw Error("Failed to Register")
        }
    } catch (error: any) {
        throw new Error(error)
    }
};

export async function login(userData: ILoginProps) {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            return response.json();
        } else {
            throw Error("Failed to Login")
        }
    } catch (error: any) {
        throw new Error(error)
    }
};