import React, { useState } from "react"
import UAuth from "@uauth/js"
import { Button } from "react-bootstrap"

const uauth = new UAuth({
    clientID: "f479c4fb-992e-4995-bb7b-12aa6019f3af",
    redirectUri: "http://localhost:3000/list",
})

function UNSD() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            await authenticate()
        } catch (error) {
            console.error(error)
        }
    }

    async function logOut() {
        uauth.logout()
        logout()
    }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } else {
            logOut()
        }
    }

    return (
        <>
            <button className="button" onClick={log}>
                {Uauth != null ? Uauth["sub"] : "Login with UNSD"}
            </button>
        </>
    )
}

export default UNSD