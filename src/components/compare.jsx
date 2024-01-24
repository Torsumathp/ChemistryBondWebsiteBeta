import React from 'react'
import { NavLink } from 'react-router-dom'

function compare() {
  return (
    <div className='bg-[url("https://cdn.discordapp.com/attachments/1126467943534972989/1199345288394068028/bg.png?ex=65c23457&is=65afbf57&hm=18d590c3cb85bd2a0a89c044589cfa14bfa1e82e2da3d580480492ba513faf84&")] bg-cover w-4/4 h-[46.4rem] font-thaif-1 text-white'>
        <div>
            <div className=''>
                <h1 className='font-bold text-[60px] text-center'>ความแตกต่าง</h1>
            </div>
            <div className='mt-16 flex'>
                <div className='border-r-2 border-white'>
                    <div className='text-start ml-8'>
                        <h1 className='text-4xl font-semibold text-center'>พันธะโคเวเลนต์</h1>
                    </div>
                    <div className=' mt-[2rem] mb-[2rem] ml-[6rem] mr-[6rem]'>
                        <ul className='w-[34rem] space-y-8'>
                            <li className='text-xl'>1 )  ในพันธะไอออนิก อิเล็กตรอนจะถูกถ่ายโอนจากอะตอมหนึ่งไปยังอีกอะตอมหนึ่ง</li>
                            <li className='text-xl'>2 )  เกิดจากรวมตัวของโลหะและอโลหะ</li>
                            <li className='text-xl'>3 )  มีจุดหลอมเหลวสูง</li>
                            <li className='text-xl'>4 )  ไม่มีรูปร่างที่แน่นอน</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <div className='text-start ml-8 text'>
                        <h1 className='text-4xl font-semibold text-center'>พันธะไอออนิก</h1>
                    </div>
                    <div className='mt-[2rem] mb-[2rem] w-3/4 ml-[4rem]'>
                        <ul className='w-[34rem] space-y-8'>
                            <li className='text-xl'>1 )  ในพันธะโควาเลนต์ อิเล็กตรอนจะถูกแบ่งปันระหว่างอะตอม</li>
                            <li className='text-xl'>2 )  เกิดจากรวมตัวของโลหะและอโลหะ</li>
                            <li className='text-xl'>3 )  มีจุดหลอมเหลวสูง</li>
                            <li className='text-xl'>4 )  รูปร่างที่แน่นอน</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center space-x-4 mr-[5rem] ml-[5rem] mt-[6rem]'>
                <div className=''>
                    <NavLink to="/mean"><button className='flex items-center justify-center w-64 h-16 border-2 text-2xl border-white rounded-md mt-[3rem] duration-700 hover:text-blue-800 hover:bg-white'>กลับ</button></NavLink>
                </div>
                <div className=''>
                    <NavLink to="/howplay"><button className='flex items-center justify-center w-64 h-16 border-2 text-2xl border-white rounded-md mt-[3rem] duration-700 hover:text-blue-800 hover:bg-white'>ค้นหาชื่อสารประกอบ</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default compare