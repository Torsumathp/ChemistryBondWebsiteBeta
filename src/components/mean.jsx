import React from 'react'
import { NavLink } from 'react-router-dom'

function mean() {
  return (
    <div className='bg-[url("https://cdn.discordapp.com/attachments/1126467943534972989/1199345288394068028/bg.png?ex=65c23457&is=65afbf57&hm=18d590c3cb85bd2a0a89c044589cfa14bfa1e82e2da3d580480492ba513faf84&")] bg-cover w-4/4 h-[46.4rem] font-thaif-1 text-white'>
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-[60px]'>ความหมาย ?</h1>
            </div>
            <div className='mt-16'>
                <div className=''>
                    <div className='text-start ml-8'>
                        <h1 className='text-4xl font-semibold'>{" > "} พันธะโคเวเลนต์</h1>
                    </div>
                    <div className='w-3/4 ml-[5.5rem] mt-[2rem] mb-[2rem]'>
                        <p className='text-xl'>พันธะไอออนิก(Ionic bond) คือ แรงยึดเหนี่ยวที่เกิดในสาร โดยที่อะตอมของธาตุที่มีค่าพลังงานไอออไนเซชันต่ำ ให้เวเลนต์อิเล็กตรอนแก่อะตอมของธาตุที่มีค่าพลังงานไอออนไนเซชันสูง กลายเป็นไอออนที่มีประจุบวกและประจุลบ เมื่อไอออนทั้งสองเข้ามาอยู่ใกล้กันจะเกิดแรงดึงดูดทางไฟฟ้าที่แข็งแรงระหว่างประจุไฟฟ้าตรงข้ามเหล่านั้น ทำให้ไอออนทั้งสองยึดเหนี่ยวกันด้วย พันธะเคมีที่เรียกว่า “พันธะไอออนิก”</p>
                    </div>
                </div>
                <div className=''>
                    <div className='text-start ml-8'>
                        <h1 className='text-4xl font-semibold'>{" > "} พันธะไอออนิก</h1>
                    </div>
                    <div className='w-3/4 ml-[5.5rem] mt-[2rem] mb-[2rem]'>
                    <p className='text-xl'>พันธะโคเวเลนต์ (Covalent Bond) เป็นพันธะที่มีการใช้อิเล็กตรอนวงนอกสุดร่วมกันเพื่อให้ครบตาม กฎออกเตต (Octet's Rule) คือมี อิเล็กตรอนวงนอกสุด ครบ 8 ตัว ซึ่งยังมี พันธะโคเวเลนต์ อีกชนิดหนึ่งคือ พันธะโคออร์ดิเนตโคเวเลนต์ (Coordinate Covalent Bond) ซึ่งเกิดจากการที่ อะตอม หนึ่งให้ อิเล็กตรอน ทั้ง 2 ตัวแก่อิเล็กตรอนอีกตัวหนึ่งใช้ร่วมกัน</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mr-[5rem] ml-[5rem] mt-16'>
                <NavLink to="/"><button className='flex items-center justify-center w-40 h-16 border-2 text-2xl border-white rounded-md mt-[3rem] duration-700 hover:text-blue-800 hover:bg-white'>หน้าแรก</button></NavLink>
                <NavLink to="/compare"><button className='flex items-center justify-center w-40 h-16 border-2 text-2xl border-white rounded-md mt-[3rem] duration-700 hover:text-blue-800 hover:bg-white'>ความแตกต่าง</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default mean