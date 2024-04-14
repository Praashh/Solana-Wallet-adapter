"use client"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
         <WalletMultiButton />
    </div>
  )
}

export default page
