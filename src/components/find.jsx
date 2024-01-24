import React from 'react'
import { NavLink } from 'react-router-dom'

function test() {
  return (
    <div className='bg-[url("https://cdn.discordapp.com/attachments/1126467943534972989/1199345288394068028/bg.png?ex=65c23457&is=65afbf57&hm=18d590c3cb85bd2a0a89c044589cfa14bfa1e82e2da3d580480492ba513faf84&")] bg-cover w-4/4 h-[46.4rem] font-thaif-1 text-white'>
        <div className=''>
          <div className='flex justify-center'>
            <div>
                <h1 className='text-white text-[60px] text-center font-bold'>ค้นหาสารประกอบ</h1>
            </div>
          </div>

          <div className='flex justify-center items-center mt-[0rem] space-x-10'>
            <div>
                <input type="text" name="element1" className='outline-none bg-blue-900 font-font1 w-48 h-48 text-[6rem] text-center '/>
            </div>

            <div className='mt-[12rem]'>
                <input type="text" name="element1" className='outline-none bg-blue-900 font-font1 w-24 h-24 text-[3rem] text-center '/>
            </div>

            <div>
                <p className='text-[20rem]'>+</p>
            </div>

            <div>
                <input type="text" name="element1" className='outline-none bg-blue-900 font-font1 w-48 h-48 text-[6rem] text-center '/>
            </div>

            <div className='mt-[12rem]'>
                <input type="text" name="element1" className='outline-none bg-blue-900 font-font1 w-24 h-24 text-[3rem] text-center '/>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='flex items-center justify-center w-40 h-16 border-2 text-2xl border-white rounded-md mt-[-2rem] duration-700 hover:text-blue-800 hover:bg-white'>ค้นหา</button>
          </div>
          <div className=' ml-16'>
            <NavLink to="/periodicTable"><button className='text-xl rounded-full border-2 border-white p-2 mt- ml-[-20px] duration-700 hover:text-blue-800 hover:bg-white' title='How to use '><p>ตารางธาตุ</p></button></NavLink>
          </div>
          <div className=' ml-16'>
            <NavLink to="/howplay"><button className='text-xl rounded-full border-2 border-white p-2 mt-4 ml-[-20px] duration-700 hover:text-blue-800 hover:bg-white' title='How to use '><p>คู่มือการใช้งาน</p></button></NavLink>
          </div>
        </div>
    </div>
  )
}

export default test