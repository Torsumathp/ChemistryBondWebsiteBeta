import React from 'react'
import { NavLink } from 'react-router-dom'

function welc() {
  return (
    <div className='bg-[url("https://cdn.discordapp.com/attachments/1126467943534972989/1199345288394068028/bg.png?ex=65c23457&is=65afbf57&hm=18d590c3cb85bd2a0a89c044589cfa14bfa1e82e2da3d580480492ba513faf84&")] bg-cover w-4/4 h-[46.4rem] font-font1'>
        <div className='text-white text-center pt-[15rem]'>
            <div>
                <h1 className='text-[50px] font-bold'>Welcome to our website</h1>
            </div>
            <div className='mt-[1rem]'>
                <p className='text-lg'>ChemistryBond in this website you will got good experience from learing about chemistry bond !</p>
            </div>
            <div className='flex justify-center'>
                <NavLink to="/mean"><button className='flex items-center justify-center w-40 h-16 border-2 text-2xl border-white rounded-md mt-[3rem] duration-700 hover:text-blue-800 hover:bg-white'>start</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default welc