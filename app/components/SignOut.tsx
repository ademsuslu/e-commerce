"use client"

import { signOut } from 'next-auth/react';
const SignOut = () => {
    return (
        <div style={{ outline: "none", border: "none" }} className='bg-transparent my-auto px-1 cursorpointer' onClick={() => signOut()}>signin</div>
    )
}

export default SignOut