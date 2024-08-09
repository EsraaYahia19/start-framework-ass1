import React, { useState } from 'react'

export default function Contact() {
    let [labname, setLabname] = useState(false)
    let [labage, setLabage] = useState(false)
    let [labe, setLabemail] = useState(false)
    let [labpass, setLabpass] = useState(false)
    let [hide, setHide] = useState("label")
    let [show, setShow] = useState("labelshow")

    function showlabelname() {
        setLabname(true)
    }

    function showlabelage() {
        setLabage(true)
    }
    function showlabelemail() {
        setLabemail(true)
    }
    function showlabelpass() {
        setLabpass(true)
    }

    return (
        <>
            <div className='mb-10 contact bg-white text-center text-[#2C3E50] mt-28  '>
                <div className=''>
                    <h2 className='font-bold text-[2.5rem] uppercase  pt-5'>conatct section</h2>
                    <div className='w-[70%] mx-auto flex flex-wrap gap-4 h-6 items-center justify-center py-3'>
                        <div className="beforIcon h-1 w-20 bg-[#2C3E50]"></div>
                        <i class="fa-solid fa-star"></i>
                        <div className="beforIcon h-1 w-20 bg-[#2C3E50]"></div>

                    </div>

                    <div className='mt-10 text-center relative w-[50%] mx-auto overflow-hidden'>


                        <label htmlFor="name" className={`${hide} ${labname ? show : hide}`}>userName:</label>


                        <input type="text" id='name' placeholder='userName' className=' mt-5 w-[100%] h-10 py-6  outline-none border-b-[1px] border[#595C5F]' onInput={() => showlabelname()} />
                    </div>
                    <div className='mt-10 text-center relative w-[50%] mx-auto overflow-hidden'>


                        <label htmlFor="age" className={`${hide} ${labage ? show : hide}`}>userAge:</label>


                        <input type="number" id='age' placeholder='userAge' className=' mt-5 w-[100%] h-10 py-6  outline-none border-b-[1px] border[#595C5F]' onInput={() => showlabelage()} />
                    </div>
                    <div className='mt-10 text-center relative w-[50%] mx-auto overflow-hidden'>


                        <label htmlFor="email" className={`${hide} ${labe ? show : hide}`}>userEmail:</label>


                        <input type="email" id='email' placeholder='userEmail' className=' mt-5 w-[100%] h-10 py-6  outline-none border-b-[1px] border[#595C5F]' onInput={() => showlabelemail()} />
                    </div>
                    <div className='mt-10 text-center relative w-[50%] mx-auto overflow-hidden'>


                        <label htmlFor="pass" className={`${hide} ${labpass ? show : hide}`}>userPassword:</label>


                        <input type="password" id='pass' placeholder='userPassword' className=' mt-5 w-[100%] h-10 py-6  outline-none border-b-[1px] border[#595C5F]' onInput={() => showlabelpass()} />
                    </div>
                    <div className='text-start w-[50%] mx-auto'>
                        <button className='bg-[#1ABC9C] text-white px-4 py-2 rounded-md my-4 rou'> send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}
