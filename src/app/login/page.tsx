import React from 'react'
import Image from "next/image";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Lgin() {
    const variants = ["flat", "bordered", "underlined", "faded"];
    return (
        <div className='flex w-full h-screen justify-center items-center bg-slate-200 '>
            <div className="flex flex-col justify-evenly rounded-xl shadow-md border w-[450px] h-[620px] bg-slate-100">
                <div className='flex  justify-center items-center h-[100%] '>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl font-extrabold'>Welcome Bro</h1>

                        <br />
                        <Image alt="" src="next.svg" width={100} height={100} />
                    </div>
                </div>
                <div className= 'h-[100%] flex flex-col gap-4 items-center'>

                    <TextField  className='w-[270px]'
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue="Hello World" />
                    <TextField className='w-[270px]'
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>

                <div className='h-[100%] border-2 border-green-600'></div>
            </div>
        </div>
    )
}
