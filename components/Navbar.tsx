import React from 'react'
import { checkUser } from '@clerk/nextjs/server';


export default function Navbar() {
    const user = checkUser();
  return (
    <div>Navbar</div>
  )
}
