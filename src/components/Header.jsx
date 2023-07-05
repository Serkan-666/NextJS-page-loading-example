import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='mb-10 px-24 py-6 flex gap-3'>
            <Link href={"/"} passHref>
                <button className='bg-neutral-700 text-white px-6 py-4 rounded-lg transition duration-300 hover:opacity-80 '>Go to home page</button>
            </Link>
            <Link href={"/about"} passHref>
                <button className='bg-neutral-700 text-white px-6 py-4 rounded-lg transition duration-300 hover:opacity-80'>Go to about page</button>
            </Link>
        </div>
    )
}
