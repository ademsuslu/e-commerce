"use client"

import { signIn } from 'next-auth/react';
const SignIn = () => {
    return (
        <div style={{ outline: "none", border: "none" }} className='bg-transparent text-secondary my-auto px-1 cursorpointer' onClick={() => signIn()}>signin</div>
    )
}

export default SignIn