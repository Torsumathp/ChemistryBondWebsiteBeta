import React from 'react'
import { NavLink } from 'react-router-dom'

function howplay() {
  return (
    <div className='bg-[url("https://cdn.discordapp.com/attachments/1126467943534972989/1199345288394068028/bg.png?ex=65c23457&is=65afbf57&hm=18d590c3cb85bd2a0a89c044589cfa14bfa1e82e2da3d580480492ba513faf84&")] bg-cover w-4/4 h-[46.4rem] font-thaif-1 text-white'>
        <div>
            <div>
                <div>
                    <h1 className='text-white text-[60px] text-center font-bold'>วิธีการใช้ระบบค้นหา</h1>
                </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src="https://cdn.discordapp.com/attachments/1092350680167096380/1199726373690945677/howtouse.png?ex=65c39741&is=65b12241&hm=99836248ca9ab9bb59e35746eabf860a21c522299d3a893431b42cf13d83e6bd&" alt="" className='w-[55rem] mr-8'/>
            </div>
            <div className='text-center mt-8'>
                <p className='text-xl font-bold'>**หมายเหตุ** เลขที่สามารถห้อยได้มีแค่ 1-10 แต่หากไม่มีเลขห้อยให้ใส่ 0</p>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                <NavLink to="/compare"><button className='w-24 text-xl rounded-full border-2 border-white p-2 mt-4 ml-[20px] duration-700 hover:text-blue-800 hover:bg-white' title='How to use '><p>กลับ</p></button></NavLink>
                    <NavLink to="/find"><button className='w-24 text-xl rounded-full border-2 border-white p-2 mt-4 ml-[20px] duration-700 hover:text-blue-800 hover:bg-white' title='How to use '><p>ต่อไป</p></button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default howplay