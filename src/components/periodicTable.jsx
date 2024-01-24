import React from 'react'
import { NavLink } from 'react-router-dom'

function periodicTable() {
  return (
    <div className='bg-blue-400 w-4/4 h-[46.4rem] font-thaif-1 text-white'>
        <div className=''>
            <div className='text-center'>
                <h1 className='font-bold text-[60px]'>ตารางธาตุ</h1>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://th.bing.com/th/id/R.92e577b4d45b040995deeab5db281326?rik=6ggiZTov5hrP8g&pid=ImgRaw&r=0" alt="" className=' w-[60rem] h-[35rem]'/>
            </div>
            <div className='text-center'>
                    <p>ขอบคุณภาพจาก : <a href="https://sciencenotes.org/printable-color-periodic-table-chart-2015/">{"https://sciencenotes.org/printable-color-periodic-table-chart-2015/"}</a></p>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    <NavLink to="/find"><button className='w-24 text-xl rounded-full border-2 border-white p-2 mt-4 ml-[20px] duration-700 hover:text-blue-800 hover:bg-white' title='How to use '><p>กลับ</p></button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default periodicTable