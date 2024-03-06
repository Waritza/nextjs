"use client"

import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(n => n + 1)
  }

  const decrease = () => {
    setCount(b => b - 1)

  }


  const Name = "Pun";

  return (
    <div className='border-4 border-red-700 flex w-full justify-center items-center h-screen'>
      <div className='border-4 border-green-700 h-fit'>
        <h1 className='text-blue-700'>Home</h1>

        {/* <Link href="/about">Go to about</Link> */}
        <p>{count}</p>
        <button onClick={increase}> bu </button>

        <h2>
          <button onClick={decrease}> bua </button>
          {/* <Link href={`/dynamic/${Name}`}>Go to dynamic</Link> */}
        </h2>
      </div>

    </div>
  );
}
